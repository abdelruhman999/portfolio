import React from "react";
import { Button } from "./ui/button";
import logo from "../../public/assets/ChatGPT Image Aug 11, 2026, 06_46_31 PM.png";
import Image from "next/image";

interface Props {}

const About: React.FC<Props> = () => {
  return (
    <div
      className="
        w-full px-30 flex items-center justify-between

        max-sm:flex-col
        max-sm:items-center
        max-sm:justify-center
        max-sm:gap-10
        max-sm:px-5
      "
    >
      {/* Content */}
      <div
        className="
          flex flex-col items-start gap-4

          max-sm:w-full
          max-sm:items-center
          max-sm:text-center
        "
      >
        <p className="text-4xl cursor-pointer font-bold max-sm:text-3xl">
          Abdelruhman Ahmed
        </p>

        <p className="text-lg text-[#ff4500] font-semibold max-sm:text-base">
          Full Stack & 3D Web Developer
        </p>

        <Button
          className="
            bg-[#ff4500]
            rounded-3xl
            cursor-pointer
            text-white
            hover:bg-[#ff4500]/90
            font-semibold
            text-md
            w-[150px]
            h-[49px]
          "
        >
          Contact Me
        </Button>
      </div>

      {/* Image */}
      <div
        className="
          w-[256px]
          h-[336px]
          relative
          flex
          items-end
          rounded-3xl
          border-2
          bg-neutral-800/50
          border-[#ff4500]

          max-sm:w-[220px]
          max-sm:h-[290px]
        "
      >
        <Image
          src={logo}
          alt="Abdelruhman Ahmed"
          width={256}
          height={336}
          className="h-[90%] w-full object-contain"
        />

        <div className="absolute inset-0 rounded-3xl bg-black/30 pointer-events-none" />
      </div>
    </div>
  );
};

export default About;