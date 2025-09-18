"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./HeaderSlider.module.css";
import IOButton from "../IOButton/IOButton";
import ProjectCard from "../ProjectCard/ProjectCard";

const HeaderSlider = ({ sliderData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.sliderTrack}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {sliderData.map((slide, index) => (
          <div key={index} className={styles.slide}>
            <ProjectCard project={slide} />
          </div>
        ))}
      </div>

      <div className={styles.dots}>
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`${styles.dot} ${
              currentSlide === index ? styles.dotActive : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;
