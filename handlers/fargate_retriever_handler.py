import json
from task_processor import FargateTaskProcessor
from config.config import Config
from config.experimental_config import ExperimentalConfig
from core.service.experimental_config_service import ExperimentalConfigService
import logging
from retriever.retriever import retrieve

logger = logging.getLogger()
logging.basicConfig(level=logging.INFO)


class RetrieverProcessor(FargateTaskProcessor):
    def process(self):
        try:
            logger.info("Input data: %s", self.input_data)
            exp_config_data = self.input_data

            # Load base configuration
            config = Config.load_config()
            
            exp_config = ExperimentalConfigService(config).create_experimental_config(exp_config_data)
            logger.info("Into retriever processor. Processing event: %s", json.dumps(exp_config_data))
                
            # Execute retrieve method
            retrieve(config, exp_config)

            self.send_task_success({  
                "status": "success"
            })

        except Exception as e:
            logger.error(f"Error processing event: {str(e)}")
            self.send_task_failure({
                "status": "failed",
                "errorMessage": str(e)
            })


def main():
    try:
        fargate_processor = RetrieverProcessor()
        fargate_processor.process()
    except Exception as e:
        logger.error(f"Error processing event: {str(e)}")
        raise

if __name__ == "__main__":
    main()
