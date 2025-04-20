import { BookOpen, GraduationCap, Award } from "lucide-react";

export const EducationSection = () => {
  return (
    <section id="education" className="py-16 md:py-20  bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#30193D]/30 to-transparent opacity-60"></div>
      <div className="container px-4 md:px-6 relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center justify-center rounded-full bg-black p-1 shadow-md shadow-[#444444] ring-1 ring-[#444444]">
            <div className="rounded-full bg-[#222222] p-2">
              <GraduationCap className="h-5 w-5 text-[#00FFFF]" />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#F5F5F5]">Education & Learning</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#00FFFF] to-[#30193D] rounded-full mx-auto"></div>
            <p className="max-w-[900px] text-[#D8BFD8] md:text-xl">
              My academic journey and continuous learning in AI and computational technologies
            </p>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 max-w-5xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center mb-6 flex items-center justify-center text-[#F5F5F5]">
              <GraduationCap className="mr-2 h-5 w-5 text-[#00FFFF]" />
              Academic Education
            </h3>

            <div className="bg-black/70 backdrop-blur-sm border border-[#444444] p-6 rounded-xl hover:border-[#00FFFF]/50 transition-colors group hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-[#222222] p-3 group-hover:bg-[#30193D]/30 transition-colors">
                  <BookOpen className="h-6 w-6 text-[#00FFFF]" />
                </div>
                <div>
                  <div className="flex justify-between items-start ">
                    <h4 className="text-lg font-bold mb-1 text-[#F5F5F5] group-hover:text-[#00FFFF] transition-colors ">
                      Bachelor's Degree in Artificial Intelligence
                    </h4>
                    <span className="bg-[#30193D]/30 text-[#D8BFD8] text-xs px-2 py-1 rounded">2022 - 2026</span>
                  </div>
                  <p className="text-[#00FFFF] text-sm mb-3">Arid Agriculture University, Rawalpindi</p>
                  <p className="text-[#E6E6FA]">
                    Currently pursuing a bachelor's degree with focus on artificial intelligence, machine learning, and advanced computing systems.
                  </p>
                  <ul className="space-y-1 text-[#D8BFD8] list-disc pl-5 mt-3 text-sm">
                    <li>Focus on deep learning architectures and natural language processing</li>
                    <li>Research in agentic AI systems and multi-agent collaboration</li>
                    <li>Specialized courses in neural networks and computer vision</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-[#444444] p-6 rounded-xl hover:border-[#00FFFF]/50 transition-colors group hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-[#222222] p-3 group-hover:bg-[#30193D]/30 transition-colors">
                  <BookOpen className="h-6 w-6 text-[#00FFFF]" />
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <h4 className="text-lg font-bold mb-1 text-[#F5F5F5] group-hover:text-[#00FFFF] transition-colors">
                      Certification in Artificial Intelligence & Computing
                    </h4>
                    <span className="bg-[#30193D]/30 text-[#D8BFD8] text-xs px-2 py-1 rounded">2023 - 2025</span>
                  </div>
                  <p className="text-[#00FFFF] text-sm mb-3">Presidential Initiative for AI & Computing (PIAIC), Islamabad</p>
                  <p className="text-[#E6E6FA]">
                    Specialized training program in AI and computing technologies with focus on practical applications and real-world projects.
                  </p>
                  <ul className="space-y-1 text-[#D8BFD8] list-disc pl-5 mt-3 text-sm">
                    <li>Intensive course covering AI development pipelines and MLOps</li>
                    <li>Practical training in cloud deployment and scalable AI solutions</li>
                    <li>Collaborative projects with industry mentors and professionals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center mb-6 flex items-center justify-center text-[#F5F5F5]">
              <Award className="mr-2 h-5 w-5 text-[#00FFFF]" />
              Specialized Learning
            </h3>

            <div className="bg-black/70 backdrop-blur-sm border border-[#444444] p-6 rounded-xl hover:border-[#00FFFF]/50 transition-colors group hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]">
              <h4 className="text-lg font-bold mb-4 text-[#F5F5F5]">Technical Certifications</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-[#30193D]/30 p-1 min-w-[26px] h-[26px] flex items-center justify-center mt-0.5">
                    <Award className="h-4 w-4 text-[#00FFFF]" />
                  </div>
                  <div>
                    <h5 className="font-medium text-[#F5F5F5]">Data Analysis with Python</h5>
                    <p className="text-sm text-[#D8BFD8]">IBM • 2023</p>
                    <p className="text-xs text-[#D8BFD8]/70">Credential #DAP12345</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-[#30193D]/30 p-1 min-w-[26px] h-[26px] flex items-center justify-center mt-0.5">
                    <Award className="h-4 w-4 text-[#00FFFF]" />
                  </div>
                  <div>
                    <h5 className="font-medium text-[#F5F5F5]">Machine Learning with Python</h5>
                    <p className="text-sm text-[#D8BFD8]">IBM • 2023</p>
                    <p className="text-xs text-[#D8BFD8]/70">With Honors</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-[#30193D]/30 p-1 min-w-[26px] h-[26px] flex items-center justify-center mt-0.5">
                    <Award className="h-4 w-4 text-[#00FFFF]" />
                  </div>
                  <div>
                    <h5 className="font-medium text-[#F5F5F5]">Developing AI Applications with Python and Flask</h5>
                    <p className="text-sm text-[#D8BFD8]">Coursera • 2024</p>
                    <p className="text-xs text-[#D8BFD8]/70">Certification #AIAPF12345</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-black/70 backdrop-blur-sm border border-[#444444] p-6 rounded-xl hover:border-[#00FFFF]/50 transition-colors group hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] ">
              <h4 className="text-lg font-bold mb-4 text-[#F5F5F5]">Additional Learning</h4>
              
              <div className="space-y-4">
                <div className="border border-[#444444] bg-[#222222]/50 rounded-lg p-3">
                  <h5 className="font-medium text-[#00FFFF]">Neural Networks & Deep Learning</h5>
                  <p className="text-sm text-[#D8BFD8] mt-1">
                    Completed comprehensive coursework on neural network architectures and implementation of deep learning models for complex problem-solving.
                  </p>
                </div>
                
                <div className="border border-[#444444] bg-[#222222]/50 rounded-lg p-3">
                  <h5 className="font-medium text-[#00FFFF]">Large Language Models Specialization</h5>
                  <p className="text-sm text-[#D8BFD8] mt-1">
                    Focused study on LLM architecture, prompt engineering, fine-tuning techniques, and deployment strategies for production environments.
                  </p>
                </div>
                
                <div className="border border-[#444444] bg-[#222222]/50 rounded-lg p-3">
                  <h5 className="font-medium text-[#00FFFF]">Cloud Architecture for AI Systems</h5>
                  <p className="text-sm text-[#D8BFD8] mt-1">
                    Specialized training in designing and implementing cloud-based infrastructure for AI applications, with focus on Azure services and containerization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection; 