export const useTooltipInfo = {
    name:{
     label: 'Project Name',
     info: 'Project Name',
     },
    region: {
     label: 'Region',
     info: 'Specify the region where your AWS compute resources are hosted',
     link: 'region',
     content: '<p>AWS hosts different regions and avaibility zones in its infrastructure. When FloTorch users select particular zone such as US-East1 or US_West2</p>'
    },
    kb_data: {
     label: 'Knowledge Base Data',
     info: 'Upload or specify the knowledge base (documents, FAQs, etc.) that the application will use for retrieving relevant information.',
     content: '<p>In the context of Retrieval Augmented Generation (RAG), a "knowledge base" refers to a repository of structured information, like documents, data sets, or articles, that a large language model can access and retrieve relevant data from to enhance its responses to user queries, providing more accurate and contextually relevant answers based on specific, up-to-date information not necessarily included in its initial training data.</p>',
     link: 'knowledge-base-data'
    },
    gt_data: {
        label: 'Ground Truth Data',
        info: 'Provide a reference dataset or accurate responses to evaluate the model\'s performance and accuracy',
        content: '<p>Ground truth data serves as a benchmark for evaluating the accuracy and performance of the model by comparing its outputs against known correct responses.</p>',
        link: 'ground-truth-data'
    },
    chunking_strategy: {
        label: 'Chunking',
        info: 'Select the method for dividing input documents into smaller, manageable sections.',
        content: '<div><p><a href="https://adasci.org/chunking-strategies-for-rag-in-generative-ai/" target="_blank" class="external-link inline-flex">Chunking<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="#006ce0"><path d="M15 1H9v2h2.586l-3 3L10 7.414l3-3V7h2z"/><path d="M7 3H1v12h12V9h-2v4H3V5h4z"/></g></svg></a> in Retrieval Augmented Generation (RAG) systems using Large Language Models (LLMs) is the process of dividing large documents or text corpora into smaller, manageable segments called chunks. This technique is crucial for optimizing the performance of RAG systems, which combine information retrieval with language generation to produce more accurate and contextually relevant responses.</p> <h3 class="text-lg font-semibold">Key Aspects of Chunking in RAG</h3> <p><strong>Purpose:</strong> Chunking enhances the efficiency and accuracy of the retrieval process, which directly impacts the overall performance of RAG models.</p><p><strong>Improved Retrieval:</strong> By breaking down information into smaller units, chunking allows for faster and more precise identification of relevant content.</p><p><strong>Enhanced Generation:</strong> Well-defined chunks provide the generator with necessary context, leading to more coherent and contextually rich responses.</p><p><strong>Scalability:</strong> Chunking enables efficient management of massive datasets, as each chunk can be individually indexed and maintained.</p><h3 class="text-lg font-semibold">Common Chunking Strategies</h3><p><strong>Fixed-size Chunking:</strong> Divides text into uniform chunks based on a predefined character count.Currently fixed-size chunking is supported in FloTorch.</p><p><strong>Semantic Chunking:</strong> Breaks text into semantically coherent segments, preserving contextual integrity.</p><p><strong>Token-based Chunking:</strong> Segments text based on a specific number of tokens, which is particularly useful for LLMs with token limits.</p><p><strong>Hierarchical Chunking:</strong> <a class="external-link inline-flex" href="https://bitpeak.com/chunking-methods-in-rag-overview-of-available-solutions/" target="_blank">Hierarchical chunking<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="#006ce0"><path d="M15 1H9v2h2.586l-3 3L10 7.414l3-3V7h2z"/><path d="M7 3H1v12h12V9h-2v4H3V5h4z"/></g></svg></a> is an advanced technique used in Retrieval-Augmented Generation (RAG) systems to optimize the processing of large datasets. This method involves dividing documents into multiple levels of chunks, typically ranging from larger to smaller sizes Currently hierarchical chunking is supported in FloTorch.</p><p>Effective chunking is essential for RAG systems as it directly influences retrieval precision, response quality, and computational efficiency3. The choice of chunking strategy depends on factors such as document structure, application requirements, and the desired balance between semantic integrity and processing speed.</p></div>',
        link: 'chunking'
    },
    fixed_chunk_size: {
        label: 'Fixed Chunk Size',
        info: 'Define the maximum size (in tokens) of each chunk to optimize retrieval accuracy and performance.',
        content: '<p><a href="https://vectorize.io/evaluating-the-ideal-chunk-size-for-a-rag-system/" target="_blank" class="external-link inline-flex">Chunk size<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="#006ce0"><path d="M15 1H9v2h2.586l-3 3L10 7.414l3-3V7h2z"/><path d="M7 3H1v12h12V9h-2v4H3V5h4z"/></g></svg></a> in RAG (Retrieval Augmented Generation) systems refers to the number of words or tokens used to divide large documents into smaller, manageable segments for efficient information retrieval. It is a critical parameter that significantly impacts the performance and effectiveness of RAG systems.</p><h3 class="text-lg font-semibold">Chunk size matters for several reasons:</h3><p><strong>Relevance and granularity:</strong> Smaller chunk sizes (e.g., 128 tokens) provide more granular information but risk missing vital context. Larger sizes (e.g., 512 tokens) often capture more comprehensive information1.</p><p><strong>Retrieval accuracy:</strong> Smaller chunks allow for more precise matching and retrieval of relevant information, improving the system\'s ability to find specific details8.</p><p><strong>Context preservation:</strong> Larger chunks provide broader context, which can be beneficial for tasks requiring more comprehensive understanding2.</p><p><strong>Computational efficiency:</strong> Smaller chunks generally lead to faster retrieval times, but too many small chunks can increase search complexity.</p><p><strong>Response quality:</strong> The chunk size affects the faithfulness and relevancy of the generated responses. Studies have shown that a chunk size of 1024 tokens can provide an optimal balance between response time and quality.</p><h3 class="text-lg font-semibold">The ideal chunk size varies depending on factors such as:</h3><p>The nature and structure of the source documents</p><p>The specific task or query types</p><p>The desired balance between precision and context</p><p>The computational resources available</p><p>We suggest starting with a chunk size of around 256 tokens (approximately 1024 characters) and then experimenting to find the optimal size for a specific use case. It\'s important to note that chunk sizes can vary within a dataset, allowing for flexibility based on the information density of different sections or paragraphs.</p>',
        link: 'chunk-size'
    },
    fixed_chunk_overlap_percentage: {
        label: 'Fixed Chunk Overlap Percentage',
        info: 'Set the number of overlapping tokens or words between adjacent chunks to maintain context continuity.',
        content: '<p>Chunk percentage overlap refers to the proportion of content shared between consecutive text chunks when a document is split for indexing and retrieval. It\'s a crucial parameter that impacts both the indexing process and the quality of information retrieved. &#160;</p><h3 class="text-lg font-semibold">How Chunking and Overlap Work?</h3><p><strong>Document Splitting:</strong> A large document is divided into smaller, manageable units called &quot;chunks.&quot; These chunks are the units of information that the RAG system will retrieve. &#160;</p><p><strong>Overlap:</strong> Instead of creating chunks with completely distinct content, a certain percentage of text is shared or overlapped between adjacent chunks. For example, a 20% overlap means that the last 20% of a chunk is identical to the first 20% of the following chunk. &#160;</p><p><h3 class="text-lg font-semibold">Impact on Indexing:</h3></p><p><strong>Increased Redundancy:</strong> Overlapping chunks introduce redundancy into the index. The same content is indexed multiple times (across different chunks). This increases the size of the index.</p><p><strong>More Comprehensive Context:</strong> Overlap ensures that important contextual information isn\'t lost at chunk boundaries. If a sentence or key phrase spans across two chunks, the overlap ensures that both chunks contain enough context to be meaningful. &#160;</p><p><strong>Improved Retrieval:</strong> During retrieval, the query might match content within the overlapping portion of two chunks. This increases the chances of retrieving relevant information, even if the most relevant sentence is split across chunks.</p>',
        link: 'chunk-overlap-percentage'
    },
    embedding: {
        label: 'Embedding',
        info: 'Choose whether you want the language model from the Amazon Bedrock or Sagemaker family',
        content: '<p>An embedding model in RAG systems is a specialized neural network that converts text (documents, queries, or sentences) into dense numerical vectors - essentially mapping words and phrases into points in a high-dimensional space. These models serve dual purposes in RAG: converting knowledge base documents into vector representations and transforming user queries into the same vector space. This allows the system to find relevant documents by measuring the similarity between the query vector and document vectors in this mathematical space. The choice of embedding model significantly impacts RAG system performance through several key factors. Better models capture more nuanced semantic relationships, leading to more accurate document retrieval. Domain-specific models (like those trained on medical or legal text) often outperform general-purpose embeddings in specialized fields. Additionally, practical considerations like dimensionality, computational requirements, language support, and cost all influence the selection.</p>',
        link : 'embedding-model'
    },
    vector_dimension: {
        label: 'Vector Dimension',
        info: 'Set the dimensionality of the vector embeddings generated for document chunks',
        content: '<p>Vector dimensions in RAG (Retrieval Augmented Generation) systems refer to the size or length of the numerical vectors that represent text or other data after being processed by an embedding model. For example, OpenAI\'s text-embedding-3-small model produces vectors with 1536 dimensions, while some other models might create vectors with 384 or 768 dimensions. Each dimension captures different semantic features of the input text, with higher-dimensional vectors generally capable of representing more nuanced semantic relationships, though this comes with increased computational and storage costs. The choice of embedding model and its vector dimensions has significant implications for both system performance and resource requirements. Higher-dimensional vectors typically provide better semantic representation and can lead to more accurate similarity searches, but they require more storage space in vector databases and more computational resources for similarity calculations. For instance, a vector database storing millions of 1536-dimensional vectors will need substantially more storage space and memory compared to one storing 384-dimensional vectors. This trade-off between representation quality and resource efficiency is particularly important when scaling RAG systems to handle large document collections. Vector databases are specifically optimized to handle these high-dimensional vectors efficiently, using specialized indexing techniques like HNSW (Hierarchical Navigable Small World) or IVF (Inverted File Index) to enable fast similarity searches. The dimensionality of the vectors directly impacts the index size and search performance. For example, Pinecone, Weaviate, and other vector databases often recommend specific index configurations based on the vector dimensions of your chosen embedding model. When selecting an embedding model, it\'s crucial to consider not just the raw accuracy metrics but also how well your chosen vector database can handle the resulting vector dimensions in terms of both search performance and cost efficiency.</p>',
        link: 'vector-dimensions'
    },
    indexing_algorithm: {
        label: 'Indexing Algorithm',
        info: 'Select the algorithm for organizing and searching vector embeddings efficiently',
        content: '<p>HNSW (Hierarchical Navigable Small World) is a graph-based algorithm for finding approximate nearest neighbors (ANN), crucial for tasks like document retrieval in RAG systems. It constructs a multi-layered graph where each layer represents the data at different granularities. The top layer is sparse with long-range connections for fast coarse search, while lower layers become progressively denser with shorter-range connections for refined local search. When inserting a new data point, it\'s connected to its nearest neighbors in each layer, creating a &quot;navigable small world&quot; structure.</p><p>Searching starts at a random point in the top layer and navigates down to the bottom layer, following connections to closer neighbors at each level. This hierarchical approach allows for efficient exploration of the data space. At the bottom layer, a final search among candidate neighbors yields the approximate nearest neighbors. HNSW is particularly useful in RAG because it efficiently finds similar vector embeddings, representing documents and queries, enabling fast retrieval of relevant context for generating responses.</p><p>Key features: Hierarchical structure, navigable small world connections, approximate nearest neighbors, scalability, dynamic updates. RAG relevance: Efficient retrieval of similar document embeddings for context retrieval, crucial for fast and accurate response generation.</p>',
        link : 'indexing-algorithm'
    },
    numberOfChunksRetrieved: {
        label: 'Number of Chunks Retrieved',
        info: 'Specify how many of the most relevant chunks should be retrieved for response generation',
    },
    n_shot_prompts: {
        label: 'N-Shot Prompts',
        info: 'Define the number of examples to include in the prompt for the model during few-shot learning tasks',
        content: '<p>Yes, N-shot prompting can work in Retrieval-Augmented Generation (RAG) systems, but its effectiveness depends on the use case. Here&rsquo;s how it applies:</p><p><h3 class="text-lg font-semibold">How N-Shot Prompting Works in RAG</h3> RAG involves retrieving relevant documents and then using a language model (LLM) to generate responses. You can enhance RAG with N-shot prompting by including relevant examples in the prompt before passing it to the model.</p><p><h3 class="text-lg font-semibold">Key Considerations for N-Shot in RAG</h3> <strong>Example Relevance:</strong> The selected examples should closely resemble the query or demonstrate the expected response format. <br><strong>Token Limitations:</strong> More examples mean a longer prompt, potentially reducing room for retrieved context. <br><strong>Balancing Retrieval and Prompting:</strong> If retrieval is strong, fewer examples may be needed. If retrieval is weak, more examples might help guide the response. <h3 class="text-lg font-semibold">How Many Examples for N-Shot?</h3><strong>1-shot:</strong> Useful when examples provide structured guidance without overwhelming the model. <br><strong>2-3 shot:</strong> Effective for complex or nuanced queries where variations matter. <br><strong>More than 3:</strong> Only viable if you have enough token space and the task benefits from multiple examples. Currently not supported in FloTorch.</p>',
        link: 'n-shot-prompts'
    },
    n_shot_prompt_guide: {
        label: 'N-Shot Prompt Guide',
        info: '<p class="font-medium">Your prompt guide must be a valid JSON file containing three key sections:</p> <ul class="ml-8 list-disc"> <li> <span class="font-medium">System Prompt</span>: Instructions for the AI model </li> <li> <span class="font-medium">User Prompt</span>: Template for your main prompt </li> <li> <span class="font-medium">Examples</span>: Collection of input/output pairs </li> </ul> <p class="mt-4 font-medium">Both the system prompt and user prompt are required</p> <p class="mt-4 font-medium"> View <a href="/prompt-guide.json" target="_blank" class="underline font-medium hover:text-primary-600 external-link">sample prompt guide</a> to understand the correct format </p> <p class="mt-4 font-medium">When using N-shot prompting:</p> <ol class="ml-8 mt-1 list-disc text-gray-600"> <li>Your guide must contain at least N example pairs</li> <li>Example: For 3-shot prompting, provide 3 or more examples</li> <li>FloTorch randomly selects N examples to enhance the prompt</li> </ol>',
        content: 'Upload or specify the few-shot prompt file that the application will use for retrieving relevant information',
    },
    knn_num: {
        label: 'KNN Number',
        info: 'Set the number of nearest neighbours to consider when searching for similar embeddings in the vector index',
        content: '<p><a href="https://sqlitecloud.hashnode.dev/intro-to-vector-search-nearest-neighbor-search-algorithms-for-rag-applications" target="_blank" class="external-link inline-flex">K-Nearest Neighbors (KNN)<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="#006ce0"><path d="M15 1H9v2h2.586l-3 3L10 7.414l3-3V7h2z"/><path d="M7 3H1v12h12V9h-2v4H3V5h4z"/></g></svg></a> parameter determines how many documents or embeddings are retrieved from the vector database before being passed to the language model for answer generation. Choosing the right value for K is crucial because it impacts accuracy, cost, and latency. A higher K increases the chances of retrieving relevant context, improving accuracy, but also raises computational cost and response time. Conversely, a lower K reduces retrieval noise and speeds up inference but may omit important information.</p><h3 class="text-lg font-semibold">Key Impacts of KNN Parameter:</h3> <strong>Answer Accuracy:</strong> Higher K provides more context but may introduce irrelevant data, diluting precision. Lower K ensures focused retrieval but risks missing critical information. <br><strong>Cost Considerations:</strong> More retrieved documents mean higher computational cost in vector search and LLM token processing. Optimal K balances quality and efficiency to avoid unnecessary API or compute expenses. <br><strong>Latency &amp; Performance:</strong> Large K values increase processing time in retrieval and model inference. Smaller K speeds up response but may compromise completeness. A good approach is experimenting with different K values (e.g., K=3, K=5, K=10) and evaluating answer relevance against cost and latency trade-offs. Adaptive K selection, where K varies based on query complexity, can further optimize results.</p>',
        link: 'knn'
    },
    temp_retrieval_llm: {
        label: 'Temperature Retrieval LLM',
        info: 'Adjust the randomness of the model\'s output. Higher values produce more diverse outputs, while lower values yield more focused responses',
        content: '<p>The temperature setting controls the randomness of the model\'s responses. A lower temperature (e.g., 0 to 0.3) makes the model more deterministic, meaning it will stick closely to retrieved documents and produce highly factual, consistent answers. A higher temperature (e.g., 0.7 or higher) increases diversity and creativity, making responses more exploratory but also introducing a higher risk of hallucinations. For RAG applications focused on accuracy and reliability, such as legal or financial question-answering, keeping the temperature low is typically best. Conversely, for brainstorming or content generation, a higher temperature can be useful.</p><p>The choice of temperature impacts multiple aspects of the system:</p><p><strong>Accuracy:</strong> Lower temperatures improve factual consistency by reducing randomness, making the model adhere closely to retrieved data. <br><strong>Cost:</strong> A lower temperature may reduce token usage in iterative calls (fewer retries for corrections), but temperature itself doesn\'t directly affect API costs. <br><strong>Latency:</strong> Lower temperatures can lead to faster response times, as deterministic outputs require fewer adjustments, whereas high-temperature responses may generate longer or more variable outputs. For most enterprise RAG systems, where factual correctness is critical, a temperature between 0.0 and 0.2 is generally recommended.</p>',
        link: 'inferencing-model-temperature'
    },
    retrieval: {
        label: 'Retrieval',
        info: "Select the language model used to retrieve and generate responses based on the retrieved chunks from the Amazon family",
        content: '<p>How do you select the right inferencing model for your RAG system?  Here\'s a systematic approach: First, consider your <strong>key requirements:</strong></p><p>1. Response speed needed (latency requirements) <br>2. Cost constraints and budget <br>3. Accuracy requirements <br>4. Context window size needed for your documents <br>5. Whether you need specialized knowledge in certain domains <br>6. Deployment constraints (on-premise vs cloud)</p><p><strong>Evaluation methodology:</strong></p><p>Instead of choosing a model based on general benchmarks alone, we recommend:</p><p>1. Creating a representative test set from your actual data and uploading it in FloTorch <br>2. Defining clear evaluation metrics relevant to your use case (accuracy, consistency, relevance) <br>3. Running controlled A/B tests with different models using FloTorch</p><p><strong>Specific model selection strategies:</strong></p><p>1. Start with smaller models (like Mistral 7B or Llama 3 ) as baselines <br>2. Test mid-size models (like Nova Lite, Claude Haiku or GPT-3.5) for balance of performance/cost <br>3. Only move to larger models (like Nova Pro, GPT-4 or Claude Opus) if smaller ones don\'t meet requirements <br>4. Consider fine-tuning smaller models on your domain if you have enough data on <a href="https://aws.amazon.com/sagemaker/" target="_blank" class="external-link inline-flex">SageMaker<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="#006ce0"><path d="M15 1H9v2h2.586l-3 3L10 7.414l3-3V7h2z"/><path d="M7 3H1v12h12V9h-2v4H3V5h4z"/></g></svg></a> or similar.</p><p>Key metrics to track:</p><p>1. Answer relevance (Supported in FloTorch) <br>2. Contenxt Precision (Supported in FloTorch) <br>3. Response consistency  <br>4. Hallucination rate (Check actual answers and ground truth in FloTorch) <br>5. Latency per query (look at inferencing time) <br>6. Cost per query (look at cost breakdown)</p><p><strong>Practical tips:</strong></p><p>1. Run separate evaluations for different query types <br>2. Test with different prompt templates <br>3. Measure performance with different retrieval counts <br>4. Consider hosting costs and infrastructure requirements <br>5. Test model performance with and without retrieved context</p>',
        link: 'inferencing-model'
    },
    hierarchical_parent_chunk_size: {
        label: 'Hierarchical Parent Chunk Size',
        info: 'Set the size (in tokens) of the parent chunks for hierarchical chunking',
        link: 'chunk-size'
    },
    hierarchical_child_chunk_size: {
        label: 'Hierarchical Child Chunk Size',
        info: 'Set the size (in tokens) of the child chunks for hierarchical chunking',
        link: 'chunk-size'
    },
    hierarchical_chunk_overlap_percentage: {
        label: 'Hierarchical Chunk Overlap Percentage',
        info: 'Set the overlap percentage for hierarchical chunking',
        link: 'chunk-overlap-percentage'
    },
    rerank_model_id: {
        label: 'Rerank Model ID',
        info: "Select an Amazon Bedrock model to reorder and refine search results from your vector store based on relevance",
        content: '<p>Reranking models serve several key purposes:</p><p><strong>Initial retrieval limitations:</strong> Vector similarity search (like embedding-based retrieval) can miss semantically relevant results since it primarily captures high-level semantic similarity. For example, if you search for &quot;What causes headaches?&quot;, vector search might return passages about general pain rather than headache-specific information.</p><p><strong>Quality refinement:</strong> Rerankers can consider more nuanced aspects of relevance by:</p><p>Looking at exact term matches and word order Understanding question-answer relationships better Considering document structure and context Evaluating factual alignment</p><p><strong>To determine if you need reranking, evaluate these factors:</strong></p><p>Quality Assessment:</p><p>Run sample queries and check if the initial retrieval results are sufficiently relevant Look for cases where obviously relevant documents are ranked too low Check if the results contain too many false positives Task Characteristics: High-precision requirements (medical, legal) &rarr; Likely need reranking Simple keyword-based queries &rarr; Might not need reranking Complex questions requiring inference &rarr; Would benefit from reranking</p><p> Cost-Benefit Analysis:</p><p>Consider computational overhead - reranking adds latency Evaluate if accuracy improvement justifies additional complexity Consider available resources (compute, time, budget)</p>',
        link: 'reranking-model'
    },
    guardrails: {
        label: 'Guardrails',
        info: "Guardrails are safety barriers or guidelines designed to protect, direct, or limit actions in various contexts",
        content: '<p>Safety guardrails are essential for RAG systems to ensure the accuracy, reliability, and ethical use of AI-generated content. These guardrails help <strong>mitigate several risks:</strong> Prevent hallucinations and factual errors. Block undesirable and harmful content Protect user privacy by filtering out personal information Ensure contextual integrity and relevance of responses Maintain compliance with responsible AI policies</p><p>Several providers offer guardrail services for RAG systems:<br> <a href="https://www.nvidia.com/en-us/research/nemo-guardrails/" target="_blank" class="external-link inline-flex">NVIDIA NeMo Guardrails<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="#006ce0"><path d="M15 1H9v2h2.586l-3 3L10 7.414l3-3V7h2z"/><path d="M7 3H1v12h12V9h-2v4H3V5h4z"/></g></a>: A toolkit and microservice for integrating security layers into RAG applications.<br> <a href="https://aws.amazon.com/bedrock/guardrails/" target="_blank" class="external-link inline-flex"> Amazon Bedrock Guardrails<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="#006ce0"><path d="M15 1H9v2h2.586l-3 3L10 7.414l3-3V7h2z"/><path d="M7 3H1v12h12V9h-2v4H3V5h4z"/></g></svg></a>: Provides configurable safeguards for building generative AI applications at scale, offering industry-leading safety protections. Bedrock Guardrails are already supported in FloTorch.<br> <a href="https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/408725049_3688557441468029_8103913771964668529_n.pdf?_nc_cat=100&ccb=1-7&_nc_sid=3c67a6&_nc_ohc=zKANG2tVv2MQ7kNvgG3DAkT&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AqBXxFRYtA92mqLrg75qt0J&oh=00_AYBWuL0XfXX310qd0wACvhsc0vbSZA-lGAN3BfPgUt7BZw&oe=67A5C099" target="_blank" class="external-link inline-flex"> Llama-Guard<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="#006ce0"><path d="M15 1H9v2h2.586l-3 3L10 7.414l3-3V7h2z"/><path d="M7 3H1v12h12V9h-2v4H3V5h4z"/></g></svg></a>: An advanced guardrail model that evaluates content after the retrieval and generation phases.</p><p>These guardrail services help enterprises strike a balance between delivering relevant content and ensuring real-time responses while maintaining safety and security in their RAG applications</p>',
        link: 'guardrails'
    },
    service: {
        label: 'Service',
        info: "<h3 class='font-bold text-lg'>Faithfulness</h3><p class='mb-5'>The <strong>Faithfulness</strong> metric measures how factually consistent a response is with the retrieved context. It ranges from 0 to 1, with higher scores indicating better consistency.</p><h3 class='font-bold text-lg'>Context Precision</h3><p class='mb-5'><strong>Context Precision</strong> is a metric that measures the proportion of relevant chunks in the <span class='tracking-wide text-sm'>retrieved_contexts</span>. It is calculated as the mean of the precision@k for each chunk in the context. Precision@k is the ratio of the number of relevant chunks at rank k to the total number of chunks at rank k.</p><h3 class='font-bold text-lg'>Response Relevancy</h3><p class='mb-5'>The <strong>Response Relevancy</strong> metric measures how relevant a response is to the user input. Higher scores indicate better alignment with the user input, while lower scores are given if the response is incomplete or includes redundant information.<p class='mb-5'><h3 class='font-bold text-lg'>Aspect Critique (maliciousness)</h3><p class='mb-5'>This is designed to assess submissions based on predefined aspects such as <span class='tracking-wide text-sm'>harmlessness</span> and <span class='tracking-wide text-sm'>correctness</span>. Additionally, users have the flexibility to define their own aspects for evaluating submissions according to their specific criteria. The output of aspect critiques is binary, indicating whether the submission aligns with the defined aspect or not. This evaluation is performed using the 'answer' as input.</p>",
        link : [{label: 'Faithfulness', link: 'https://docs.ragas.io/en/v0.2.13/concepts/metrics/available_metrics/faithfulness/#faithfulness'}, {label: 'Context Precision', link: 'https://docs.ragas.io/en/v0.2.13/concepts/metrics/available_metrics/context_precision/'}, {label: 'Response Relevancy', link: 'https://docs.ragas.io/en/v0.2.13/concepts/metrics/available_metrics/answer_relevance/'}, {label: 'Aspect Critique (maliciousness)', link: 'https://docs.ragas.io/en/latest/concepts/metrics/available_metrics/aspect_critic/'}]
    },
    ragas_embedding_llm: {
        label: 'RAGAS Embedding LLM',
        info: "Choose whether you want the language model from the Amazon Bedrock or Sagemaker family",
        link: 'inference-llm'
    },
    ragas_inference_llm: {
        label: 'RAGAS Inference LLM',
        info: "Select the language model used to retrieve and generate responses based on the retrieved chunks from the Amazon family",
        link: 'inference-llm'
    },
    ragas_rerank_llm: {
        label: 'RAGAS Rerank LLM',
        info: "Select the rerank model to use for the evaluation",
    },
    kb_model : {
        label: 'KB Model',
        info: "Select Knowledge base type",
        content: "Select the type of knowledge base you want to use for your project. This will determine the type of data that will be used for retrieval and generation.",
        link: 'knowledge-base-data'
    },
    no_own_data : {
        label : "Provision OpenSearch Cluster",
        info : "Provisioning an OpenSearch cluster is necessary to upload your own data. To set up the cluster and enable data uploads, please follow the steps outlined here.",
        link : 'https://google.com'
    },
    evaluation: {
        label: 'Evaluation',
        info: "Evaluation is the process of assessing the performance, accuracy, fairness, and robustness of models",

    }
    }
    
