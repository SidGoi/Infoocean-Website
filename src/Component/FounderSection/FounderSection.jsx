import Image from "next/image";
import React from "react";

const FounderSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center rounded-2xl overflow-hidden">
    
        <div
          className="w-full md:w-auto flex-shrink-0 relative bg-primary"
        >
          <div className="flex justify-center items-center md:justify-end md:items-end h-full md:px-20 md:pt-10 px-10 ">
            <Image
              src="/images/CEO_of_Infoocean.png"
              height={1000}
              width={1000}
              alt="Mr. Prince Gajjar, Founder & CEO of InfoOcean"
              className="rounded-xl w-auto h-5xl md:h-9xl object-cover "
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-3/5 p-8 lg:p-12 flex flex-col justify-center text-primary">
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-bold italic mb-6 leading-relaxed">
            "Like the ocean, technology is powerful but only those who learn to
            ride the waves can truly shape the future."
          </blockquote>

          <p className="text-sm sm:text-base mb-4 leading-relaxed">
            At InfoOcean, we believe that technology, like the ocean, is vast,
            deep, and full of potential. What sets us apart is how we navigate
            it — with purpose, precision, and passion.
          </p>

          <p className="text-sm sm:text-base mb-4 leading-relaxed">
            From day one, our goal has been to build not just software, but
            solutions that solve real problems, fuel growth, and create
            long-term value. As we expand globally, we're staying rooted in our
            core values: integrity, innovation, and impact.
          </p>

          <p className="text-sm sm:text-base mb-6 leading-relaxed">
            To our clients, team, and partners — thank you for being part of
            this journey. The tide is rising, and we're just getting started.
          </p>

          <div className="mt-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-1">
              Mr. Prince Gajjar
            </h2>
            <p className="text-lg sm:text-xl text-gray">
              Founder & CEO, InfoOcean Pvt. Ltd.
            </p>
          </div>
        </div>
    </section>
  );
};

export default FounderSection;
