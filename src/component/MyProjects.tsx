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
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Image from "next/image";
import { projects } from "@/constants";
import Link from "next/link";

interface Props {}

const MyProjects: React.FC<Props> = () => {
  return (
    <div className="px-30 max-sm:px-5">
      <Card className="border-gray-500 bg-neutral-800/50 flex flex-col items-start">
        
        <CardHeader className="max-sm:p-4">
          <CardTitle className="text-4xl max-sm:text-3xl">
            My Projects
          </CardTitle>

          <CardDescription className="text-gray-500 text-md max-sm:text-sm max-sm:leading-6">
            A collection of projects where I turn ideas into modern, scalable,
            and engaging digital experiences.
          </CardDescription>
        </CardHeader>

        <CardContent
          className="
            w-full
            grid
            grid-cols-2
            lg:grid-cols-3
            gap-5
            mt-5

            max-sm:grid-cols-1
            max-sm:px-4
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
                "
              >
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

                <CardHeader>
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle className="max-sm:text-lg">
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

                  <CardDescription className="mt-2 max-sm:text-sm">
                    {el.description}
                  </CardDescription>
                </CardHeader>

                <CardFooter>
                  {el.type === "Available" && (
                    <Link
                      href={el.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button className="w-full bg-[#ff4500] hover:bg-gray-500 duration-200 cursor-pointer">
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