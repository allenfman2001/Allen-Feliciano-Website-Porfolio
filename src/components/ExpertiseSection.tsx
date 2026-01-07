import { Cpu, TrendingUp, Users, Globe, Lightbulb, Shield } from "lucide-react";

const ExpertiseSection = () => {
  const expertise = [
    {
      icon: Cpu,
      title: "Technology Leadership",
      description:
        "Architecting scalable enterprise systems and leading digital transformation initiatives from startup to IPO.",
    },
    {
      icon: TrendingUp,
      title: "Business Strategy",
      description:
        "Aligning technology investments with business objectives to drive revenue growth and market expansion.",
    },
    {
      icon: Users,
      title: "Team Building",
      description:
        "Building and mentoring high-performance engineering teams across multiple countries and time zones.",
    },
    {
      icon: Globe,
      title: "Global Operations",
      description:
        "Experience scaling operations across 38+ provinces with international partnerships in USA and Korea.",
    },
    {
      icon: Lightbulb,
      title: "AI Innovation",
      description:
        "Pioneering conversational AI with proprietary Speech-to-Meaning® and Deep Meaning Understanding® technology.",
    },
    {
      icon: Shield,
      title: "Startup to IPO",
      description:
        "Proven track record of building technology infrastructure that meets public company standards and regulations.",
    },
  ];

  return (
    <section id="expertise" className="py-24 lg:py-32 bg-secondary/20 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4 font-display uppercase tracking-wider">
            Core Competencies
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Expertise That
            <span className="text-gradient"> Drives Results</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I will bring my technical expertise with strategic business acumen to build and scale a successful project
            and technology.
          </p>
        </div>

        {/* Expertise grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, index) => (
            <div
              key={item.title}
              className="group p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
