import { notFound } from "next/navigation";
import Image from "next/image";
import { blogPosts } from "@/data/blog-posts";

export default function BlogDetails({ params }) {
  const blog = blogPosts.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <div className="px-5">
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center">
        {/* Text Section */}
        <div className="flex flex-col gap-3 md:gap-6 w-full md:w-1/2">
          <p className="text-lg md:text-xl text-gray uppercase font-bold">
            BLOG
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

      {/* Blog Content */}
      <div
        className="prose prose-base md:prose-lg prose-gray mt-8 md:mt-10 max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}
