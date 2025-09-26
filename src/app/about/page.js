import CallToActionSection from "@/Component/CallToActionSection/CallToActionSection";
import FounderSection from "@/Component/FounderSection/FounderSection";
import GlobalTeam from "@/Component/GlobalTeam/GlobalTeam";
import MissionVision from "@/Component/MissionVision/MissionVision";
import TeamMemberSection from "@/Component/TeamMemberSection/TeamMemberSection";
import TestimonialSection from "@/Component/TestimonialSection/TestimonialSection";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-10">
      <CallToActionSection
        imageSrc="/images/team.png"
        imageAlt="Abstract blue IT solutions graphic"
        description="We are a forward-thinking IT company turning complex tech into simple, scalable solutions. From enterprise software to cutting-edge AI, we deliver results that matter — on time, every time."
        heading="Empowering Ideas Engineering Solutions"
        buttonText="Join us"
        buttonLink="/contact"
      />
      <MissionVision />
      <GlobalTeam />
      <FounderSection />
      <TeamMemberSection />
      <TestimonialSection />
      <CallToActionSection
        imageSrc="/images/Services.png"
        imageAlt="Abstract blue IT solutions graphic"
        description="Connect with us and unlock cutting-edge IT solutions designed to elevate your professional offerings. We help you build trust, deliver value, and stay ahead in today's fast-paced digital landscape."
        heading="Together Let's Transform Professional Services"
        buttonText="Connect Now"
        buttonLink="/contact"
      />
    </div>
  );
};

export default page;
