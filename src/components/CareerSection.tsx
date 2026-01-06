import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import researchLabImage from "@/assets/research-lab.jpg";
import ucprcLogo from "@/assets/ucprc-logo.png";
import perplexityCometImage from "@/assets/perplexity-comet.jpg";
import adobeEventImage from "@/assets/adobe-event.jpg";
import adobeExpressImage from "@/assets/adobe-express.jpg";
import lucasfilmLogo from "@/assets/lucasfilm-logo.jpg";
import ilmLogo from "@/assets/ilm-logo.png";
import warnerBrosTeam from "@/assets/warner-bros-team.jpg";
import warnerBrosLogo from "@/assets/warner-bros-logo.jpg";
interface CareerItem {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  type: "work" | "education";
  image?: string;
  images?: string[];
  logo?: string;
}
const CareerSection = () => {
  const careerItems: CareerItem[] = [{
    title: "Research Assistant",
    company: "UC Pavement Research Center",
    location: "Berkeley, CA",
    period: "Sep 2025 - Present",
    highlights: ["Laboratory preparation and testing of asphalt and concrete specimens for pavement engineering research", "Operated heavy equipment (saws, mixers, forklifts, coring machines) under strict safety protocols", "Performance data analysis on sustainable materials for Caltrans and FHWA infrastructure projects"],
    type: "work",
    image: researchLabImage,
    logo: ucprcLogo
  }, {
    title: "Project Manager",
    company: "Perplexity.AI",
    location: "San Francisco, CA",
    period: "Aug 2025 - Present",
    highlights: ["Managing Comet AI browser launch with 9,000+ ambassadors worldwide", "45% engagement boost through strategic initiative planning", "60% reduction in reporting time via automated systems"],
    type: "work",
    image: perplexityCometImage
  }, {
    title: "Product Manager",
    company: "Adobe Inc",
    location: "San Jose, CA",
    period: "Aug 2024 - June 2025",
    highlights: ["200% user retention increase for Adobe Express Mobile App", "65% install growth through strategic product improvements", "Pilot UI/UX design for Adobe Express and Adobe Project based on 300+ user surveys and A/B testings"],
    type: "work",
    images: [adobeEventImage, adobeExpressImage]
  }, {
    title: "Associate Project Manager",
    company: "Lucasfilm Ltd (Industrial Light & Magic)",
    location: "San Francisco, CA",
    period: "Aug 2023 - June 2024",
    highlights: ["$7.5M+ ROI through cost-benefit analyses", "50% bottleneck reduction in production workflows", "96% on-time delivery rate for VFX projects"],
    type: "work",
    images: [lucasfilmLogo, ilmLogo]
  }, {
    title: "Business Analyst",
    company: "Warner Bros Studios",
    location: "Burbank, CA",
    period: "May 2023 - Aug 2023",
    highlights: ["3x ROI investment models for studio productions", "$250K budget reallocation optimizing VFX spending", "Cross-functional collaboration with production teams"],
    type: "work",
    images: [warnerBrosLogo, warnerBrosTeam]
  }, {
    title: "Co-Founder & Executive",
    company: "PT MultiMedika International, Tbk",
    location: "Jakarta, Indonesia",
    period: "Feb 2020 - Dec 2022",
    highlights: ["Raised $7.4M and led company to successful IPO (IDX: MMIX)", "40,000+ retail store placements across Indonesia", "Built top 5 consumer healthcare brand nationwide"],
    type: "work"
  }];
  const educationItems: CareerItem[] = [{
    title: "Bachelor of Science in Business Administration",
    company: "University of California, Berkeley",
    location: "Berkeley, CA",
    period: "Expected Dec 2025",
    highlights: ["Haas School of Business", "Focus on Finance, Investment, Project Management, AI & Entrepreneurship"],
    type: "education"
  }, {
    title: "Associate Degrees in Business Administration & Economics",
    company: "Pasadena City College",
    location: "Pasadena, CA",
    period: "2019 - 2020",
    highlights: ["Dual Associate Degrees", "Foundation in Business & Economic Principles"],
    type: "education"
  }];
  return <section id="career" className="py-24 lg:py-32 bg-secondary/30 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container px-6 rounded-none">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4 font-display uppercase tracking-wider">
            Professional Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Career
            <span className="text-gradient"> Timeline</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From building a healthcare empire in Indonesia to driving innovation at 
            Silicon Valley's top tech and entertainment companies.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {/* Career items */}
          <div className="space-y-12 shadow-none">
            {careerItems.map((item, index) => <div key={`${item.company}-${index}`} className={`relative flex flex-col md:flex-row md:items-stretch gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-primary border-4 border-background shadow-glow z-10" />

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                  <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                    {/* Period badge */}
                    <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <Calendar className="w-4 h-4" />
                      <span>{item.period}</span>
                    </div>

                    {/* Title & Company */}
                    <h3 className="text-xl font-display font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className={`text-primary font-semibold ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>{item.company}</p>
                    {/* Location */}
                    <div className={`flex items-center gap-1 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>

                    {/* Highlights */}
                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {item.highlights.map((highlight, hIndex) => <li key={hIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          <span className="text-sm text-justify font-extralight font-mono">{highlight}</span>
                        </li>)}
                    </ul>
                  </div>
                </div>

                {/* Empty space for alternating layout - show image if available */}
                <div className={`hidden md:flex md:flex-col md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} ${item.logo || item.image || item.images ? 'md:gap-4' : ''}`}>
                  {item.logo && <img src={item.logo} alt={`${item.company} logo`} className={`w-full object-contain rounded-2xl border border-border bg-white p-6 hover:border-primary/50 transition-all duration-300 ${item.image || item.images ? 'h-48' : 'h-full'}`} />}
                  {item.image && <img src={item.image} alt={`${item.company} work`} className={`w-full object-cover object-center rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 ${item.logo ? 'h-48' : 'h-full'}`} />}
                  {item.images && item.images.map((img, imgIndex) => (
                    <img key={imgIndex} src={img} alt={`${item.company} work ${imgIndex + 1}`} className="w-full h-48 object-contain object-center rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 bg-card p-2" />
                  ))}
                </div>
              </div>)}
          </div>

          {/* Education Section */}
          <div id="education" className="mt-20 pt-12 border-t border-border scroll-mt-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground">Education</h3>
            </div>

            <div className="space-y-6">
              {educationItems.map((edu, index) => <div key={index} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 max-w-xl">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <h4 className="text-xl font-display font-bold text-foreground mb-1">
                    {edu.title}
                  </h4>
                  <p className="text-primary font-semibold mb-2">{edu.company}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                    <MapPin className="w-3 h-3" />
                    <span>{edu.location}</span>
                  </div>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, hIndex) => <li key={hIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>)}
                  </ul>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CareerSection;