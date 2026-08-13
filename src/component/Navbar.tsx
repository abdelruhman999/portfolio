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

        max-sm:flex-col
        max-sm:gap-4
        max-sm:px-5
        max-sm:py-4
      "
    >
      {/* Logo */}
      <Link
        href="/"
        className="
          text-2xl
          cursor-pointer
          font-bold
          max-sm:text-xl
          text-white
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

          max-sm:w-full
          max-sm:justify-center
          max-sm:gap-5
          max-sm:text-sm
          max-sm:flex-wrap
        "
      >
        {elementNavbar.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className="hover:text-[#ff4500] transition-colors duration-200"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;