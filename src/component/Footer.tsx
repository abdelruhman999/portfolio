import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import IconsLink from "./follow_us/IconsLink";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <Card
      className="
        bg-black
        w-full
        border-0
        rounded-none
        flex flex-col
        items-center
        justify-center
        text-center
        py-6
        max-sm:px-4
      "
    >
      <CardHeader className="max-sm:p-4">
        <CardTitle className="text-2xl max-sm:text-xl">
          Let's Turn Ideas Into Digital Experiences
        </CardTitle>
      </CardHeader>

      <CardContent className="max-sm:px-2">
        <p className="text-gray-500 text-base max-sm:text-sm max-sm:leading-6">
          Available for collaborations, freelance projects, and exciting
          digital experiences.
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-center gap-2">
        <IconsLink />
      </CardFooter>
    </Card>
  );
};

export default Footer;