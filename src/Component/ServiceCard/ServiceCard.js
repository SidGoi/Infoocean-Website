// components/ServiceCard.js
import React from "react";
import Image from "next/image";

const ServiceCard = ({ image, title, description }) => {
  return (
    <article className={`flex flex-col`}>
      <div className="h-[250px] flex items-center justify-center cursor-pointer">
        <Image
          src={image}
          alt={`Icon for ${title}`}
          width={1000}
          height={1000}
          className={`h-auto w-[300px]`}
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex">
          <span className={`block w-1 h-8 bg-secondary mr-2`}></span>
          <h3 className="text-xl font-semibold text-primary">{title}</h3>
        </div>
        <p className={`text-gray-700`}>{description}</p>
      </div>
    </article>
  );
};

export default ServiceCard;
