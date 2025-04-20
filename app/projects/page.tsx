"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Brain, Code, Server, Database, LucideIcon, ArrowLeft, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
  categories: string[];
}

// Enhanced Projects array with explicit categories and tags
const projects: Project[] = [
  {
    title: "AUTONOMOUS RESEARCH AGENT",
    description: "Built an autonomous research agent using LangGraph, OpenAI APIs, and Next.js to independently gather, analyze, and synthesize information. Implemented task decomposition, memory management, and recursive refinement.",
    imageUrl: "/autonomous.png",
    imageAlt: "Autonomous Research Agent",
    tags: ["LangGraph", "OpenAI", "Next.js"],
    categories: ["ai", "fullstack"],
  },
  {
    title: "MULTI-AGENT WORKFLOW AUTOMATION",
    description: "Developed a cooperative AI agent system using CrewAI, FastAPI, and PostgreSQL to automate business workflows. Designed a custom orchestration layer for task delegation, quality control, and inter-agent communication.",
    imageUrl: "/multiagent.png",
    imageAlt: "Multi-Agent Workflow System",
    tags: ["CrewAI", "FastAPI", "PostgreSQL"],
    categories: ["ai", "backend"],
  },
  {
    title: "RAG-POWERED KNOWLEDGE BASE",
    description: "Created an intelligent document processing system using LlamaIndex, Faiss, LangChain, and Next.js. Features hybrid search, contextual recommendations, and automated knowledge graph construction from unstructured documents.",
    imageUrl: "/ragknow.png",
    imageAlt: "RAG Knowledge Base",
    tags: ["LlamaIndex", "Faiss", "LangChain"],
    categories: ["ai", "fullstack"],
  },
  {
    title: "AI AGENT MARKETPLACE",
    description: "Engineered a platform for creating and deploying custom AI agents using React, FastAPI, and LangGraph. Included agent configuration tools, performance monitoring, and automated testing frameworks.",
    imageUrl: "/agentmarket.png",
    imageAlt: "AI Agent Marketplace",
    tags: ["React", "FastAPI", "LangGraph"],
    categories: ["ai", "fullstack"],
  },
  {
    title: "CLOUD AI ASSISTANT",
    description: "Developed an AI assistant using Next.js, FastAPI, and OpenAI APIs, deployed on Azure Cloud. Enabled seamless user interaction through scalable cloud infrastructure and modern API integrations.",
    imageUrl: "/cloudai.png",
    imageAlt: "Cloud AI Assistant",
    tags: ["Next.js", "FastAPI", "Azure Cloud"],
    categories: ["ai", "fullstack"],
  },
  {
    title: "E-COMMERCE BACKEND API",
    description: "Built cloud-hosted microservices with Kafka and FastAPI to manage orders, payments, and notifications for an e-commerce platform. Ensured high availability and scalability through Azure Cloud deployment.",
    imageUrl: "/ecommerce.png",
    imageAlt: "E-commerce Backend API",
    tags: ["Kafka", "FastAPI", "Azure Cloud"],
    categories: ["backend"],
  },
  {
    title: "MODERN E-COMMERCE STORE",
    description: "Built a modern e-commerce store with Next.js, showcasing a seamless and responsive shopping experience. Leveraging cutting-edge technologies to deliver a fast and efficient online store.",
    imageUrl: "/ecomstore.png",
    imageAlt: "Modern E-commerce Store",
    tags: ["Next.js", "React", "TypeScript"],
    categories: ["fullstack"],
  },
  {
    title: "EMOTION DETECTION APP",
    description: "Built a Flask web application for emotion detection using machine learning. The application analyzes text and determines the emotional content for sentiment analysis and user interaction.",
    imageUrl: "/emotion.png",
    imageAlt: "Emotion Detection App",
    tags: ["Python", "Flask", "ML"],
    categories: ["ai", "backend"],
  },
  {
    title: "WEATHER PREDICTION SYSTEM",
    description: "Created a modern Flask app that ingests CSV data from users and applies machine learning algorithms to predict weather patterns for specific geographical areas with high accuracy.",
    imageUrl: "/weather.png",
    imageAlt: "Weather Prediction System",
    tags: ["Python", "Flask", "ML"],
    categories: ["ai", "backend"],
  },
  {
    title: "FULLSTACK TASK MANAGER",
    description: "A robust task manager application built with Next.js for seamless task management, featuring task creation, editing, and categorization with real-time updates and collaborative functionality.",
    imageUrl: "/taskmanager.png",
    imageAlt: "Fullstack Task Manager",
    tags: ["Next.js", "React", "FastAPI"],
    categories: ["fullstack"],
  },
  {
    title: "PERSONAL AI ASSISTANT",
    description: "An innovative personal AI assistant developed using Next.js, FastAPI, and OpenAI APIs to manage tasks, set reminders, and provide quick answers for enhanced productivity through intelligent interaction.",
    imageUrl: "/aiassistant.png",
    imageAlt: "Personal AI Assistant",
    tags: ["AI/ML", "OpenAI", "FastAPI"],
    categories: ["ai", "fullstack"],
  },
  {
    title: "PROBLEM SOLVER AI CHATBOT",
    description: "A cutting-edge problem solver app using Next.js, FastAPI, and OpenAI APIs, featuring an intuitive chat interface for providing step-by-step solutions to complex problems across various domains.",
    imageUrl: "/problem.png",
    imageAlt: "Problem Solver AI Chatbot",
    tags: ["AI/ML", "OpenAI", "FastAPI"],
    categories: ["ai", "fullstack"],
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

interface Category {
  id: string;
  label: string;
  icon: LucideIcon;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <motion.div
      ref={cardRef}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden group bg-black/70 backdrop-blur-sm border border-[#444444] hover:border-[#00FFFF]/50 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300">
        <div className="relative h-48">
          <Image
            src={project.imageUrl}
            alt={project.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <CardContent className="p-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#F5F5F5] group-hover:text-[#00FFFF] transition-colors">
              {project.title}
            </h3>
            <p className="text-[#D8BFD8] line-clamp-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="border-[#00FFFF]/30 text-[#00FFFF] bg-[#30193D]/30"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const categories: Category[] = [
  { id: "all", label: "All Projects", icon: Code },
  { id: "ai", label: "AI/ML", icon: Brain },
  { id: "fullstack", label: "Full-Stack", icon: Server },
  { id: "backend", label: "Backend", icon: Database },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef);

  // Filter projects based on active category
  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "all" || project.categories.includes(activeCategory)
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="py-32 px-4 md:px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header Section */}
          <motion.div
            ref={headerRef}
            initial={{ y: 20, opacity: 0 }}
            animate={
              isHeaderInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
            }
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center justify-center rounded-full bg-black p-1 shadow-md shadow-[#444444] ring-1 ring-[#444444] mx-auto">
              <div className="rounded-full bg-[#222222] p-2">
                <Database className="h-5 w-5 text-[#00FFFF]" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#F5F5F5]">
              All{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#30193D]">
                Projects
              </span>
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-[#00FFFF] to-[#30193D] rounded-full mx-auto"></div>
            <p className="text-[#D8BFD8] max-w-2xl mx-auto">
              Explore my complete portfolio showcasing AI/ML solutions, full-stack applications, 
              and innovative tech projects demonstrating expertise in modern technologies.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {categories.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveCategory(id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200
                    ${
                      activeCategory === id
                        ? "bg-gradient-to-r from-[#00CED1] to-[#00FFFF] text-black"
                        : "bg-[#30193D]/30 text-[#D8BFD8] hover:bg-[#30193D]/50 border border-[#444444]"
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </motion.div>

          {/* Back to Home Button */}
          <div className="flex justify-center mt-12">
            <Link href="/">
              <Button
                className="border-[#444444] text-[#F5F5F5] hover:bg-[#30193D]/30 hover:border-[#00FFFF] transition-colors bg-black/80 hover:text-[#00FFFF]"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Skills Overview */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={
              isHeaderInView ? { y: 0, opacity: 0 } : { y: -15, opacity: 1 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-xl bg-black/70 backdrop-blur-sm border border-[#444444] hover:border-[#00FFFF]/50 transition-colors"
          >
            <h2 className="text-2xl font-bold text-[#F5F5F5] mb-6">
              Core Technologies & Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="space-y-4">
                <h3 className="text-[#00FFFF] font-semibold flex items-center gap-2">
                  <Brain className="w-5 h-5" /> AI & ML
                </h3>
                <ul className="text-[#D8BFD8] space-y-2">
                  <li>• PyTorch & TensorFlow</li>
                  <li>• Scikit-learn & XGBoost</li>
                  <li>• Computer Vision & NLP</li>
                  <li>• Deep Learning & CNN</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-[#00FFFF] font-semibold flex items-center gap-2">
                  <Sparkles className="w-5 h-5" /> Generative AI
                </h3>
                <ul className="text-[#D8BFD8] space-y-2">
                  <li>• LangChain & LangGraph</li>
                  <li>• CrewAI & AutoGen</li>
                  <li>• OpenAI & HuggingFace</li>
                  <li>• RAG & Vector DBs</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-[#00FFFF] font-semibold flex items-center gap-2">
                  <Code className="w-5 h-5" /> Frontend
                </h3>
                <ul className="text-[#D8BFD8] space-y-2">
                  <li>• Next.js & React</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Framer Motion</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-[#00FFFF] font-semibold flex items-center gap-2">
                  <Server className="w-5 h-5" /> Backend
                </h3>
                <ul className="text-[#D8BFD8] space-y-2">
                  <li>• FastAPI & Flask</li>
                  <li>• PostgreSQL & MySQL</li>
                  <li>• REST APIs</li>
                  <li>• Python & Node.js</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-[#00FFFF] font-semibold flex items-center gap-2">
                  <Database className="w-5 h-5" /> DevOps
                </h3>
                <ul className="text-[#D8BFD8] space-y-2">
                  <li>• Azure Cloud</li>
                  <li>• Docker</li>
                  <li>• Kong API Gateway</li>
                  <li>• CI/CD Pipelines</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 