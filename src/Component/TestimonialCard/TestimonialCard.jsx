// components/TestimonialCard.js
import React from "react";
import Image from "next/image";

const TestimonialCard = ({ quote, author, title, avatar }) => {
  return (
    <div className="flex-none gap-3 w-[250px] sm:w-[320px] md:w-[360px] p-6 bg-light rounded-lg flex flex-col justify-between cursor-pointer overflow-hidden relative">
        <span className="w-full h-1 bg-secondary absolute top-0 left-0" />
      <p className=" text-xs sm:text-base text-gray-700 flex-grow">"{quote}"</p>
      <div className="flex items-center">
        {/* Avatar - using a placeholder for now */}
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-4 shrink-0">
          {avatar ? (
            <Image
              src={avatar}
              alt={author}
              width={200}
              height={200}
              className="rounded-full object-cover"
            />
          ) : (
            <span className="text-light text-lg font-bold">
              {author.charAt(0)}
            </span>
          )}
        </div>
        <div>
          <p className="text-xs sm:font-semibold text-primary">{author}</p>
          <p className="text-xs sm:text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
