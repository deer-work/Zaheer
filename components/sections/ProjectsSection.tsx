import { Database } from "lucide-react";
import Link from "next/link";
import ProjectCard from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Autonomous Research Agent",
    description: "Built an autonomous research agent using LangGraph, OpenAI APIs, and Next.js to independently gather, analyze, and synthesize information. Implemented task decomposition, memory management, and recursive refinement for complex research tasks.",
    imageUrl: "/autonomous.png",
    imageAlt: "Autonomous Research Agent",
    tags: ["LangGraph", "OpenAI APIs", "Next.js", "Agentic AI"]
  },
  {
    title: "Multi-Agent Workflow Automation",
    description: "Developed a cooperative AI agent system using CrewAI, FastAPI, and PostgreSQL to automate business workflows. Designed a custom orchestration layer for task delegation, quality control, and inter-agent communication.",
    imageUrl: "/multiagent.png",
    imageAlt: "Multi-Agent Workflow System",
    tags: ["CrewAI", "FastAPI", "PostgreSQL", "Agent Orchestration"]
  },
  {
    title: "RAG-Powered Knowledge Base",
    description: "Created an intelligent document processing system using LlamaIndex, Faiss, LangChain, and Next.js. Features hybrid search, contextual recommendations, and automated knowledge graph construction from unstructured documents.",
    imageUrl: "/ragknow.png",
    imageAlt: "RAG Knowledge Base",
    tags: ["LlamaIndex", "Faiss", "LangChain", "Knowledge Graphs"]
  },
  {
    title: "AI Agent Marketplace",
    description: "Engineered a platform for creating and deploying custom AI agents using React, FastAPI, and LangGraph. Included agent configuration tools, performance monitoring, and automated testing frameworks.",
    imageUrl: "/agentmarket.png",
    imageAlt: "AI Agent Marketplace",
    tags: ["React", "FastAPI", "LangGraph", "Agent Development"]
  },
  {
    title: "Cloud AI Assistant",
    description: "Developed an AI assistant using Next.js, FastAPI, and OpenAI APIs, deployed on Azure Cloud. Enabled seamless user interaction through scalable cloud infrastructure and modern API integrations.",
    imageUrl: "/cloudai.png",
    imageAlt: "Cloud AI Assistant",
    tags: ["Next.js", "FastAPI", "Azure Cloud", "OpenAI"]
  },
  {
    title: "E-commerce Backend API",
    description: "Built cloud-hosted microservices with Kafka and FastAPI to manage orders, payments, and notifications for an e-commerce platform. Ensured high availability and scalability through Azure Cloud deployment.",
      imageUrl: "/ecommerce.png",
    imageAlt: "E-commerce Backend API",
    tags: ["Kafka", "FastAPI", "Azure Cloud", "Microservices"]
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-20 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#30193D]/40 to-transparent opacity-60"></div>
      <div className="container px-4 md:px-6 relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center justify-center rounded-full bg-black p-1 shadow-md shadow-[#444444] ring-1 ring-[#444444]">
            <div className="rounded-full bg-[#222222] p-2">
              <Database className="h-5 w-5 text-[#00FFFF]" />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#F5F5F5]">Featured Projects</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#00FFFF] to-[#30193D] rounded-full mx-auto"></div>
            <p className="max-w-[900px] text-[#D8BFD8] md:text-xl">
              A selection of my most impactful projects in Generative AI, cloud architecture, and intelligent systems
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              imageAlt={project.imageAlt}
              tags={project.tags}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/projects">
            <Button 
              className="bg-gradient-to-r from-[#00CED1] to-[#00FFFF] hover:from-[#00FFFF] hover:to-[#00CED1] text-black font-medium px-8 py-6 rounded-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300"
            >
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 