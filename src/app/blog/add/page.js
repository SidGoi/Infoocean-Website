"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

import IOButton from "@/Component/IOButton/IOButton";

export default function AddBlog() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); 
  };

  const handleSubmit = () => {
    console.log("Title:", title);
    console.log("Image:", image);
    console.log("Content:", content);

  };

  return (
    <div className="p-6 flex flex-col gap-5">
      <h2 className="text-2xl font-bold mb-4 text-primary">Add Blog</h2>

      <input
        type="text"
        placeholder="Enter Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="border border-gray-300 rounded-lg p-3 cursor-pointer"
      />

      <div className="">
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          className="h-full"
        />
      </div>

      <IOButton onClick={handleSubmit} title="Add Blog" />
    </div>
  );
}
