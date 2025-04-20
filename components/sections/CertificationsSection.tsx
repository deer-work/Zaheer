import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  id?: string;
}

const Certification = ({ title, issuer, date, id }: CertificationProps) => {
  return (
    <Card className="bg-black/70 backdrop-blur-sm border border-[#444444] hover:border-[#00FFFF]/50 transition-colors group">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-[#222222] p-3 group-hover:bg-[#30193D]/30 transition-colors">
            <Award className="h-6 w-6 text-[#00FFFF]" />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-1 text-[#F5F5F5] group-hover:text-[#00FFFF] transition-colors">
              {title}
            </h3>
            <p className="text-[#D8BFD8] text-sm mb-2">{issuer}</p>
            <p className="text-[#D8BFD8]/70 text-sm">Issued: {date}{id && ` • ${id}`}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface TestimonialProps {
  name: string;
  role: string;
  initials: string;
  quote: string;
}

const Testimonial = ({ name, role, initials, quote }: TestimonialProps) => {
  return (
    <Card className="bg-black/70 backdrop-blur-sm border border-[#444444] hover:border-[#00FFFF]/50 transition-colors">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-[#30193D]/70 h-12 w-12 flex items-center justify-center">
              <span className="text-[#00FFFF] font-bold">{initials}</span>
            </div>
            <div>
              <h4 className="font-bold text-[#F5F5F5]">{name}</h4>
              <p className="text-[#D8BFD8] text-sm">{role}</p>
            </div>
          </div>
          <p className="text-[#E6E6FA] italic">
            {quote}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export const CertificationsSection = () => {
  const certifications = [
    {
      title: "Data Analysis with Python",
      issuer: "IBM",
      date: "2023",
      id: "Credential #DAP12345"
    },
    {
      title: "Machine Learning with Python",
      issuer: "IBM",
      date: "2023",
      id: "With Honors"
    },
    {
      title: "Developing AI Applications with Python and Flask",
      issuer: "Coursera",
      date: "2024",
      id: "Certification #AIAPF12345"
    },
    {
      title: "Introduction to Deep Learning & Neural Networks with Keras",
      issuer: "IBM",
      date: "2023"
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM",
      date: "2023",
      id: "Credential #PDSAID12345"
    },
    {
      title: "From Code to Cloud: My Journey in AI",
      issuer: "Publication",
      date: "2024",
      id: "AI & Web Development"
    }
  ];

  const testimonials = [
    {
      name: "Syed Waqas Shah ",
      role: "CTO, Thunderbird Technologies",
      initials: "SW",
      quote:
        "Working with this individual was a game-changer for our project. His expertise in AI and web development brought our vision to life.",
    },
    {
      name: "Haris Morris",
      role: "Senior Dev, StartUp Creators",
      initials: "HM",
      quote:
        "Zaheer's expertise in full-stack development helped us launch a scalable product in record time. His professionalism and commitment to excellence are unparalleled.",
    },
    {
      name: "Adeel Ahmed",
      role: "CEO & CTO , Datasaz Solutions",
      initials: "AA",
      quote:
        "The data science solutions provided by him significantly improved our decision-making process. Highly recommended!",
    },
    {
      name: "Sara Malik",
      role: "Faculty, PIAIC",
      initials: "SM",
      quote: "The AI-powered applications Zaheer developed for our organization demonstrate exceptional technical skill and creativity. His implementation of LLMs and RAG pipelines has transformed how we deliver personalized experiences to users."
    }
  ];

  return (
    <section id="certifications" className="py-16 md:py-20  bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#30193D]/30 to-transparent opacity-60"></div>
      <div className="container px-4 md:px-6 relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center justify-center rounded-full bg-black p-1 shadow-md shadow-[#444444] ring-1 ring-[#444444]">
            <div className="rounded-full bg-[#222222] p-2">
              <Award className="h-5 w-5 text-[#00FFFF]" />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#F5F5F5]">Certifications & Publications</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#00FFFF] to-[#30193D] rounded-full mx-auto"></div>
            <p className="max-w-[900px] text-[#D8BFD8] md:text-xl">
              Professional certifications and recognition in AI development and cloud technologies
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Certification
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              id={cert.id}
            />
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-2 text-[#F5F5F5]">Client Testimonials</h3>
            <div className="h-1 w-16 bg-gradient-to-r from-[#00FFFF] to-[#30193D] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                initials={testimonial.initials}
                quote={testimonial.quote}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection; 