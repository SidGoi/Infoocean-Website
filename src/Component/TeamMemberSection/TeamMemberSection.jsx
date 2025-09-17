import React from "react";
import TeamMemberCard from "../TeamMemberCard/TeamMemberCard";
import styles from "./TeamMemberSection.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";

const cardData = [
  {
    image: "/images/CEO.png",
    title: "Prince Gajjar",
    description: "Founder & CEO of Infoocean",
    link: "#",
  },
  {
    image: "/images/CEO.png",
    title: "Prince Gajjar",
    description: "Founder & CEO of Infoocean",
    link: "#",
  },
  {
    image: "/images/CEO.png",
    title: "Prince Gajjar",
    description: "Founder & CEO of Infoocean",
    link: "#",
  },
  {
    image: "/images/CEO.png",
    title: "Prince Gajjar",
    description: "Founder & CEO of Infoocean",
    link: "#",
  },
  {
    image: "/images/CEO.png",
    title: "Prince Gajjar",
    description: "Founder & CEO of Infoocean",
    link: "#",
  },
  {
    image: "/images/CEO.png",
    title: "Prince Gajjar",
    description: "Founder & CEO of Infoocean",
    link: "#",
  },
];

const TeamMemberSection = () => {
  return (
    <div className="flex flex-col gap-5 md:gap-10">
      <SectionTitle
        title="Team Leader’s of Infoocean"
        linkText="About us"
        linkHref="/"
      />
      <div
        className={`flex gap-6 overflow-x-auto snap-x snap-mandatory ${styles.scrollContainer}`}
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            className="snap-center shrink-0 w-[85%] sm:w-[60%] md:w-[40%] lg:w-[30%]"
          >
            <TeamMemberCard
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              link={card.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMemberSection;
