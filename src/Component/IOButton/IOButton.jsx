"use client";
import React from "react";
import Link from "next/link";
import styles from "./IOButton.module.css";
import { cn } from "@/lib/utils"; // Import the utility to join class names

const IOButton = (props) => {
  const ArrowForwardIcon = () => (
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

  const ArrowBackIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="currentColor"
      className={styles.btnArrowBack}
    >
      <path d="M639-80 239-480l400-400 71 71-329 329 329 329-71 71Z" />
    </svg>
  );

  const ButtonContent = () => (
    <>
      {props.back ? (
        <>
          <ArrowBackIcon />
          {props.title}
        </>
      ) : (
        <>
          {props.title}
          <ArrowForwardIcon />
        </>
      )}
    </>
  );

  // Common button classes
  const baseClasses = `
    inline-flex items-center justify-center gap-4 h-10 px-6 font-medium relative
    transition-all duration-300 ease-in z-10 overflow-hidden cursor-pointer
    active:scale-95 active:transition-transform active:duration-100 w-fit
  `;

  // Theme classes
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
    themeClasses[props.theme] || themeClasses.dark
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

// Default props
IOButton.defaultProps = {
  back: false,
};

export default IOButton;
