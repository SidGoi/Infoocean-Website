// components/BlogSection.js

import React from "react";
import { blogPosts } from "@/data/blog-posts";
import BlogCard from "../BlogCard/BlogCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from './BlogSection.module.css'

const BlogSection = () => {
  return (
    <section className="flex flex-col gap-5 md:gap-10">
      <h2 className="sr-only">Our Latest Blog Posts</h2>
      <SectionTitle
        title="Insight Blog"
        linkText="Explore all blogs »"
        linkHref="/"
      />
      <div>
        <div className={`flex gap-6 overflow-x-auto snap-x snap-mandatory ${styles.scrollContainer}`}>
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="snap-center shrink-0 w-[85%] sm:w-[60%] md:w-[40%] lg:w-[30%]"
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
