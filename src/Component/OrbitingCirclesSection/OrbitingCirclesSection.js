import React from "react";
import OrbitingCirclesAnimation from "../OrbitingCirclesAnimation/OrbitingCirclesAnimation";

const OrbitingCirclesSection = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col md:flex-row">
      <OrbitingCirclesAnimation />
      <div className="">
        <h1 className="text-8xl md:text-9xl font-semibold text-neon  -mb-3 md:-mb-5">Ideas</h1>
        <h1 className="text-8xl md:text-9xl font-semibold text-neon  -mb-3 md:-mb-5">into</h1>
        <h1 className="text-8xl md:text-9xl font-semibold text-neon bg-primary">Reality.</h1>
      </div>
    </div>
  );
};

export default OrbitingCirclesSection;
