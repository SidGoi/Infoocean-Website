// components/WhyInfooceanSection.js
import React from 'react';
import Stats from '../Stats/Stats';
import WhyInfooceanAccordion from '../WhyInfooceanAccordion/WhyInfooceanAccordion';

const WhyInfooceanSection = () => {
  return (
    <section className="">
      {/* SEO-friendly heading */}
      <h2 className="text-4xl md:text-6xl font-extrabold text-primary">WHY INFOOCEAN ?</h2>

      {/* Stats Section */}
      <div className="container mb-5 md:mb-10">
        <Stats />
      </div>

      {/* Main Content (Why Partner & Accordion) */}
      <div className="flex flex-col md:flex-row gap-15">
        {/* Left Column (Why Partner With Us?) */}
        <div className="text-primary">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">Why Partner With Us?</h3>
          <p className="text-xl md:text-2xl font-normal leading-tight">
            Your Vision,<br />
            Our Execution<br />
            Powered by Tech,<br />
            Backed by Experience.
          </p>
        </div>

        {/* Right Column (Accordion) */}
        <div className="w-full">
          <WhyInfooceanAccordion />
        </div>
      </div>
    </section>
  );
};

export default WhyInfooceanSection;