import ProjectCard from "./ProjectCard";
import multimedImage from "@/assets/multimed-team.png";
import infinityImage from "@/assets/infinity-logo.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Multi Medika Internasional",
      role: "Founding Executive • IPO",
      description: "Led the technology transformation of Indonesia's leading medical equipment and consumer healthcare company from early-stage startup to successful public listing on the Indonesia Stock Exchange (IDX: MMIX).",
      highlights: [
        "Architected enterprise systems supporting 38-province distribution network",
        "Scaled technology infrastructure to serve 10+ million customers",
        "Drove digital transformation enabling IPO readiness",
        "Built partnerships with global brands from USA and Korea"
      ],
      imageUrl: multimedImage,
      websiteUrl: "https://www.multimed.co.id/en/"
    },
    {
      title: "InfinityPilot AI",
      role: "Founder & CEO",
      description: "Building the future of conversational AI with human-like voice assistants that revolutionize mass marketing and customer engagement across multiple channels.",
      highlights: [
        "89K+ active users with 90% client satisfaction",
        "92M+ AI-powered conversations generated",
        "10X revenue potential at 50% reduced cost for clients",
        "Proprietary Speech-to-Meaning® and Deep Meaning Understanding® technology"
      ],
      imageUrl: infinityImage,
      websiteUrl: "https://infinitypilot.ai/"
    }
  ];

  return (
    <section id="projects" className="py-24 lg:py-32 bg-background relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container px-6">
        {/* Section header */}
        <div className="max-w-3xl mb-20">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4 font-display uppercase tracking-wider">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Building Companies That
            <span className="text-gradient"> Make an Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From taking a healthcare company public to pioneering AI voice technology, 
            I focus on creating scalable solutions that transform industries.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-24 lg:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;