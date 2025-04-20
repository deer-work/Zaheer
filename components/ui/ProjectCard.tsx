import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
}

const ProjectCard = ({ title, description, imageUrl, imageAlt, tags }: ProjectCardProps) => {
  return (
    <Card className="group bg-black/70 backdrop-blur-sm border border-[#444444] hover:border-[#00FFFF]/50 transition-all duration-300 overflow-hidden  hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]  ">
      <CardContent className="p-0">
        <div className="relative overflow-hidden ">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={400}
            height={300}
            className="w-full object-cover h-56 transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            {/* <div className="p-4">
              <Button
                variant="outline"
                size="sm"
                className="border-[#444444] bg-black/50 backdrop-blur-sm text-[#F5F5F5] hover:bg-[#30193D]/40"
              >
                View Details
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div> */}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-[#F5F5F5] group-hover:text-[#00FFFF] transition-colors">
            {title}
          </h3>
          <p className="text-[#D8BFD8] mb-4 line-clamp-3">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <Badge 
                key={index}
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
  );
};

export default ProjectCard; 