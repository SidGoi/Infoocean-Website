import HeroSection from "@/Component/HeroSection/HeroSection";
import ProjectsSection from "@/Component/ProjectsSection/ProjectsSection";
import ServiceSection from "@/Component/ServiceSection/ServiceSection";
import TechStack from "@/Component/TechStack/TechStack";
import TestimonialSection from "@/Component/TestimonialSection/TestimonialSection";
import WhyInfooceanSection from "@/Component/WhyInfooceanSection/WhyInfooceanSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />
      <TechStack />
      <ServiceSection />
      <WhyInfooceanSection />
      <ProjectsSection />
      <TestimonialSection />
    </div>
  );
}
