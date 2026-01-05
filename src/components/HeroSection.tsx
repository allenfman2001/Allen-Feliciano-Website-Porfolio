import { ArrowDown, Linkedin, Mail, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">Available for Job Opportunities</span>
          </div>

          {/* Main headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-slide-up" style={{
          animationDelay: '0.1s'
        }}>
            <span className="text-foreground">Allen</span>
            <span className="text-gradient"> Feliciano</span>
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up font-display font-medium" style={{
          animationDelay: '0.2s'
        }}>
              ​"Push Beyond the Limit"  
          </p>

          {/* Impact statement */}
          <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-8 animate-slide-up leading-relaxed" style={{
          animationDelay: '0.3s'
        }}>
            Led technology transformation at <span className="text-primary font-semibold">Multimed</span> from startup to <span className="text-primary font-semibold">IPO</span>. 
            Now building the future of AI with <span className="text-primary font-semibold">InfinityPilot AI</span>.
          </p>

          {/* Social icons + CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-slide-up" style={{
          animationDelay: '0.4s'
        }}>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/allenfman/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-secondary hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-6 h-6 text-foreground" />
              </a>
              <a href="mailto:allenfman@berkeley.edu" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-secondary hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110">
                <Mail className="w-6 h-6 text-foreground" />
              </a>
              <a href="https://github.com/allenfman2001/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-secondary hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110">
                <Github className="w-6 h-6 text-foreground" />
              </a>
            </div>
            <Button size="lg" variant="outline" className="border-border hover:bg-secondary hover:border-primary/50 font-display font-semibold px-8 py-6 text-lg transition-all duration-300" onClick={() => document.getElementById('projects')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              <ExternalLink className="w-5 h-5 mr-2" />
              View Projects
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-slide-up" style={{
          animationDelay: '0.5s'
        }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">IPO</div>
              <div className="text-sm text-muted-foreground">Company Milestone</div>
            </div>
            <div className="text-center">
            <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">2</div>
              <div className="text-sm text-muted-foreground">Founded Ventures</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>;
};
export default HeroSection;