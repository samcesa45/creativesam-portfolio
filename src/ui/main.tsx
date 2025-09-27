'use client';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import Intro from './common/intro';
import Nav from './common/nav';
import { cn } from '@/lib/utils';
import { useLayout } from '@/context/layout-provider';

export default function Main({ children }: { children: React.ReactNode }) {
  const { intro, isOpen, toggleIntro, toggleOpen } = useLayout();

  return (
    <div className="flex relative h-full justify-between gap-x-3">
      {/* left most side */}
      <div
        className={cn(
          'w-64 h-screen left-0 lg:rounded-xl -top-10 lg:top-0 lg:left-0 lg:h-full overflow-hidden bg-deep-night-black shadow-2xl z-50 lg:flex flex-col  lg:relative ',
          intro ? 'flex absolute' : 'hidden',
        )}
      >
        <Intro isOpen={intro} setIsOpen={toggleIntro} />
      </div>
      {/* overlay */}
      {intro && (
        <div
          onClick={toggleIntro}
          className="fixed top-0 left-0  w-full h-full bg-black/50 backdrop-blur-[2px] z-40"
        />
      )}
      {/* overlay */}

      {/* middle of screen */}
      <div className="w-full h-auto lg:w-9/12 shadow-2xl bg-deep-night-black relative overflow-auto overflow-x-hidden no-scrollbar">
        {children}
      </div>
      {/* middle of screen */}

      {/* right side */}
      <div
        className={`hidden lg:block absolute lg:w-20 lg:relative bg-deep-night-black shadow-2xl rounded-xl overflow-hidden`}
      >
        <div
          role="button"
          onClick={toggleOpen}
          className="bg-midnight-black text-green hidden lg:flex items-center h-16 justify-center text-2xl "
        >
          <span className="icon cursor-pointer border-2 border-green p-2 rounded-xl">
            {' '}
            <FaBars />
          </span>
        </div>
        <span className="absolute flex items-center justify-center text-xl font-extrabold tracking-widest text-center text-gray-600 rotate-90 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          NavBar
        </span>
      </div>
      {<Nav isOpen={isOpen} setIsOpen={toggleOpen} />}
    </div>
  );
}
