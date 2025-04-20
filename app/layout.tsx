import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zaheer Ahmed | Agentic AI Developer",
  description: "Specializing in Generative AI, Cloud solutions, and intelligent automation with a passion for creating innovative AI systems.",
  keywords: ["Agentic AI", "Generative AI", "Cloud Solutions", "LLMs", "RAG Systems", "AI Developer", "Zaheer Ahmed"],
  authors: [{ name: "Zaheer Ahmed", url: "https://www.linkedin.com/in/zaheerahmedabbasi" }],
  creator: "Zaheer Ahmed",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zaportfolio.vercel.app",
    title: "Zaheer Ahmed | Agentic AI Developer",
    description: "Specializing in Generative AI, Cloud solutions, and intelligent automation with a passion for creating innovative AI systems.",
    siteName: "Zaheer Ahmed Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaheer Ahmed | Agentic AI Developer",
    description: "Specializing in Generative AI, Cloud solutions, and intelligent automation.",
    creator: "@zaheer_ahmed556",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-[#F5F5F5]`}
      >
        {children}
        <Toaster 
          theme="dark" 
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#222222',
              border: '1px solid #444444',
              color: '#F5F5F5',
            },
          }}
        />
      </body>
    </html>
  );
}
