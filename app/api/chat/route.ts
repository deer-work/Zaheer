import { NextRequest, NextResponse } from 'next/server';
import { createStreamableUI } from '../../../lib/streaming';
import { ChatOpenAI } from '@langchain/openai';
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';
import { MemoryVectorStore } from 'langchain/vectorstores/memory';
import { OpenAIEmbeddings } from '@langchain/openai';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { Document } from '@langchain/core/documents';
import { createRetrievalChain } from 'langchain/chains/retrieval';
import { createStuffDocumentsChain } from 'langchain/chains/combine_documents';
import { LRUCache } from 'lru-cache';

// Rate limiting implementation
interface RateLimitInfo {
  count: number;
  firstRequest: number;
  lastRequest: number;
  burstCount: number;
  burstStart: number;
  hourlyCount: number;
  hourlyStart: number;
}

// Configure rate limits with tiered approach
const RATE_LIMIT_CONFIG = {
  standard: {
    maxRequests: 3,    // 3 requests
    window: 60 * 1000, // Per minute
    cooldown: 2 * 60 * 1000 // 2 minute cooldown
  },
  burst: {
    maxRequests: 3,    // 3 requests
    window: 8 * 1000, // Per 8 seconds
    cooldown: 45 * 1000 // 45 second cooldown   
  },
  sustained: {
    maxRequests: 10,    // 10 requests
    window: 60 * 60 * 1000, // Per hour
    cooldown: 30 * 60 * 1000 // 30 minute cooldown
  }
};

// Store rate limit information by IP
const rateLimitCache = new LRUCache<string, RateLimitInfo>({
  max: 500, // Maximum number of IPs to track
  ttl: RATE_LIMIT_CONFIG.sustained.cooldown, // Auto-expire entries after the longest cooldown
});

// Enhanced rate limit check that applies multiple tiers
function checkRateLimit(ip: string): { limited: boolean; resetTime?: number; reason?: string } {
  const now = Date.now();
  
  // Get or initialize rate limit info for this IP
  let limitInfo = rateLimitCache.get(ip);
  if (!limitInfo) {
    limitInfo = {
      count: 1,
      firstRequest: now,
      lastRequest: now,
      burstCount: 1,
      burstStart: now,
      hourlyCount: 1,
      hourlyStart: now
    };
    rateLimitCache.set(ip, limitInfo);
    return { limited: false };
  }
  
  // Update the current stats
  limitInfo.lastRequest = now;
  
  // Check burst limit (short-term high frequency)
  const timeSinceBurstStart = now - limitInfo.burstStart;
  if (timeSinceBurstStart > RATE_LIMIT_CONFIG.burst.window) {
    // Reset burst window
    limitInfo.burstCount = 1;
    limitInfo.burstStart = now;
  } else {
    limitInfo.burstCount++;
    // Check if burst limit exceeded
    if (limitInfo.burstCount > RATE_LIMIT_CONFIG.burst.maxRequests) {
      const resetTime = limitInfo.burstStart + RATE_LIMIT_CONFIG.burst.cooldown;
      rateLimitCache.set(ip, limitInfo);
      return { 
        limited: true, 
        resetTime,
        reason: 'Too many requests in a short period'
      };
    }
  }
  
  // Check standard limit (minute-by-minute)
  const timeSinceStart = now - limitInfo.firstRequest;
  if (timeSinceStart > RATE_LIMIT_CONFIG.standard.window) {
    // Reset standard window
    limitInfo.count = 1;
    limitInfo.firstRequest = now;
  } else {
    limitInfo.count++;
    // Check if standard limit exceeded
    if (limitInfo.count > RATE_LIMIT_CONFIG.standard.maxRequests) {
      const resetTime = limitInfo.firstRequest + RATE_LIMIT_CONFIG.standard.cooldown;
      rateLimitCache.set(ip, limitInfo);
      return { 
        limited: true, 
        resetTime,
        reason: 'Rate limit exceeded, please try again later'
      };
    }
  }
  
  // Check sustained/hourly limit
  const timeSinceHourlyStart = now - limitInfo.hourlyStart;
  if (timeSinceHourlyStart > RATE_LIMIT_CONFIG.sustained.window) {
    // Reset hourly window
    limitInfo.hourlyCount = 1;
    limitInfo.hourlyStart = now;
  } else {
    limitInfo.hourlyCount++;
    // Check if hourly limit exceeded
    if (limitInfo.hourlyCount > RATE_LIMIT_CONFIG.sustained.maxRequests) {
      const resetTime = limitInfo.hourlyStart + RATE_LIMIT_CONFIG.sustained.cooldown;
      rateLimitCache.set(ip, limitInfo);
      return { 
        limited: true, 
        resetTime,
        reason: 'Hourly limit reached, please try again later'
      };
    }
  }
  
  // Update the cache with the new counts
  rateLimitCache.set(ip, limitInfo);
  return { limited: false };
}

// Load CV data directly as a string
const CV_DATA = `# Zaheer Ahmed

**Agentic AI Developer & Cloud Generative AI Engineer**
Islamabad, Pakistan
Email: dev.zaheer.ahmad@gmail.com
LinkedIn: linkedin.com/in/zaheerahmedabbasi
GitHub: https://github.com/NxtGen-Dev-ZAH
Instagram: https://www.instagram.com/zaheer_ahmed556/
Facebook: https://www.facebook.com/zaheer.ahmadabbasi.77

## Profile

Passionate and innovative Generative AI Engineer with over two years of experience in designing and deploying cloud-native AI solutions and scalable backend systems. Specializing in Large Language Models (LLMs), Retrieval-Augmented Generation (RAG) pipelines, and multimodal models like CLIP, I excel at building intelligent, automated systems integrated with modern APIs and microservices. My expertise in Azure Cloud, Docker, and FastAPI enables the delivery of high-performance AI platforms that enhance user engagement and operational efficiency. I am dedicated to pushing the boundaries of AI innovation while maintaining a focus on scalable, cloud-based architectures.

## Core Skills

- **Cloud Platforms**: Azure Cloud, Docker, CI/CD Pipelines, Dapr
- **Generative AI**: LLMs, LangChain, LangGraph, CrewAI, Autogen, CLIP, OpenAI APIs, RAG Systems
- **Backend Engineering**: FastAPI, Flask, Node.js, Kafka, Kong API Gateway
- **Databases**: PostgreSQL, MySQL, NEON, VectorDBs
- **Programming Languages**: Python, TypeScript, JavaScript, C++
- **API Development**: REST, GraphQL, OpenAI APIs
- **DevOps Tools**: GitHub, Azure DevOps
- **Soft Skills**: Communication, Problem-Solving, Emotional Intelligence, Continuous Learning
- **Languages**: English (Fluent), French (Intermediate) , Urdu (Native)

## Education

- **Arid Agriculture University, Rawalpindi**
  *Bachelor's Degree in Artificial Intelligence*
  September 2022 – July 2026

- **Presidential Initiative for AI & Computing (PIAIC), Islamabad**
  *Certification in Artificial Intelligence & Computing*
  June 2023 – May 2025

## Certifications

- Data Analysis with Python
- Machine Learning with Python (with Honors)
- Developing AI Applications with Python and Flask
- Introduction to Deep Learning & Neural Networks with Keras
- Python for Data Science, AI & Development

## Professional Experience

### DataSAZ Solutions, Islamabad

**AI Engineer**
*October 2024 – Present*

- Develop advanced AI solutions, including fine-tuned LLMs and agentic AI systems for enterprise use cases.
- Implement scalable microservices with FastAPI, Kafka, and Kong API Gateway, deployed on Azure Cloud.
- Design and deploy CI/CD pipelines using Docker and Azure DevOps for streamlined development workflows.

### Fiverr

**Freelance AI and ML Engineer**
*September 2024 – Present*

- Deliver tailored AI solutions, including custom chatbots, LLM fine-tuning, and agentic AI workflows for global clients.
- Build scalable microservices with FastAPI, Next.js, and Kafka, integrated with cloud platforms like Azure.
- Provide AI consulting services, focusing on automation and intelligent system design.

### PIAIC, Islamabad

**Generative AI Developer**
*July 2023 – Present*

- Designed and deployed AI-powered applications on Azure Cloud using Docker for seamless scaling.
- Developed personalized AI chatbots and virtual assistants using LLMs and RAG pipelines to boost productivity.
- Managed cloud-based microservices with FastAPI and Kong API Gateway for efficient backend operations.

### Thunderbird Technologies, Islamabad

**Software Developer**
*July 2024 – September 2024*

- Implemented Kafka-based event streaming systems integrated with AI microservices for real-time data processing.
- Developed scalable, cloud-hosted APIs for e-commerce and notification services using Azure Cloud and Next.js.
- Gained hands-on experience in frontend (Next.js) and backend (Node.js) development with Firebase deployment.

## Key Projects

### Autonomous Research Agent

- Built an autonomous research agent using LangGraph, OpenAI APIs, and Next.js to independently gather, analyze, and synthesize information.
- Implemented task decomposition, memory management, and recursive refinement for complex research tasks.

### Multi-Agent Workflow Automation

- Developed a cooperative AI agent system using CrewAI, FastAPI, and PostgreSQL to automate business workflows.
- Designed a custom orchestration layer for task delegation, quality control, and inter-agent communication.

### RAG-Powered Knowledge Base

- Created an intelligent document processing system using LlamaIndex, Faiss, LangChain, and Next.js.
- Features hybrid search, contextual recommendations, and automated knowledge graph construction from unstructured documents.

### AI Agent Marketplace

- Engineered a platform for creating and deploying custom AI agents using React, FastAPI, and LangGraph.
- Included agent configuration tools, performance monitoring, and automated testing frameworks.

### Cloud AI Assistant

- Developed an AI assistant using Next.js, FastAPI, and OpenAI APIs, deployed on Azure Cloud.
- Enabled seamless user interaction through scalable cloud infrastructure and modern API integrations.

### E-commerce Backend API

- Built cloud-hosted microservices with Kafka and FastAPI to manage orders, payments, and notifications for an e-commerce platform.
- Ensured high availability and scalability through Azure Cloud deployment.

## Publications

- **From Code to Cloud: My Journey in AI, Web Development, and Beyond**
  A detailed exploration of my experiences in AI, cloud engineering, and scalable system design.

## Interests

- Staying at the forefront of agentic AI, generative AI, and scalable cloud technologies.
- Exploring emerging trends in multi-agent systems, automation, and intelligent workflows.
- Contributing to open-source AI projects and collaborating on innovative tech solutions.

## Contact

Let's connect to bring innovative AI-powered solutions to life!

- **Email**: dev.zaheer.ahmad@gmail.com
- **LinkedIn**: linkedin.com/in/zaheerahmedabbasi
- **GitHub**: github.com/zaheerahmad`;

// Initialize the vector store and retriever - this happens once when the API route is first loaded
let vectorStore: MemoryVectorStore;
let retriever: ReturnType<MemoryVectorStore['asRetriever']>;
let initialized = false;
let initializing = false;

// Setup a response cache with LRU strategy
const responseCache = new LRUCache<string, string>({
  max: 100, // Store up to 100 query/response pairs
  ttl: 1000 * 60 * 60, // Cache for 1 hour
});

// Pre-compute common question categories for faster retrieval
const COMMON_TOPICS = [
  "skills", "experience", "education", "contact", "projects", 
  "background", "certifications", "technologies"
];

// Optimized chunk settings for better retrieval
const CHUNK_CONFIG = {
  chunkSize: 500,     // Larger chunks to reduce fragmentation
  chunkOverlap: 100,  // Higher overlap for better context preservation
  separators: ["\n\n", "\n", "## ", "# ", "### ", "- ", "**", "*", ":", "."],
};

async function initializeRetriever() {
  if (initialized) return true;
  if (initializing) {
    // Wait for initialization to complete if already in progress
    while (initializing) {
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    return initialized;
  }
  
  initializing = true;
  
  if (!process.env.OPENAI_API_KEY) {
    initializing = false;
    throw new Error("OPENAI_API_KEY is not set in the environment variables");
  }

  try {
    // Create a text splitter with optimized settings
    const textSplitter = new RecursiveCharacterTextSplitter(CHUNK_CONFIG);

    // Split CV data into chunks
    const cvDocument = new Document({ pageContent: CV_DATA });
    const docs = await textSplitter.splitDocuments([cvDocument]);
    console.log(`Split CV into ${docs.length} chunks`);

    // Use OpenAI embeddings with optimization
    const embeddings = new OpenAIEmbeddings({
      stripNewLines: true, // Remove newlines for better embedding quality
    });
    
    // Create a vector store from the documents
    vectorStore = await MemoryVectorStore.fromDocuments(docs, embeddings);
    
    // Create a retriever with optimized settings
    retriever = vectorStore.asRetriever({
      searchType: "similarity",
      k: 4, // Retrieve more chunks for better context
      filter: undefined, // No filtering for this small dataset
    });

    // Pre-warm the cache with common queries
    await Promise.all(COMMON_TOPICS.map(async (topic) => {
      const query = `Tell me about Zaheer's ${topic}`;
      // We don't need to store results here, just trigger the embeddings calculation
      await vectorStore.similaritySearch(query, 3);
    }));

    console.log("Retriever initialized successfully");
    initialized = true;
    initializing = false;
    return true;
  } catch (error) {
    console.error("Error initializing retriever:", error);
    initializing = false;
    throw error;
  }
}

// Define the system prompt for the chatbot
const SYSTEM_TEMPLATE = `You are a helpful, professional assistant for Zaheer Ahmed, an Agentic AI Developer & Cloud Generative AI Engineer.
Your role is to provide information about Zaheer's experience, skills, projects, and professional background based on his CV.
Be friendly, concise, and informative.

Use ONLY the following context to answer questions about Zaheer Ahmed:
{context}

If the question falls outside of information about Zaheer Ahmed contained in the context, politely explain that you can only provide information about Zaheer's skills, experience, and professional background.
Avoid making up information not present in the context.`;

// Initialize retriever when the API route module is loaded
initializeRetriever().catch(console.error);

export async function POST(req: NextRequest) {
  try {
    // Get client IP for rate limiting
    const forwardedFor = req.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 'unknown';
    
    // Check rate limit
    const rateLimitResult = checkRateLimit(ip);
    if (rateLimitResult.limited) {
      const resetTime = rateLimitResult.resetTime || Date.now() + RATE_LIMIT_CONFIG.standard.cooldown;
      const secondsToReset = Math.ceil((resetTime - Date.now()) / 1000);
      const reason = rateLimitResult.reason || 'Rate limit exceeded';
      
      return NextResponse.json({
        error: `${reason}. Please try again in ${secondsToReset} seconds.`
      }, {
        status: 429,
        headers: {
          'Retry-After': secondsToReset.toString(),
          'X-Rate-Limit-Reason': reason
        }
      });
    }
    
    // Make sure we have initialized the retriever successfully
    if (!initialized) {
      try {
        await initializeRetriever();
      } catch (error) {
        console.error("Error initializing retriever on demand:", error);
        // Fallback to basic response when retriever fails
        return NextResponse.json({ 
          error: "Service initialization failed. Please try again later." 
        }, { status: 503 });
      }
      
      // If still not initialized after attempt, return error
      if (!initialized || !retriever) {
        return NextResponse.json({ 
          error: "Service temporarily unavailable" 
        }, { status: 503 });
      }
    }

    // Parse the request
    const { query } = await req.json();

    // Ensure valid input
    if (!query || typeof query !== 'string') {
      return NextResponse.json({ error: 'Invalid query' }, { status: 400 });
    }

    // Set up the streaming
    const { stream, writer } = createStreamableUI();

    // Process the query asynchronously
    (async () => {
      try {
        // Check if we already have a cached response
        const cachedResponse = responseCache.get(query.toLowerCase().trim());
        if (cachedResponse) {
          // Stream the cached response
          const words = cachedResponse.split(' ');
          for (const word of words) {
            writer.write(word + ' ');
            // Small delay to simulate streaming for cached responses
            await new Promise(resolve => setTimeout(resolve, 10));
          }
          writer.close();
          return;
        }

        let fullResponse = '';
        
        // Create the model with optimized settings
        const model = new ChatOpenAI({
          modelName: "gpt-3.5-turbo", // Use standard model to avoid compatibility issues
          temperature: 0.2, // Lower temperature for more deterministic responses
          streaming: true,
          callbacks: [
            {
              handleLLMNewToken: (token: string) => {
                writer.write(token);
                fullResponse += token; // Collect response directly here
              },
            },
          ],
        });

        try {
          // Validate retriever is properly initialized
          if (!retriever) {
            throw new Error("Retriever is not initialized properly");
          }

          // Create a simpler prompt template for faster processing
          const prompt = ChatPromptTemplate.fromMessages([
            ["system", SYSTEM_TEMPLATE],
            ["human", "{input}"],
          ]);

          // Create the document chain
          const documentChain = await createStuffDocumentsChain({
            llm: model,
            prompt,
          });

          // Create the retrieval chain with optimized settings
          const retrievalChain = await createRetrievalChain({
            combineDocsChain: documentChain,
            retriever,
          });

          // Execute the chain
          await retrievalChain.invoke({
            input: query,
            chat_history: [], // No chat history for now for faster responses
          });

          // Cache the response for future use
          responseCache.set(query.toLowerCase().trim(), fullResponse);
        } catch (error) {
          console.error("Chain error:", error);
          
          // Fallback to direct response when chain fails
          const fallbackResponse = "I'm sorry, I'm having trouble retrieving information at the moment. Could you try a different question or try again later?";
          writer.write(fallbackResponse);
          
          // We don't cache error responses
        }

        // Close the writer when done
        writer.close();
      } catch (error) {
        console.error("Error in stream processing:", error);
        writer.write("\nSorry, I encountered an error while processing your request.");
        writer.close();
      }
    })();

    // Return the stream
    return new Response(stream);
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
} 