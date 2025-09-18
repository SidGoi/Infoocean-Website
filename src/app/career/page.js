import BlogSection from "@/Component/BlogSection/BlogSection";
import TeamMemberSection from "@/Component/TeamMemberSection/TeamMemberSection";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-10">
      <TeamMemberSection />
      <BlogSection />
    </div>
  );
};

export default page;
