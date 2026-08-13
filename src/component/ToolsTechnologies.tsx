import React from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import BrandsCard from "./brands/BrandsCard";

interface Props {}

const ToolsTechnologies: React.FC<Props> = () => {
  return (
    <div className="px-30 max-sm:px-5">
      <Card
        className="
          bg-neutral-800/50
          flex flex-col items-start gap-5
          w-full
          min-h-[200px]
          border border-gray-600
        "
      >
        <CardHeader className="max-sm:p-4">
          <CardTitle className="text-white text-4xl max-sm:text-2xl">
            Tools & Technologies
          </CardTitle>

          <div className="w-30 h-1 rounded-full bg-[#ff4500]" />
        </CardHeader>

        <BrandsCard />

        <CardFooter
          className="
            w-full
            mt-2
            text-gray-500
            flex items-center justify-center
            text-center

            max-sm:px-4
            max-sm:text-sm
            max-sm:leading-6
          "
        >
          <p>
            "Modern technology transforms ideas into powerful digital
            experiences that make a real impact."
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ToolsTechnologies;