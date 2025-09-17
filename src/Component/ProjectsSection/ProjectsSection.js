// components/ProjectsSection.js
import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectCard from "../ProjectCard/ProjectCard";

const projectsData = [
  {
    logo: "/images/demo-logo.png",
    title: "BYOU",
    heading: "How we built the ultimate remote team management platform.",
    description:
      "TaskFlowPro approached us to reinvent how distributed teams work. We delivered a complete UI/UX overhaul, built intuitive dashboards, optimized the user journey, and developed a fully responsive front-end that scales with global teams.",
    image: "/images/demo-project.png",
    buttonLink: "/",
  },
  {
    logo: "/images/demo-logo.png",
    title: "GBIX",
    heading: "How we built the ultimate remote team management platform.",
    description:
      "TaskFlowPro approached us to reinvent how distributed teams work. We delivered a complete UI/UX overhaul, built intuitive dashboards, optimized the user journey, and developed a fully responsive front-end that scales with global teams.",
    image: "/images/demo-project.png",
    buttonLink: "/",
  },
  {
    logo: "/images/demo-logo.png",
    title: "TGS",
    heading: "How we built the ultimate remote team management platform.",
    description:
      "TaskFlowPro approached us to reinvent how distributed teams work. We delivered a complete UI/UX overhaul, built intuitive dashboards, optimized the user journey, and developed a fully responsive front-end that scales with global teams.",
    image: "/images/demo-project.png",
    buttonLink: "/",
  },
];

const ProjectsSection = () => {
  return (
    <section className="flex flex-col gap-5 md:gap-10">
      <SectionTitle
        title="Made by infoocean"
        linkText="see more of our work »"
        linkHref="/our-work"
      />
   
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            isReversed={index % 2 !== 0} // Alternates the layout for even/odd items
          />
        ))}
    </section>
  );
};

export default ProjectsSection;
