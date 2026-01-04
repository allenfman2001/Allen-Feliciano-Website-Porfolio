import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import CareerSection from "@/components/CareerSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProjectsSection />
      <CareerSection />
      <ExpertiseSection />
      <ContactSection />
    </main>
  );
};

export default Index;