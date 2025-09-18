// components/SectionTitle.js
import React from "react";
import Link from "next/link";
import Image from "next/image";

const SectionTitle = ({ title, linkText, linkHref, className }) => {
  return (
    <div
      className={`flex justify-between items-center text-primary ${className}`}
    >
      <h2 className="text-xl sm:text-2xl font-semibold">{title}</h2>
      {linkText && linkHref && (
        <Link
          href={linkHref}
          className="hidden md:flex items-center justify-center gap-1 text-xs sm:text-base text-neon hover:underline [&>svg]:text-neon"
        >
          {linkText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#00CFFF"
            className="h-4 w-auto"
          >
            <path d="M442-480 287-697q-14-20-3.5-41.5T319-760q10 0 19 4.5t14 12.5l188 263-188 263q-5 8-14 12.5t-19 4.5q-24 0-35-21.5t3-41.5l155-217Zm238 0L525-697q-14-20-3.5-41.5T557-760q10 0 19 4.5t14 12.5l188 263-188 263q-5 8-14 12.5t-19 4.5q-24 0-35-21.5t3-41.5l155-217Z" />
          </svg>
        </Link>
      )}
      {linkText && linkHref && (
        <Link
          href={linkHref}
          className="md:hidden text-2xl sm:text-base text-primary hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#00CFFF"
            className="h-4 w-auto"
          >
            <path d="M442-480 287-697q-14-20-3.5-41.5T319-760q10 0 19 4.5t14 12.5l188 263-188 263q-5 8-14 12.5t-19 4.5q-24 0-35-21.5t3-41.5l155-217Zm238 0L525-697q-14-20-3.5-41.5T557-760q10 0 19 4.5t14 12.5l188 263-188 263q-5 8-14 12.5t-19 4.5q-24 0-35-21.5t3-41.5l155-217Z" />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default SectionTitle;
