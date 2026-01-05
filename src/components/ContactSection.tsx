import { Linkedin, Mail, Github, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background relative">
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

          {/* Social icons */}
          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://www.linkedin.com/in/allenfman/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-secondary hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-foreground" />
            </a>
            <a 
              href="mailto:allenfman@berkeley.edu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-secondary hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6 text-foreground" />
            </a>
            <a 
              href="https://github.com/allenfman2001/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-secondary hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6 text-foreground" />
            </a>
            <a 
              href="https://instagram.com/allenfman/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-secondary hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-6 h-6 text-foreground" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container px-6 mt-24">
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
          <p>© 2025 Allen Feliciano. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/allenfman/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:allenfman@berkeley.edu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/allenfman2001/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com/allenfman/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;