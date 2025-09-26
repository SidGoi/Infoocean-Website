// components/HeroSection.js
import React from "react";
import Image from "next/image";
import IOButton from "../IOButton/IOButton";

const HeroSection = () => {
  return (
    <section className="w-full overflow-hidden py-20 md:py-14 lg:py-14 flex items-center justify-center">
      <div className="container mx-auto px-3 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl">
        <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
            Ride the Wave of <br />
            <span
              className="text-5xl sm:text-5xl lg:text-7xl relative inline-block text-transparent bg-clip-text bg-cover font-extrabold"
              style={{
                backgroundImage: "url(/images/innovation-text-bg.png)",
              }}
            >
              INNOVATION
            </span>
          </h1>

          {/* Descriptive Paragraph */}
          <p className="text-lg md:text-xl text-gray-700 max-w-xl">
            We turn complex challenges into smooth-sailing solutions with
            creativity, code, and commitment.
          </p>

          <IOButton
            title="Explore Services"
            theme="dark"
            buttonLink="/service"
          />
        </div>

        <div className="hidden lg:flex justify-center items-center lg:justify-end">
          <Image
            src="/images/innovation-infinity.png"
            alt="Dynamic blue infinity symbol representing continuous innovation"
            width={1000} // Set intrinsic width for Next/Image optimization
            height={1000} // Set intrinsic height for Next/Image optimization
            className="max-w-full h-auto"
            priority // Load with high priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
