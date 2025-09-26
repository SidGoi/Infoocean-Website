import BlogSection from "@/Component/BlogSection/BlogSection";
import BlogHeroSlider from "@/Component/BlogSlider/BlogHeroSlider";
import SectionTitle from "@/Component/SectionTitle/SectionTitle";
import Image from "next/image";
import React from "react";

const blogData = [
  {
    title: "The Future of Next.js in 2025",
    image: "/images/demo-post-3.jpg",
  },
  {
    title: "How to Build a Blog App with Rich Text Editor",
    image: "/images/demo-post-3.jpg",
  },
  {
    title: "Best UI Libraries for Developers",
    image: "/images/demo-post-3.jpg",
  },
];
const page = () => {
  return (
    <div className="flex flex-col gap-10">
      <BlogHeroSlider blogs={blogData} />
      <BlogSection/>
      <BlogSection/>
      <BlogSection/>
    </div>
  );
};

export default page;
