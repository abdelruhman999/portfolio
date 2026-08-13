import { Badge } from "@/component/ui/badge";
import Image from "next/image";
import logo from "../../public/assets/ChatGPT Image Aug 11, 2026, 06_46_31 PM.png";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="
        relative
        flex
        h-screen
        items-center
        justify-center

        max-lg:justify-between
        max-lg:flex-col
        max-lg:overflow-hidden
        max-lg:h-screen

        max-sm:h-lvh
      "
    >
      {/* Content */}
      <div
        className="
          w-[50%]
          flex
          flex-col
          items-start
          gap-6
          pl-[5%]

          max-lg:w-full
          max-lg:h-[30%]
          max-lg:gap-2
          max-lg:items-center
          max-lg:justify-center
          max-lg:pl-0

          max-sm:h-[30%]
        "
      >
        <div className="max-lg:flex max-lg:flex-col max-lg:items-center">
          <div className="flex flex-col items-start gap-5 max-lg:items-center">
            <Badge className="bg-[#ff4500]">
              2024
            </Badge>

            <p
              className="
                text-5xl
                text-white
                text-nowrap
                font-bold

                max-lg:text-2xl
              "
            >
              Abdelruhman{" "}
              <span className="text-[#ff4500]">
                Ahmed
              </span>
            </p>
          </div>

          <div className="dancing-script-uniquifier">
            Portfolio
          </div>
        </div>

        <p className="text-gray-600 font-semibold text-xl">
          Hope You Like It
        </p>
      </div>

      {/* Image */}
      <div
        className="
          flex
          h-full
          w-[50%]
          items-end
          justify-center

          max-lg:w-full
          max-lg:h-[70%]
        "
      >
        <div
          className="
            size-256
            flex
            h-[90%]
            items-end

            max-lg:h-[90%]
            max-lg:w-full
          "
        >
          <Image
            src={logo}
            alt="Abdelruhman Ahmed"
            width={1024}
            height={1536}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Overlay + Button */}
      <div
        className="
          absolute
          inset-0
          flex
          items-end
          justify-center
          bg-black/30
          pb-5

          max-lg:pb-[20%]
          max-lg:z-20
        "
      >
        <Link
          href="/portofolio"
          className="
            flex
            size-14
            cursor-pointer
            items-center
            justify-center
            rounded-full
            border
            border-[#ff4500]
            bg-gray-800
            animate-move-x
            shadow-[0_0_10px_#ff4500,0_0_25px_#ff4500,0_0_45px_#ff450080]
          "
        >
          <FaArrowRight className="text-[#ff4500]" />
        </Link>
      </div>
    </div>
  );
}