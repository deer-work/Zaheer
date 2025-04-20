import { Briefcase } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 md:py-20  bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#30193D]/30 to-transparent opacity-60"></div>
      <div className="container px-4 md:px-6 relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center justify-center rounded-full bg-black p-1 shadow-md shadow-[#444444] ring-1 ring-[#444444]">
            <div className="rounded-full bg-[#222222] p-2">
              <Briefcase className="h-5 w-5 text-[#00FFFF]" />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#F5F5F5]">Professional Experience</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#00FFFF] to-[#30193D] rounded-full mx-auto"></div>
            <p className="max-w-[900px] text-[#D8BFD8] md:text-xl">
              My journey as an AI developer and the professional experience I&apos;ve gained along the way
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12 ">
          <div className="bg-black/70 backdrop-blur-sm border border-[#444444] p-6 rounded-xl hover:border-[#00FFFF]/50 transition-colors group hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] ">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-[#222222] p-3 group-hover:bg-[#30193D]/30 transition-colors">
                <Briefcase className="h-6 w-6 text-[#00FFFF]" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h4 className="text-xl font-bold text-[#F5F5F5] group-hover:text-[#00FFFF] transition-colors">
                    AI Engineer
                  </h4>
                  <span className="bg-[#30193D]/30 text-[#D8BFD8] text-xs px-2 py-1 rounded">October 2024 - Present</span>
                </div>
                <p className="text-[#00FFFF] text-sm mb-3">DataSAZ Solutions, Islamabad</p>
                <p className="text-[#E6E6FA]">
                  Developing advanced AI solutions with a focus on fine-tuned LLMs and agentic AI systems for enterprise applications.
                </p>
                <ul className="space-y-2 text-[#D8BFD8] list-disc pl-5 mt-3">
                  <li>Develop advanced AI solutions, including fine-tuned LLMs and agentic AI systems for enterprise use cases</li>
                  <li>Implement scalable microservices with FastAPI, Kafka, and Kong API Gateway, deployed on Azure Cloud</li>
                  <li>Design and deploy CI/CD pipelines using Docker and Azure DevOps for streamlined development workflows</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-black/70 backdrop-blur-sm border border-[#444444] p-6 rounded-xl hover:border-[#00FFFF]/50 transition-colors group hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]   ">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-[#222222] p-3 group-hover:bg-[#30193D]/30 transition-colors">
                <Briefcase className="h-6 w-6 text-[#00FFFF]" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h4 className="text-xl font-bold text-[#F5F5F5] group-hover:text-[#00FFFF] transition-colors">
                    Freelance AI and ML Engineer
                  </h4>
                  <span className="bg-[#30193D]/30 text-[#D8BFD8] text-xs px-2 py-1 rounded">September 2024 - Present</span>
                </div>
                <p className="text-[#00FFFF] text-sm mb-3">Fiverr</p>
                <p className="text-[#E6E6FA]">
                  Delivering tailored AI solutions for global clients with focus on custom development and AI consulting.
                </p>
                <ul className="space-y-2 text-[#D8BFD8] list-disc pl-5 mt-3">
                  <li>Deliver tailored AI solutions, including custom chatbots, LLM fine-tuning, and agentic AI workflows</li>
                  <li>Build scalable microservices with FastAPI, Next.js, and Kafka, integrated with cloud platforms like Azure</li>
                  <li>Provide AI consulting services, focusing on automation and intelligent system design</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-black/70 backdrop-blur-sm border border-[#444444] p-6 rounded-xl hover:border-[#00FFFF]/50 transition-colors group hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]         ">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-[#222222] p-3 group-hover:bg-[#30193D]/30 transition-colors">
                <Briefcase className="h-6 w-6 text-[#00FFFF]" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h4 className="text-xl font-bold text-[#F5F5F5] group-hover:text-[#00FFFF] transition-colors">
                    Generative AI Developer
                  </h4>
                  <span className="bg-[#30193D]/30 text-[#D8BFD8] text-xs px-2 py-1 rounded">July 2023 - Present</span>
                </div>
                <p className="text-[#00FFFF] text-sm mb-3">PIAIC, Islamabad</p>
                <p className="text-[#E6E6FA]">
                  Designing and deploying AI-powered applications with focus on cloud infrastructure and personalized AI assistants.
                </p>
                <ul className="space-y-2 text-[#D8BFD8] list-disc pl-5 mt-3">
                  <li>Designed and deployed AI-powered applications on Azure Cloud using Docker for seamless scaling</li>
                  <li>Developed personalized AI chatbots and virtual assistants using LLMs and RAG pipelines</li>
                  <li>Managed cloud-based microservices with FastAPI and Kong API Gateway for efficient backend operations</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-black/70 backdrop-blur-sm border border-[#444444] p-6 rounded-xl hover:border-[#00FFFF]/50 transition-colors group hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]             ">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-[#222222] p-3 group-hover:bg-[#30193D]/30 transition-colors">
                <Briefcase className="h-6 w-6 text-[#00FFFF]" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h4 className="text-xl font-bold text-[#F5F5F5] group-hover:text-[#00FFFF] transition-colors">
                    Software Developer
                  </h4>
                  <span className="bg-[#30193D]/30 text-[#D8BFD8] text-xs px-2 py-1 rounded">July 2024 - September 2024</span>
                </div>
                <p className="text-[#00FFFF] text-sm mb-3">Thunderbird Technologies, Islamabad</p>
                <p className="text-[#E6E6FA]">
                  Implemented event streaming systems and scalable APIs for e-commerce and notification services.
                </p>
                <ul className="space-y-2 text-[#D8BFD8] list-disc pl-5 mt-3">
                  <li>Implemented Kafka-based event streaming systems integrated with AI microservices</li>
                  <li>Developed scalable, cloud-hosted APIs for e-commerce and notification services using Azure Cloud and Next.js</li>
                  <li>Gained hands-on experience in frontend (Next.js) and backend (Node.js) development with Firebase deployment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 