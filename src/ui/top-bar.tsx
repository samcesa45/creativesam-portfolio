'use client';
import { useLayout } from '@/context/layout-provider';
import React from 'react';
import { FaBars, FaMousePointer } from 'react-icons/fa';
import { SlOptionsVertical } from 'react-icons/sl';

export default function TopBar() {
  const {toggleIntro,toggleOpen} = useLayout()
  return (
    <div className="lg:hidden">
      <div className=" bg-deep-night-black text-lightgray w-full h-10 flex items-center justify-between px-2 lg:hidden relative">
        {/* left icon */}
        <div
          className="icon flex items-center gap-x-2"
          onClick={toggleIntro}
        >
          <span className="icon border-2 text-green g p-1 text-sm rounded-lg">
            <SlOptionsVertical />
          </span>
          <div className="text-snow absolute -right-1 -bottom-1">
            <FaMousePointer />
          </div>
        </div>
        {/* left icon */}
        {/* right icon */}
        <div
          className="icon flex items-center gap-x-2"
          onClick={toggleOpen}
        >
          <span className="icon border-2 text-green border-green p-1 text-sm rounded-lg">
            {' '}
            <FaBars />
          </span>
        </div>
        {/* right icon */}
      </div>
    </div>
  );
}
