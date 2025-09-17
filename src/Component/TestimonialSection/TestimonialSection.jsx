// components/TestimonialsSection.js
import React from "react";
import { testimonialsData } from "@/data/testimonials-data"; // Adjust path
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import { Marquee } from "@/components/ui/marquee";
import SectionTitle from "../SectionTitle/SectionTitle";

const TestimonialSection = () => {
  return (
    <section className="overflow-hidden flex flex-col gap-5 md:gap-10">
      <SectionTitle
        title="What Partners Say"
        linkText="see more of our work »"
        linkHref="/our-work"
      />
      <Marquee pauseOnHover={true} className="[--duration:150s]">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
            title={testimonial.title}
            avatar={testimonial.avatar}
          />
        ))}
      </Marquee>
      <Marquee pauseOnHover={true} className="[--duration:150s]" reverse>
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
            title={testimonial.title}
            avatar={testimonial.avatar}
          />
        ))}
      </Marquee>
    </section>
  );
};

export default TestimonialSection;
