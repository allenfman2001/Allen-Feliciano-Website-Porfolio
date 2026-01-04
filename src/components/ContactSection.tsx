import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4 font-display uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Let's Build Something
            <span className="text-gradient"> Extraordinary</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
            Whether you're looking for a technology partner, seeking investment opportunities, 
            or want to discuss the future of AI—I'd love to connect.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-accent hover:opacity-90 text-primary-foreground font-display font-semibold px-8 py-6 text-lg shadow-glow transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://www.linkedin.com/in/allenfman/', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-border hover:bg-secondary hover:border-primary/50 font-display font-semibold px-8 py-6 text-lg transition-all duration-300"
              onClick={() => window.open('mailto:allen@infinitypilot.ai', '_blank')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container px-6 mt-24">
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
          <p>© 2025 Allen Feliciano. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a 
              href="https://www.linkedin.com/in/allenfman/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://infinitypilot.ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              InfinityPilot
            </a>
            <a 
              href="https://www.multimed.co.id/en/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Multimed
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;