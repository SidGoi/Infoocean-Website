import BlogSection from "@/Component/BlogSection/BlogSection";
import CallToActionSection from "@/Component/CallToActionSection/CallToActionSection";
import GetQuote from "@/Component/GetQuote/GetQuote";
import ProjectsSection from "@/Component/ProjectsSection/ProjectsSection";
import ServiceSection from "@/Component/ServiceSection/ServiceSection";
import TeamMemberSection from "@/Component/TeamMemberSection/TeamMemberSection";
import TechStack from "@/Component/TechStack/TechStack";
import TestimonialSection from "@/Component/TestimonialSection/TestimonialSection";
import WhyInfooceanSection from "@/Component/WhyInfooceanSection/WhyInfooceanSection";

const page = () => {
  return (
    <div className="flex flex-col gap-10">
      <CallToActionSection
        imageSrc="/images/Services.png"
        imageAlt="Abstract blue IT solutions graphic"
        description="Explore our full stack of services — from custom software to AI-driven innovation. We don’t just build products, we build your competitive edge."
        heading="Smart Tech. Real Results"
        buttonText="Let's build together"
        buttonLink="/contact"
      />
      <TechStack />
      <ServiceSection />
      <ProjectsSection />
      <GetQuote
        heading="Your project here"
        description="The proof is in our work. Check out our case study to learn how our product development services can transform your business."
        buttonText="Get Quote"
        buttonLink="/contact"
      />
      <BlogSection />
      <TestimonialSection />
      <TeamMemberSection />
      <CallToActionSection
        imageSrc="/images/Services.png"
        imageAlt="Abstract blue IT solutions graphic"
        description="Connect with us and unlock cutting-edge IT solutions designed to elevate your professional offerings. We help you build trust, deliver value, and stay ahead in today's fast-paced digital landscape."
        heading="Together Let's Transform Professional Services"
        buttonText="Connect Now"
        buttonLink="/contact"
        reverseLayout
      />
    </div>
  );
};

export default page;
