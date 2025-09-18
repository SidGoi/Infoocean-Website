import Image from "next/image";
import React from "react";

const FocusCard = ({ imageSrc, imageAlt, title, description }) => {
  return (
    <div className="w-full h-[150px] rounded-2xl border border-secondary px-5 py-3 bg-primary flex items-center justify-center gap-5 relative overflow-hidden transition-transform transform hover:scale-105 duration-500 cursor-pointer">
      <img
        src={imageSrc}
        height={300}
        width={300}
        className={`h-20 w-auto flex-shrink-0`}
        alt={imageAlt}
      />
      <img
        src={imageSrc}
        height={300}
        width={300}
        className="h-32 w-auto absolute -bottom-5 -right-5 opacity-10"
        alt={imageAlt}
      />
      <div className="text-light flex flex-col justify-center">
        <h1 className="font-medium text-xl">{title}</h1>
        <p className="text-xs text-light">{description}</p>
      </div>
    </div>
  );
};

export default FocusCard;
