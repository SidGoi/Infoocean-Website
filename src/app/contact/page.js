import BlogSection from "@/Component/BlogSection/BlogSection";
import GetQuote from "@/Component/GetQuote/GetQuote";
import HeroSection from "@/Component/HeroSection/HeroSection";
import ProjectsSection from "@/Component/ProjectsSection/ProjectsSection";
import ServiceSection from "@/Component/ServiceSection/ServiceSection";
import TechStack from "@/Component/TechStack/TechStack";
import TestimonialSection from "@/Component/TestimonialSection/TestimonialSection";
import WhyInfooceanSection from "@/Component/WhyInfooceanSection/WhyInfooceanSection";

const page = () => {
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />
      <TechStack />
      <ServiceSection />
      <WhyInfooceanSection />
      <ProjectsSection />
      <GetQuote
        heading="Your project here"
        description="The proof is in our work. Check out our case study to learn how our product development services can transform your business."
        buttonText="Get Quote"
        buttonLink="/contact"
      />
      <BlogSection />
      <TestimonialSection />
    </div>
  );
};

export default page;
