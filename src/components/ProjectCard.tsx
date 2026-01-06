import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  highlights: string[];
  imageUrl: string;
  websiteUrl: string;
  accentColor?: string;
  isReversed?: boolean;
}

const ProjectCard = ({ 
  title, 
  role, 
  description, 
  highlights, 
  imageUrl, 
  websiteUrl,
  isReversed = false 
}: ProjectCardProps) => {
  return (
    <div className={`grid md:grid-cols-2 gap-8 lg:gap-16 items-center ${isReversed ? 'md:flex-row-reverse' : ''}`}>
      {/* Content */}
      <div className={`space-y-6 ${isReversed ? 'md:order-2' : ''}`}>
        <div>
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4 font-display uppercase tracking-wider">
            {role}
          </span>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {title}
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        <ul className="space-y-3">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
              <span className="text-muted-foreground">{highlight}</span>
            </li>
          ))}
        </ul>

        <Button 
          variant="outline"
          className="group border-border hover:border-primary hover:bg-primary/5 font-display font-semibold transition-all duration-300"
          onClick={() => window.open(websiteUrl, '_blank')}
        >
          Visit Website
          <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Button>
      </div>

      {/* Image */}
      <div className={`relative group ${isReversed ? 'md:order-1' : ''}`}>
        <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-card">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full aspect-video object-contain bg-card transition-transform duration-500 group-hover:scale-105 scale-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button 
              size="icon"
              className="bg-primary/90 hover:bg-primary text-primary-foreground rounded-full shadow-glow"
              onClick={() => window.open(websiteUrl, '_blank')}
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;