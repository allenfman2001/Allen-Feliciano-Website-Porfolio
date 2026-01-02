import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProjectsSection />
      <ExpertiseSection />
      <ContactSection />
    </main>
  );
};

export default Index;