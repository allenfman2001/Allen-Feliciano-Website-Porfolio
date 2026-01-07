import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import CareerSection from "@/components/CareerSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import FilmsSection from "@/components/FilmsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <CareerSection />
      <ExpertiseSection />
      <FilmsSection />
      <ContactSection />
    </main>
  );
};

export default Index;