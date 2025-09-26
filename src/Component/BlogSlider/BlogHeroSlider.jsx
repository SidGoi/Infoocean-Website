"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./BlogHeroSlider.module.css";

const BlogHeroSlider = ({ blogs }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % blogs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [blogs.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.sliderContainer}>
      <div
        className={` rounded-2xl ${styles.sliderTrack}`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {blogs.map((blog, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse md:flex-row gap-6 md:gap-12 items-center justify-center min-w-full bg-light p-3 md:p-10 rounded-2xl`}
          >
            {/* Text Section */}
            <div className="flex flex-col gap-3 md:gap-6 w-full md:w-1/2">
              <p className="text-lg md:text-xl text-gray uppercase font-bold">
                Blog
              </p>
              <div className="flex items-center">
                <Image
                  src={"/icons/Quote.svg"}
                  height={200}
                  width={200}
                  alt="QuoteIcon"
                  className="h-6 w-auto"
                />
                <span className="ml-3 flex-1 h-[1px] bg-gray" />
                <span className="w-3 h-3 rounded-full bg-gray" />
              </div>
              <h1 className="text-2xl md:text-4xl font-medium text-primary">
                {blog.title}
              </h1>
            </div>

            {/* Featured Image */}
            <div className="relative w-full md:w-1/2 h-64 md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className={styles.dots}>
        {blogs.map((_, index) => (
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

export default BlogHeroSlider;
