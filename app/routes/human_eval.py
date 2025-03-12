from typing import List, Dict
from pydantic import BaseModel, RootModel
import logging
import asyncio

from http.client import HTTPException

from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse

from flotorch_core.inferencer.inferencer_provider_factory import InferencerProviderFactory
from flotorch_core.storage.db.vector.vector_storage_factory import VectorStorageFactory
from flotorch_core.embedding.embedding_registry import embedding_registry
from flotorch_core.storage.db.dynamodb import DynamoDB
from flotorch_core.config.config import Config
from flotorch_core.config.env_config_provider import EnvConfigProvider
from flotorch_core.chunking.chunking import Chunk

from flotorch_core.embedding.titanv2_embedding import TitanV2Embedding
from flotorch_core.embedding.titanv1_embedding import TitanV1Embedding
from flotorch_core.embedding.cohere_embedding import CohereEmbedding
from flotorch_core.embedding.bge_large_embedding import BGELargeEmbedding, BGEM3Embedding, GTEQwen2Embedding

# Flotorch-core config
env_config_provider = EnvConfigProvider()
config = Config(env_config_provider)

logger = logging.getLogger(__name__)
router = APIRouter()


class ExperimentQuery(BaseModel):
    experiment_ids: List[str]
    query: str
    
class VotePayload(RootModel):
    root: Dict[str, int]
    
    
def get_experiment_db():
    return DynamoDB(config.get_experiment_table_name())

def get_experiment_configs(experiment_db: DynamoDB, experiment_ids: List[str]) -> List[Dict]:
    """
    Get the experiment configs for all experiments using their IDs.

    Args:
        experiment_db: Instance of DynamoDB.
        experiment_ids (List[str]): List of experiment IDs.

    Returns:
        List[Dict]: List of JSON objects for each experiment.
    """
    experiments = []
    for experiment_id in experiment_ids:
        try:
            item = experiment_db.read({'id': experiment_id})
            if item:
                experiments.append(item)
        except Exception as e:
            print(f"Error reading from DynamoDB for ID {experiment_id}: {str(e)}")
    return experiments


@router.post("/heval/query-experiments", tags=["heval"])
async def query_experiments(
    query: ExperimentQuery,
    experiment_db: DynamoDB = Depends(get_experiment_db)
):
    num_experiments = len(query.experiment_ids)
    if not (2 <= num_experiments <= 3):
        raise HTTPException(
            status_code=400,
            detail="The number of experiment_ids must be between 2 and 3."
        )

    experiment_configs = get_experiment_configs(experiment_db, query.experiment_ids)

    async def run_experiment(exp_config_data):
        experiment_id = exp_config_data.get("id")
        exp_config = exp_config_data.get("config")

        # Configurations
        aws_region = exp_config.get("aws_region")
        knowledge_base = exp_config.get("knowledge_base", False)
        bedrock_knowledge_base = exp_config.get("bedrock_knowledge_base", False)

        # Inferencer Initialization
        inferencer = InferencerProviderFactory.create_inferencer_provider(
            exp_config.get("retrieval_service"),
            exp_config.get("retrieval_model"),
            aws_region,
            config.get_sagemaker_arn_role(),
            int(exp_config.get("n_shot_prompts")),
            float(exp_config.get("temp_retrieval_llm")),
            exp_config.get("n_shot_prompt_guide")
        )

        vector_storage = None
        if knowledge_base:
            vector_storage = VectorStorageFactory.create_vector_storage(
                knowledge_base=knowledge_base,
                use_bedrock_kb=bedrock_knowledge_base,
                embedding=(
                    embedding_registry.get_model(exp_config.get("embedding_model"))(
                        exp_config.get("embedding_model"), aws_region, 
                        int(exp_config.get("vector_dimension"))
                    )
                    if not bedrock_knowledge_base else None
                ),
                opensearch_host=config.get_opensearch_host(),
                opensearch_port=config.get_opensearch_port(),
                opensearch_username=config.get_opensearch_username(),
                opensearch_password=config.get_opensearch_password(),
                index_id=exp_config_data.get("index_id"),
                knowledge_base_id=exp_config.get("kb_data"),
                aws_region=aws_region
            )

        # Answer Generation
        if vector_storage:
            hierarchical = exp_config.get("chunking_strategy") == 'hierarchical'
            question_chunk = Chunk(data=query.query)

            vector_response = await asyncio.to_thread(
                vector_storage.search, question_chunk, exp_config['knn_num'], hierarchical
            )
            vector_response = vector_response.to_json()['result']
            metadata, answer = await asyncio.to_thread(
                inferencer.generate_text, query.query, vector_response
            )
        else:
            metadata, answer = await asyncio.to_thread(
                inferencer.generate_text, query.query, None
            )

        return {
            "experiment_id": experiment_id,
            "answer": answer,
            "metadata": metadata
        }

    results = await asyncio.gather(*[run_experiment(exp) for exp in experiment_configs])

    return JSONResponse(content={"results": results})

    
@router.post("/heval/upvote", tags=["heval"])
async def vote(
    vote_data: VotePayload,
    experiment_db: DynamoDB = Depends(get_experiment_db)
    ):
    
    # Validate payload is not empty
    votes = vote_data.root
    if not votes:
        raise HTTPException(status_code=400, detail="Vote payload cannot be empty")
        
    results = {}
    
    try:
        for exp_id, vote in votes.items():
            # Validate experiment ID is not empty
            if not exp_id:
                raise HTTPException(status_code=400, detail="Experiment ID cannot be empty")
                
            # Validate vote value
            if vote not in [0, 1]:
                raise HTTPException(status_code=400, detail=f"Invalid vote value for {exp_id}. Must be 0 or 1.")
            
            # Check if experiment record exists
            key = {'id': exp_id}
            item = experiment_db.read(key)
            
            if item:
                # Record exists, update the score
                current_score = item.get("scores", 0)
                new_score = current_score + vote
                
                # Prepare data for update
                update_data = {"scores": new_score}
                
                try:
                    success = experiment_db.update(
                        key=key,
                        data=update_data
                    )
                    if not success:
                        logger.error(f"Failed to update score for {exp_id}")
                        raise HTTPException(status_code=500, detail=f"Database update failed for {exp_id}")
                except Exception as e:
                    logger.error(f"Failed to update score for {exp_id}: {str(e)}")
                    raise HTTPException(status_code=500, detail=f"Database update failed for {exp_id}")
                
                results[exp_id] = {"previous_score": current_score, "new_score": new_score}
                logger.info(f"Updated score for {exp_id}: {current_score} -> {new_score}")
            
            else:
                # Record doesn't exist
                logger.warning(f"Cannot find experiment: {exp_id}")
                raise HTTPException(status_code=404, detail=f"Experiment {exp_id} not found")

        return {
            "status": "success",
            "message": "Votes recorded successfully",
            "results": results
        }
    
    except HTTPException:
        raise
    
    except Exception as e:
        logger.error(f"Error recording votes: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to record votes: {str(e)}")