import React from "react";
import FocusCard from "../FocusCard/FocusCard";
import { techStacks } from "@/data/techStacks";
import SectionTitle from "../SectionTitle/SectionTitle";

const FocusAreaSection = () => {
  return (
    <div>
      <SectionTitle
        title="Out Focus Area"
        linkText="Contact now"
        linkHref="/"
        className={'mb-5'}
      />
      <div className="font-sans flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  w-full">
          {techStacks.map((tech, index) => (
            <FocusCard
              key={index}
              imageSrc={tech.imageSrc}
              imageAlt={tech.imageAlt}
              title={tech.title}
              description={tech.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FocusAreaSection;
