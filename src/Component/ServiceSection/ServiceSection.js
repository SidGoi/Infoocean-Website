// components/ServiceSection.js
import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

// Dummy data for the cards - replace with your actual data
const servicesData = [
  {
    image: "/images/net.png", // Replace with your image paths
    title: ".NET Development",
    description:
      "We specialize in building scalable, secure, and fully customizable .NET development solutions tailored to your business needs.",
  },
  {
    image: "/images/ai.png",
    title: "AI Solutions",
    description:
      "We deliver intelligent, data-driven AI solutions designed to automate processes, enhance decision-making, and unlock new growth opportunities.",
  },
  {
    image: "/images/cloud.png",
    title: "Cloud Services",
    description:
      "We provide end-to-end cloud services including migration, deployment, and management — built for performance, security, and flexibility.",
  },
];

const ServiceSection = () => {
  return (
    <section>
      <h2 className="sr-only">Our Services</h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
