import { Props } from '@/constants';
import { cn } from '@/lib/utils';
import React from 'react';

export default function DrawerLayout({ isOpen, setIsOpen, children }: Props) {
  return (
    <main
      className={cn(
        'fixed overflow-hidden z-[50000] bg-deep-night-black/10 backdrop-blur-sm inset-0 transform ease-in',
        isOpen
          ? 'transition-opacity opacity-100 duration-10 translate-x-0'
          : 'transition-all delay-200 opacity-0 translate-x-full',
      )}
    >
      <section
        className={cn(
          'w-screen h-screen max-w-[260px] right-0 absolute shadow-xl delay-400 duration-500 ease-in-out transition-all transform',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <article className="relative h-screen">{children}</article>
      </section>
      <section
        onClick={() => setIsOpen(false)}
        className="w-screen h-full cursor-pointer"
      ></section>
    </main>
  );
}
