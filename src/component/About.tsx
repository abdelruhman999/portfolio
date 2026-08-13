import React from "react";
import { Button } from "./ui/button";
import logo from "../../public/assets/ChatGPT Image Aug 11, 2026, 06_46_31 PM.png";
import Image from "next/image";
import Link from "next/link";

interface Props {}

const About: React.FC<Props> = () => {
  return (
    <div
      className="
        w-full
        px-30
        flex
        items-center
        justify-between

        max-lg:flex-col
        max-lg:items-center
        max-lg:justify-center
        max-lg:gap-10
        max-lg:px-5
      "
    >
      {/* Content */}
      <div
        className="
          flex
          flex-col
          items-start
          gap-4

          max-lg:w-full
          max-lg:items-center
          max-lg:text-center
        "
      >
        <p
          className="
            text-4xl
            text-white
            cursor-pointer
            font-bold

            max-lg:text-3xl
          "
        >
          Abdelruhman Ahmed
        </p>

        <p
          className="
            text-lg
            text-[#ff4500]
            font-semibold

            max-lg:text-base
          "
        >
          Full Stack & 3D Web Developer
        </p>

        <Link
        href="https://wa.me/+0201070889446"
        >
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
        </Link>
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

          max-lg:w-[220px]
          max-lg:h-[290px]
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