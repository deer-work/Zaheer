import Link from "next/link";
import { CircuitBoard } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-[#444444] bg-black py-8">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center gap-2 group">
              <div className="relative">
                <CircuitBoard className="h-6 w-6 text-[#00FFFF] transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#00FFFF]/20 rounded-full blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-lg font-bold tracking-tight text-[#F5F5F5]">
                Zaheer Ahmed
              </span>
            </div>
            <p className="text-[#D8BFD8] max-w-[400px]">
              Agentic AI Developer & Cloud Generative AI Engineer specializing
              in LLMs, RAG systems, and scalable backend solutions.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.linkedin.com/in/zaheerahmedabbasi"
                target="_blank"
                className="text-[#D8BFD8] hover:text-[#00FFFF] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link
                href="https://github.com/NxtGen-Dev-ZAH"
                target="_blank"
                className="text-[#D8BFD8] hover:text-[#00FFFF] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/zaheer_aahmedd/"
                target="_blank"
                className="text-[#D8BFD8] hover:text-[#00FFFF] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Link>
              <Link
                href="https://www.facebook.com/zaheer.ahmadabbasi.77/"
                target="_blank"
                className="text-[#D8BFD8] hover:text-[#00FFFF] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4z"></path>
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#D8BFD8] to-[#E6E6FA]">
                Navigation
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#about"
                    className="text-[#D8BFD8] hover:text-[#00FFFF] transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#skills"
                    className="text-[#D8BFD8] hover:text-[#00FFFF] transition-colors"
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="text-[#D8BFD8] hover:text-[#00FFFF] transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#experience"
                    className="text-[#D8BFD8] hover:text-[#00FFFF] transition-colors"
                  >
                    Experience
                  </Link>
                </li>
                <li>
                  <Link
                    href="#certifications"
                    className="text-[#D8BFD8] hover:text-[#00FFFF] transition-colors"
                  >
                    Certifications
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-[#D8BFD8] hover:text-[#00FFFF] transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider  bg-clip-text text-transparent bg-gradient-to-r from-[#D8BFD8] to-[#E6E6FA]">
                Services
              </h4>
              <ul className="space-y-2">
                <li>
                  <p className="text-[#D8BFD8] hover:text-[#00FFFF] transition-colors">
                    Generative AI
                  </p>
                </li>
                <li>
                  <p className="text-[#D8BFD8] hover:text-[#00FFFF] transition-colors">
                    Cloud Solutions
                  </p>
                </li>
                <li>
                  <p className="text-[#D8BFD8] hover:text-[#00FFFF] transition-colors">
                    AI Agents
                  </p>
                </li>
                <li>
                  <p className="text-[#D8BFD8] hover:text-[#00FFFF] transition-colors">
                    Consulting
                  </p>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#D8BFD8] to-[#E6E6FA]">
                Contact
              </h4>
              <ul className="space-y-2">
                <li className="text-[#D8BFD8]">dev.zaheer.ahmad@gmail.com</li>
                <li className="text-[#D8BFD8]">Islamabad, Pakistan</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-[#444444] pt-6 text-center text-sm text-[#D8BFD8]/70">
          <p>© 2024 Zaheer Ahmed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
