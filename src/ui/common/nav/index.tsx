import React from 'react';
import DrawerLayout from '../drawer-layout';
import { Props } from '@/constants';
import { ImCross, ImHome } from 'react-icons/im';
import NavItem from './nav-item';
import { FaHandshake } from 'react-icons/fa';
import { HiIdentification } from 'react-icons/hi';

export default function Nav({ isOpen, setIsOpen }: Props) {
  return (
    <DrawerLayout isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="absolute z-50 flex flex-col justify-center lg:inset-y-0 -right-0 lg:right-0 w-64 h-screen md:rounded-xl md:overflow-hidden lg:mt-3 lg:mr-3 lg:h-[96%] bg-deep-night-black shadow-2xl">
        <div
          role="button"
          onClick={() => setIsOpen(false)}
          className="flex text-lightgray absolute top-0 w-full items-center justify-start pl-6 text-sm h-10 bg-evening-black"
        >
          <ImCross className="cursor-pointer" />
        </div>
        <div className="flex flex-col gap-y-2 px-6 w-full transition">
          <NavItem
            setIsOpen={setIsOpen}
            href="/"
            icon={<ImHome />}
            text="Home"
          />
          <NavItem
            setIsOpen={setIsOpen}
            href="/contact"
            icon={<FaHandshake />}
            text="Contact"
          />
          <NavItem
            setIsOpen={setIsOpen}
            href="/background"
            icon={<HiIdentification />}
            text="Background"
          />
          <NavItem
            setIsOpen={setIsOpen}
            href="/portfolio"
            icon={<HiIdentification />}
            text="Portfolio"
          />
        </div>
      </div>
    </DrawerLayout>
  );
}
