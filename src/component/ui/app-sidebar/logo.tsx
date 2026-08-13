'use client'
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "../../../media/logo_updated.png";

interface LogoProps {
  isCollapsed: boolean;
}

export function Logo({ isCollapsed }: LogoProps) {
  return (
    <div className="flex h-16 items-center justify-center border-b p-4">
      {isCollapsed ? (
        <Image src={logo} alt="Logo" width={32} height={32} />
      ) : (
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Logo" width={32} height={32} />
          <h2 className="text-xl font-semibold">Al-Alamia X</h2>
        </div>
      )}
    </div>
  );
}