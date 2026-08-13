'use client';
import React from 'react';
import BrandsCard from './BrandsCard';
import Link from 'next/link';
import { GoArrowUpRight } from "react-icons/go";

interface ComponentName {}

const Brands: React.FC<ComponentName> = () => {

  return (
    <div className="w-full flex flex-col items-center gap-[50px] ">
     
      <p>fwegfwegfqwefggw</p>
      <div className="w-[90%] bg-red-600">
        <BrandsCard />
        {/* <ClientLogosBook /> */}
      </div>

     
    </div>
  );
};

export default Brands;
