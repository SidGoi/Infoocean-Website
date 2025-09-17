import HeroSection from "@/Component/HeroSection/HeroSection";
import ServiceSection from "@/Component/ServiceSection/ServiceSection";
import TechStack from "@/Component/TechStack/TechStack";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />
      <TechStack />
      <ServiceSection />
    </div>
  );
}
