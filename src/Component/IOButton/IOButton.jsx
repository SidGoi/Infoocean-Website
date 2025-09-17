"use client";
import React from "react";
import Link from "next/link";
import styles from "./IOButton.module.css";
import { cn } from "@/lib/utils"; // Import the utility to join class names

const IOButton = (props) => {
  const ArrowIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="currentColor"
      className={styles.btnArrowForward}
    >
      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
    </svg>
  );

  const ButtonContent = () => (
    <>
      {props.title}
      <ArrowIcon />
    </>
  );

  // Common button classes for both light and dark versions
  const baseClasses = `
    inline-flex items-center justify-center gap-4 h-10 px-6 font-medium relative
    transition-all duration-300 ease-in z-10 overflow-hidden cursor-pointer
  
    active:scale-95 active:transition-transform active:duration-100
  `;

  // Color theme classes based on the 'theme' prop
  const themeClasses = {
    dark: `
      bg-primary text-light
       hover:text-secondary
      focus:ring-primary focus:ring-offset-primary
      ${styles.btnDark}
    `,
    light: `
      bg-secondary text-primary
    hover:text-secondary
    
      focus:ring-secondary focus:ring-offset-secondary
      ${styles.btnLight}
    `,
  };

  const buttonClasses = cn(
    baseClasses,
    themeClasses[props.theme] || themeClasses.dark // Default to dark if theme is not specified
  );

  if (props.buttonLink) {
    return (
      <Link href={props.buttonLink} className="inline-block">
        <button className={buttonClasses} onClick={props.onClick}>
          <ButtonContent />
        </button>
      </Link>
    );
  }

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <ButtonContent />
    </button>
  );
};

export default IOButton;
