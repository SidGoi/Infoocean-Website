import React from "react";
import Image from "next/image";
import Link from "next/link";
import IOButton from "../IOButton/IOButton";

const CallToActionSection = ({
  imageSrc,
  imageAlt,
  heading,
  description,
  buttonText,
  buttonLink,
  reverseLayout = false,
}) => {
  return (
    <section
      className={`px-4 sm:px-6 lg:px-8`}
    >
      <div
        className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 lg:gap-20 ${
          reverseLayout ? "md:flex-row-reverse" : "" // Apply reverse layout if prop is true
        }`}
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1000} // Increased width for better quality on larger screens
            height={1000} // Increased height
            layout="responsive" // Makes the image responsive within its container
            objectFit="contain" // Ensures the whole image is visible without cropping
    className="w-20 h-auto"
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-8 text-primary`}
          >
            {heading}
          </h2>
          <p className={`text-lg md:text-xl font-medium mb-4 text-primary`}>{description}</p>
          <IOButton title={buttonText} />
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
