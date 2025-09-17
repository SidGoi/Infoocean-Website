import React from "react";
import Link from "next/link";

const GetQuote = ({ heading, description, buttonText, buttonLink }) => {
  return (
    <section>
      <div className="border-[0.5px] border-primary rounded-[2rem] p-14 md:p-24 lg:p-24 flex items-center justify-center flex-col gap-3 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
          {heading}
        </h2>
        <p className="text-lg text-gray max-w-3xl">{description}</p>
        <Link
          href={buttonLink}
          className="block text-center px-6 py-2 rounded-full bg-secondary text-primary font-medium  hover:bg-secondary transition w-fit"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default GetQuote;
