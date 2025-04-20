'use client';

import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const contactFormSchema = z.object({
  name: z.string().min(4, "Name must be at least 4 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/zaheer_cv.pdf';
    link.download = 'zaheer_cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEmail = () => {
    const email = 'dev.zaheer.ahmad@gmail.com';
    const subject = 'Hello, Zaheer!';
    const body = 'I would like to discuss a project with you.';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      toast.success("Message sent successfully! I'll get back to you soon.");
      reset();
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error(error instanceof Error ? error.message : "Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#30193D]/30 to-transparent opacity-60"></div>
      <div className="container px-4 md:px-6 relative mx-auto max-w-6xl">
        <div className="mx-auto grid max-w-6xl items-center gap-10 py-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center justify-center rounded-full bg-black p-1 shadow-md shadow-[#444444] ring-1 ring-[#444444] self-start">
              <div className="rounded-full bg-[#222222] p-2">
                <Mail className="h-5 w-5 text-[#00FFFF]" />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#F5F5F5]">Get In Touch</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#00FFFF] to-[#30193D] rounded-full"></div>
              <p className="max-w-[600px] text-[#D8BFD8] md:text-xl">
                I'm available for consulting, project work, and long-term engagements. Let's discuss how I can
                contribute to your AI and cloud development needs.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-[#222222] p-2 w-10 h-10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-[#00FFFF]" />
                </div>
                <div>
                  <p className="text-sm text-[#D8BFD8]">Email</p>
                  <p className="font-medium text-[#F5F5F5]">dev.zaheer.ahmad@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-[#222222] p-2 w-10 h-10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-[#00FFFF]" />
                </div>
                <div>
                  <p className="text-sm text-[#D8BFD8]">Location</p>
                  <p className="font-medium text-[#F5F5F5]">Islamabad, Pakistan</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button  onClick={handleEmail}  className="bg-gradient-to-r from-[#00CED1] to-[#00FFFF] hover:from-[#00FFFF] hover:to-[#00CED1] text-black font-medium">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </Button>
              <Button
                variant="outline"
                className="border-[#444444] text-[#F5F5F5] hover:bg-[#30193D]/30 hover:border-[#00FFFF] transition-colors bg-black/80 hover:text-[#00FFFF]"
                onClick={handleDownload}
              >
                Download Resume
              </Button> 
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-2xl border border-[#444444] bg-black/70 p-6 backdrop-blur-md">
            <h3 className="text-xl font-bold text-[#F5F5F5]">Send a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium leading-none text-[#D8BFD8]">
                    Name
                  </label>
                  <input
                    {...register("name")}
                    id="name"
                    className="flex h-10 w-full rounded-md border border-[#444444] bg-black px-3 py-2 text-sm text-[#F5F5F5] placeholder:text-[#D8BFD8]/50 focus:outline-none focus:ring-2 focus:ring-[#00FFFF] focus:border-transparent"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none text-[#D8BFD8]">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-[#444444] bg-black px-3 py-2 text-sm text-[#F5F5F5] placeholder:text-[#D8BFD8]/50 focus:outline-none focus:ring-2 focus:ring-[#00FFFF] focus:border-transparent"
                    placeholder="Your email"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium leading-none text-[#D8BFD8]">
                  Subject
                </label>
                <input
                  {...register("subject")}
                  id="subject"
                  className="flex h-10 w-full rounded-md border border-[#444444] bg-black px-3 py-2 text-sm text-[#F5F5F5] placeholder:text-[#D8BFD8]/50 focus:outline-none focus:ring-2 focus:ring-[#00FFFF] focus:border-transparent"
                  placeholder="Subject of your message"
                />
                {errors.subject && (
                  <p className="text-sm text-red-500">{errors.subject.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none text-[#D8BFD8]">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  className="flex min-h-[120px] w-full rounded-md border border-[#444444] bg-black px-3 py-2 text-sm text-[#F5F5F5] placeholder:text-[#D8BFD8]/50 focus:outline-none focus:ring-2 focus:ring-[#00FFFF] focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
                {errors.message && (
                  <p className="text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-gradient-to-r from-[#00CED1] to-[#00FFFF] hover:from-[#00FFFF] hover:to-[#00CED1] text-black font-medium"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 