'use client';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Intro from './common/intro';

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [intro, setIntro] = useState(false);
  return (
    <div className="flex relative h-full justify-between gap-x-3">
      {/* left most side */}
      <div
        className={`w-64 h-screen left-0 lg:rounded-xl -top-10 lg:top-0 lg:left-0 lg:h-full overflow-hidden bg-deep-night-black shadow-2xl z-50 lg:flex flex-col  lg:relative ${
          intro ? 'flex absolute' : 'hidden'
        }`}
      >
        <Intro isOpen={intro} setIsOpen={setIntro} />
      </div>
      {/* overlay */}
      {intro && (
        <div
          onClick={(e) => setIntro(false)}
          className="fixed top-0 left-0  w-full h-full bg-black/50 backdrop-blur-[2px] z-40"
        ></div>
      )}

      {/* middle of screen */}
      {/* <div className='w-full h-auto lg:w-9/12 shadow-2xl bg-deep-night-black relative overflow-auto overflow-x-hidden no-scrollbar'>{children}</div> */}

      {/* right side */}
      {/* right side */}
      <div
        className={`hidden lg:block absolute lg:w-20 lg:relative bg-deep-night-black shadow-2xl rounded-xl overflow-hidden`}
      >
        <div
          onClick={(e) => setIsOpen(!isOpen)}
          className="bg-midnight-black text-green hidden lg:flex items-center h-16 justify-center text-2xl "
        >
          <span className="icon border-2 border-green p-2 rounded-xl">
            {' '}
            <FaBars />
          </span>
        </div>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 flex items-center justify-center text-center text-xl text-gray-600 font-extrabold tracking-widest">
          NavBar
        </span>
      </div>
      {/* {<Nav isOpen={isOpen} setIsOpen={setIsOpen} />} */}
    </div>
  );
}
