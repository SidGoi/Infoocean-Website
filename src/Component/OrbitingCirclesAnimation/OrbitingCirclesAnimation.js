import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { File, Settings, Search } from "lucide-react";
import Image from "next/image";

const OrbitingCirclesAnimation = () => {
  return (
    <div className="relative flex h-[500px] w-full md:w-[600px] flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40} speed={1}>
        <div className="bg-primary p-2 rounded-full max-h-[50px] min-w-[50px] flex items-center justify-center">
          <Image
            src={"/icons/tech-stack/React.svg"}
            height={100}
            width={100}
            className="h-15 w-auto"
            alt="ReactJS"
          />
        </div>
        <div className="bg-primary p-2 rounded-full max-h-[50px] min-w-[50px] flex items-center justify-center">
          <Image
            src={"/icons/tech-stack/expressjs-white.svg"}
            height={100}
            width={100}
            className="h-15 w-auto"
            alt="Express"
          />
        </div>
        <div className="bg-primary p-2 rounded-full max-h-[50px] min-w-[50px] flex items-center justify-center">
          <Image
            src={"/icons/tech-stack/NET.svg"}
            height={100}
            width={100}
            className="h-15 w-auto"
            alt="NET"
          />
        </div>
        <div className="bg-primary p-2 rounded-full max-h-[50px] min-w-[50px] flex items-center justify-center">
          <Image
            src={"/icons/tech-stack/Docker.svg"}
            height={100}
            width={100}
            className="h-15 w-auto"
            alt="Docker"
          />
        </div>
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={80} reverse speed={1}>
        <div className="bg-primary p-2 rounded-full max-h-[50px] min-w-[50px] flex items-center justify-center">
          <Image
            src={"/icons/tech-stack/Blazor.svg"}
            height={100}
            width={100}
            className="h-15 w-auto"
            alt="Blazor"
          />
        </div>
        <div className="bg-primary p-2 rounded-full max-h-[50px] min-w-[50px] flex items-center justify-center">
          <Image
            src={"/icons/tech-stack/Azure.svg"}
            height={100}
            width={100}
            className="h-15 w-auto"
            alt="Azure"
          />
        </div>
        <div className="bg-primary p-2 rounded-full max-h-[50px] min-w-[50px] flex items-center justify-center">
          <Image
            src={"/icons/tech-stack/Angular.svg"}
            height={100}
            width={100}
            className="h-15 w-auto"
            alt="Angular"
          />
        </div>
        <div className="bg-primary p-2 rounded-full max-h-[50px] min-w-[50px] flex items-center justify-center">
          <Image
            src={"/icons/tech-stack/Nodejs.svg"}
            height={100}
            width={100}
            className="h-15 w-auto"
            alt="Nodejs"
          />
        </div>
      </OrbitingCircles>
    </div>
  );
};

export default OrbitingCirclesAnimation;
