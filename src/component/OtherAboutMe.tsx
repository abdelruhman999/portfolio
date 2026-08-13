import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { elementAboutMe } from "../../public/assets/assets";

interface Props {}

const OtherAboutMe: React.FC<Props> = () => {
  return (
    <div
      className="
        px-30
        gap-5
        flex
        flex-col
        items-start

        max-lg:px-5
      "
    >
      {/* Title */}
      <div className="flex flex-col gap-1">
        <p
          className="
            font-bold
            text-4xl
            text-white

            max-lg:text-3xl
          "
        >
          About Me
        </p>

        <p className="bg-[#ff4500] w-[60px] h-[2px] rounded-full" />
      </div>

      {/* Description */}
      <div
        className="
          text-gray-500
          font-semibold
          text-md
          text-wrap
          w-[60%]

          max-lg:w-full
          max-lg:text-sm
          max-lg:leading-6
        "
      >
        Full Stack Developer with experience building modern web applications
        and digital experiences. Specialized in Next.js, NestJS, 3D
        development, and scalable solutions that turn ideas into powerful
        products.
      </div>

      {/* Cards */}
      <div
        className="
          w-full
          flex
          items-center
          justify-center
          gap-5

          max-lg:flex-col
          max-lg:gap-4
        "
      >
        {elementAboutMe.map((el) => {
          return (
            <Card
              key={el.id}
              className="
                bg-neutral-800/50
                w-[38%]
                min-h-[200px]
                border
                border-gray-600

                max-lg:w-full
                max-lg:min-h-[180px]
              "
            >
              <CardHeader>
                <CardTitle
                  className="
                    text-[#ff4500]

                    max-lg:text-xl
                  "
                >
                  {el.header}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p
                  className="
                    text-white

                    max-lg:text-sm
                  "
                >
                  {el.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default OtherAboutMe;