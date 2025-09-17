// components/ProjectCard.js
import React from "react";
import Image from "next/image";
import IOButton from "../IOButton/IOButton";

const ProjectCard = ({ project, isReversed }) => {
  return (
    <article
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 sm:px-8 md:px-16 bg-light py-6 sm:py-8 md:py-16 rounded-2xl"
    >
      {/* Image Content */}
      <div
        className={`flex justify-center items-center order-1 ${
          isReversed ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <Image
          src={project.image}
          alt={`${project.title} showcase`}
          width={600}
          height={400}
          className="w-[500px] h-auto"
        />
      </div>

      {/* Text Content */}
      <div
        className={`flex flex-col items-start gap-5 order-2 ${
          isReversed ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div className="">
          <Image
            src={project.logo}
            alt={`${project.title} logo`}
            width={500}
            height={500}
            className="h-10 w-auto"
          />
        </div>
        <h3 className="text-3xl sm:text-4xl font-bold text-primary">
          {project.heading}
        </h3>
        <p className="text-base text-gray-600">{project.description}</p>
        <IOButton
          title="Read the Case Study"
          theme="dark"
          buttonLink={project.buttonLink}
        />
      </div>
    </article>
  );
};

export default ProjectCard;