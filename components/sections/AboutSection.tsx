import { User } from "lucide-react";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#30193D]/40 to-transparent opacity-70"></div>
      <div className="container px-4 md:px-6 relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center justify-center rounded-full bg-black p-1 shadow-md shadow-[#444444] ring-1 ring-[#444444]">
            <div className="rounded-full bg-[#222222] p-2">
              <User className="h-5 w-5 text-[#00FFFF]" />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#F5F5F5]">About Me</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#00FFFF] to-[#30193D] rounded-full mx-auto"></div>
            <p className="max-w-[900px] text-[#D8BFD8] md:text-xl">
              Passionate AI developer with a focus on creating intelligent, agentic AI systems
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative mx-auto md:ml-0">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#00FFFF] to-[#8444a9] opacity-45 blur-3xl"></div>
            <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] rounded-xl border-2 border-[#444444] bg-black overflow-hidden">
              <Image
                src="/mypic21.jpeg" 
                alt="Zaheer Ahmed"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#F5F5F5]">Who I Am</h3>
              <p className="text-[#E6E6FA] leading-relaxed">
                I&apos;m Zaheer Ahmed, an Agentic AI Developer and Cloud Generative AI Engineer with a passion for creating intelligent systems that solve real-world problems. With expertise in LLMs, RAG systems, and agentic AI development, I build solutions that leverage the power of cutting-edge AI technologies.
              </p>
              <p className="text-[#E6E6FA] leading-relaxed">
                My journey in AI development started with a fascination for how machines can learn and adapt. This curiosity led me to pursue education in Artificial Intelligence and gain hands-on experience working on diverse AI projects.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-black/70 backdrop-blur-sm border border-[#444444] p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-[#00FFFF]">My Vision</h4>
                <p className="text-[#D8BFD8]">
                  To create AI systems that augment human capabilities and drive innovation across industries.
                </p>
              </div>
              <div className="bg-black/70 backdrop-blur-sm border border-[#444444] p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-[#00FFFF]">My Approach</h4>
                <p className="text-[#D8BFD8]">
                  Combining technical excellence with a deep understanding of user needs to deliver impactful AI solutions.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-xl font-semibold mb-3 text-[#F5F5F5]">Areas of Expertise</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#30193D]/30 text-[#00FFFF] border border-[#444444] px-3 py-1 rounded-full text-sm">
                  Generative AI
                </span>
                <span className="bg-[#30193D]/30 text-[#00FFFF] border border-[#444444] px-3 py-1 rounded-full text-sm">
                  Multi Agent Systems
                </span>
                <span className="bg-[#30193D]/30 text-[#00FFFF] border border-[#444444] px-3 py-1 rounded-full text-sm">
                  LLM Fine-tuning
                </span>
                <span className="bg-[#30193D]/30 text-[#00FFFF] border border-[#444444] px-3 py-1 rounded-full text-sm">
                  RAG Pipelines
                </span>
                <span className="bg-[#30193D]/30 text-[#00FFFF] border border-[#444444] px-3 py-1 rounded-full text-sm">
                  Cloud Deployments
                </span>
                <span className="bg-[#30193D]/30 text-[#00FFFF] border border-[#444444] px-3 py-1 rounded-full text-sm">
                  FastAPI Microservices
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 