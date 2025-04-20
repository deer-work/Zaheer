import {
  Cloud,
  Brain,
  Code,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SkillBar from "@/components/ui/SkillBar";

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-20  bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#30193D]/30 to-transparent opacity-50"></div>
      <div className="container px-4 md:px-6 relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center justify-center rounded-full bg-black p-1 shadow-md shadow-[#444444] ring-1 ring-[#444444]">
            <div className="rounded-full bg-[#222222] p-2">
              <Brain className="h-5 w-5 text-[#00FFFF]" />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#F5F5F5]">Technical Skills</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#00FFFF] to-[#30193D] rounded-full mx-auto"></div>
            <p className="max-w-[900px] text-[#D8BFD8] md:text-xl">
              With over two years of experience in AI development, I bring a comprehensive
              skill set in both technical and cloud infrastructure domains.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="flex flex-col items-center space-y-2  hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] p-4 rounded-lg border border-[#444444] bg-black/70 backdrop-blur-sm transition-all hover:bg-[#30193D]/20 hover:border-[#00FFFF]/50">
            <div className="p-2 rounded-full bg-[#222222] ">
              <Brain className="h-6 w-6 text-[#00FFFF]" />
            </div>
            <h3 className="text-xl font-bold text-[#F5F5F5]">Generative AI</h3>
            <p className="text-[#D8BFD8] text-center">
              Expert in LLMs, LangChain, LangGraph, CrewAI, Autogen, CLIP, and RAG systems for intelligent applications.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 p-4  hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] rounded-lg border border-[#444444] bg-black/70 backdrop-blur-sm transition-all hover:bg-[#30193D]/20 hover:border-[#00FFFF]/50">
            <div className="p-2 rounded-full bg-[#222222]">
              <Cloud className="h-6 w-6 text-[#00FFFF]" />
            </div>
            <h3 className="text-xl font-bold text-[#F5F5F5]">Cloud Solutions</h3>
            <p className="text-[#D8BFD8] text-center">
              Specialized in Azure Cloud, Docker, CI/CD pipelines, and Dapr for scalable AI infrastructure.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 p-4  hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] rounded-lg border border-[#444444] bg-black/70 backdrop-blur-sm transition-all hover:bg-[#30193D]/20 hover:border-[#00FFFF]/50">
            <div className="p-2 rounded-full bg-[#222222]">
              <Code
                className="h-6 w-6 text-[#00FFFF]"
              />
            </div>
            <h3 className="text-xl font-bold text-[#F5F5F5]">Backend Engineering</h3>
            <p className="text-[#D8BFD8] text-center">
              Proficient in FastAPI, Flask, Node.js, Kafka, and Kong API Gateway for robust backend services.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="core" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-black border border-[#444444]">
              <TabsTrigger
                value="core"
                className="data-[state=active]:bg-[#222222] data-[state=active]:text-[#00FFFF]"
              >
                Core Skills
              </TabsTrigger>
              <TabsTrigger
                value="tech"
                className="data-[state=active]:bg-[#222222] data-[state=active]:text-[#00FFFF]"
              >
                Technical
              </TabsTrigger>
              <TabsTrigger
                value="soft"
                className="data-[state=active]:bg-[#222222] data-[state=active]:text-[#00FFFF]"
              >
                Soft Skills
              </TabsTrigger>
            </TabsList>
            <TabsContent value="core" className="space-y-4 mt-4">
              <div className="space-y-4">
                <SkillBar skill="LLMs & Agentic AI" percentage={95} color="cyan" />
                <SkillBar skill="RAG Systems" percentage={92} color="cyan" />
                <SkillBar skill="Azure Cloud" percentage={90} color="cyan" />
                <SkillBar skill="Docker & CI/CD Pipelines" percentage={88} color="cyan" />
                <SkillBar skill="FastAPI & Flask" percentage={85} color="cyan" />
                <SkillBar skill="Node.js & TypeScript" percentage={82} color="cyan" />
              </div>
            </TabsContent>
            <TabsContent value="tech" className="space-y-4 mt-4">
              <div className="space-y-4">
                <SkillBar skill="LangChain & LangGraph" percentage={90} color="purple" />
                <SkillBar skill="CrewAI & Autogen" percentage={88} color="purple" />
                <SkillBar skill="PostgreSQL & VectorDBs" percentage={85} color="purple" />
                <SkillBar skill="Python" percentage={92} color="purple" />
                <SkillBar skill="Kafka & Message Queues" percentage={80} color="purple" />
              </div>
            </TabsContent>
            <TabsContent value="soft" className="space-y-4 mt-4">
              <div className="space-y-4">
                <SkillBar skill="Communication" percentage={95} color="gradient" />
                <SkillBar skill="Problem-Solving" percentage={93} color="gradient" />
                <SkillBar skill="Emotional Intelligence" percentage={90} color="gradient" />
                <SkillBar skill="Continuous Learning" percentage={95} color="gradient" />
                <SkillBar skill="Languages (English, French, Urdu)" percentage={85} color="gradient" />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 