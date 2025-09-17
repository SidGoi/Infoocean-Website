// components/SectionTitle.js
import React from "react";
import Link from "next/link";

const SectionTitle = ({ title, linkText, linkHref, className }) => {
  return (
    <div
      className={`flex justify-between items-center text-primary ${className}`}
    >
      <h2 className="text-xl sm:text-2xl font-semibold">{title}</h2>
      {linkText && linkHref && (
        <Link
          href={linkHref}
          className="hidden md:block text-xs sm:text-base text-neon hover:underline"
        >
          {linkText}
        </Link>
      )}
      {linkText && linkHref && (
        <Link
          href={linkHref}
          className="md:hidden text-2xl sm:text-base text-primary hover:underline"
        >
          »
        </Link>
      )}
    </div>
  );
};

export default SectionTitle;
