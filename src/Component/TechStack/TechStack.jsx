// components/Marquee.js
import React from "react";
import Image from "next/image";
import { techStack } from "@/data/tech-stack";
import { Marquee } from "@/components/ui/marquee";

const TechStack = () => {
  return (
    <div className="relative w-full flex overflow-hidden">
      <div className={`flex items-center justify-center gap-10 shrink-0`}>
        <Marquee>
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="flex items-center gap-2 rounded-full border border-gray px-4 py-2 text-primary"
            >
              <Image
                src={tech.icon}
                alt={`${tech.name} icon`}
                width={24}
                height={24}
              />
              <span className="text-sm font-medium">{tech.name}</span>
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TechStack;
