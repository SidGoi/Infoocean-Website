import BlogSection from "@/Component/BlogSection/BlogSection";
import CallToActionSection from "@/Component/CallToActionSection/CallToActionSection";
import CurrentOpenings from "@/Component/CurrentOpenings/CurrentOpenings";
import TeamMemberSection from "@/Component/TeamMemberSection/TeamMemberSection";
import WhyInfooceanSection from "@/Component/WhyInfooceanSection/WhyInfooceanSection";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-10">
      <CallToActionSection
        imageSrc="/images/career.png"
        imageAlt="Carrer"
        description="Where Passion Meets Purpose. Build the Future With Us."
        heading="Build the Career Life. you want with INFOOCEAN"
        buttonText="See Open postition"
        buttonLink="/"
      />
      <WhyInfooceanSection />
      <TeamMemberSection />
      <CurrentOpenings/>
      <BlogSection />
      <div className="flex flex-col gap-2 items-center justify-center text-center">
        <h1 className="text-2xl font-semibold text-primary">Looking For somthing else? </h1>
        <h2 className="text-3xl font-medium text-primary">
          Reach out to us at <Link href={'/'} className="text-secondary underline hover:text-neon transition-all duration-500">career@infoocean.in</Link>
        </h2>
      </div>
    </div>
  );
};

export default page;
