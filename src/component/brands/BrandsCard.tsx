"use client";

import React, { useEffect, useRef, useState } from "react";
import BallCanvas from "./Ball";
import { useInView } from "framer-motion";
import { technologies } from "../../constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

interface Props {}

const BrandsCard: React.FC<Props> = () => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });
  const [showBalls, setShowBalls] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShowBalls(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <Carousel
      ref={cardRef}
      className="w-full px-10 max-lg:px-6"
    >
      <CarouselContent className="-ml-1">
        {showBalls &&
          technologies?.map((technology, index) => (
            <CarouselItem
              key={technology.id ?? index}
              className="
                basis-1/6
                pl-1

                max-lg:basis-1/4
                max-sm:basis-1/3
              "
            >
              <div className="flex items-center justify-center gap-0.5">
                <div
                  className="
                    size-[100px]
                    flex flex-col items-center

                    max-lg:size-[80px]
                    max-sm:size-[70px]
                  "
                >
                  <BallCanvas icon={technology.icon} />

                  <p
                    className="
                      text-center
                      text-white
                      text-sm
                      font-semibold

                      max-lg:text-xs
                    "
                  >
                    {technology.name}
                  </p>
                </div>

                {index !== technologies.length - 1 && (
                  <div
                    className="
                      w-10
                      border
                      border-dashed
                      border-[#ff4500]

                      max-lg:w-5
                      max-sm:w-3
                    "
                  />
                )}
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>

      <CarouselPrevious className="border-[#ff4500] max-lg:hidden" />
      <CarouselNext className="border-[#ff4500] max-lg:hidden" />
    </Carousel>
  );
};

export default BrandsCard;