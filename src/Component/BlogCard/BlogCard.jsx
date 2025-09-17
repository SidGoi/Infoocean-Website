// components/BlogCard.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ post }) => {
  return (
    <Link href={post.link} className="block w-full text-center group">
      <div className="bg-light rounded-xl overflow-hidden">
        {/* Image */}
        <div className="relative w-full h-56 md:h-64">
          <Image
            src={post.image}
            alt={`Image for blog post: ${post.quote}`}
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Text Content */}
        <div className="p-4 md:p-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex flex-col items-center justify-between gap-3">
              <Image
                src={"/icons/Quote.svg"}
                height={200}
                width={200}
                alt="QuoteIcon"
                className="h-6 w-auto"
              />
              <span className="h-[50px] w-[1px] bg-gray" />
              <p className="text-sm text-gray-500 font-medium tracking-widest uppercase text-left">
                {post.category}
              </p>
            </div>
            <p className="text-base text-gray-700 font-semibold leading-relaxed text-left">
              {post.quote}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
