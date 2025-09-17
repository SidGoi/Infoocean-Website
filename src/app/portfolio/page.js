import GetQuote from "@/Component/GetQuote/GetQuote";
import ProjectsSection from "@/Component/ProjectsSection/ProjectsSection";

const page = () => {
  return (
    <div className="flex flex-col gap-10">
      <ProjectsSection />
      <GetQuote
        heading="Your project here"
        description="The proof is in our work. Check out our case study to learn how our product development services can transform your business."
        buttonText="Get Quote"
        buttonLink="/contact"
      />
    </div>
  );
};

export default page;
