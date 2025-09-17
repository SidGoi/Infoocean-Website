import HeroSection from "@/Component/HeroSection/HeroSection";
import ProjectsSection from "@/Component/ProjectsSection/ProjectsSection";
import ServiceSection from "@/Component/ServiceSection/ServiceSection";
import TechStack from "@/Component/TechStack/TechStack";
import TestimonialSection from "@/Component/TestimonialSection/TestimonialSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />
      <TechStack />
      <ServiceSection />
      <ProjectsSection />
      <TestimonialSection />
    </div>
  );
}
