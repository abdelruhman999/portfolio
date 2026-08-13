import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import { projects } from "@/constants";
import Link from "next/link";
import { Badge } from "./ui/badge";

interface Props {}

const MyProjects: React.FC<Props> = () => {
  return (
    <div className="px-30 max-lg:px-5">
      <Card className="border-gray-500 bg-neutral-800/50 flex flex-col items-start">

        {/* Header */}
        <CardHeader className="max-lg:p-4">
          <CardTitle className="text-4xl text-white max-lg:text-3xl">
            My Projects
          </CardTitle>

          <CardDescription
            className="
              text-gray-500
              text-md

              max-lg:text-sm
              max-lg:leading-6
            "
          >
            A collection of projects where I turn ideas into modern, scalable,
            and engaging digital experiences.
          </CardDescription>
        </CardHeader>

        {/* Projects */}
        <CardContent
          className="
            w-full
            grid
            grid-cols-2
            xl:grid-cols-3
            gap-5
            mt-5

            max-lg:grid-cols-1
            max-lg:px-4
          "
        >
          {projects.map((el) => {
            return (
              <Card
                key={el.id}
                className="
                  relative
                  overflow-hidden
                  mx-auto
                  w-full
                  max-w-sm
                  pt-0
                  border-gray-500
                  text-white
                "
              >
                {/* Image */}
                <Image
                  src={el.img}
                  alt={el.title}
                  width={1345}
                  height={645}
                  className="
                    relative
                    z-20
                    w-full
                    object-contain
                    transition-transform
                    duration-300
                    hover:scale-105
                  "
                />

                {/* Info */}
                <CardHeader>
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle className="max-lg:text-lg">
                      {el.title}
                    </CardTitle>

                    <CardAction>
                      <Badge
                        className={
                          el.type === "Available"
                            ? "bg-[#ff4500]"
                            : "bg-gray-500"
                        }
                      >
                        {el.type}
                      </Badge>
                    </CardAction>
                  </div>

                  <CardDescription className="mt-2 max-lg:text-sm">
                    {el.description}
                  </CardDescription>
                </CardHeader>

                {/* Button */}
                <CardFooter>
                  {el.type === "Available" && (
                    <Link
                      href={el.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button
                        className="
                          w-full
                          bg-[#ff4500]
                          hover:bg-gray-500
                          duration-200
                          cursor-pointer
                        "
                      >
                        View Project
                      </Button>
                    </Link>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};

export default MyProjects;