import React from "react";
import { elementNavbar } from "../../public/assets/assets";
import Link from "next/link";

interface Props {}

const Navbar: React.FC<Props> = () => {
  return (
    <div
      className="
        w-full
        flex
        justify-between
        items-center
        px-30
        py-5
        border-b
        border-b-gray-600

        max-lg:flex-col
        max-lg:gap-4
        max-lg:px-5
        max-lg:py-4
      "
    >
      {/* Logo */}
      <Link
        href="/"
        className="
          text-2xl
          cursor-pointer
          font-bold
          text-white
          max-lg:text-xl
        "
      >
        Abdelruhman{" "}
        <span className="text-[#ff4500]">
          Ahmed
        </span>
      </Link>

      {/* Navigation */}
      <div
        className="
          flex
          items-center
          text-gray-500
          font-semibold
          gap-4
          text-md

          max-lg:w-full
          max-lg:justify-center
          max-lg:gap-5
          max-lg:text-sm
          max-lg:flex-wrap
        "
      >
        {elementNavbar.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className="
              hover:text-[#ff4500]
              transition-colors
              duration-200
            "
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;