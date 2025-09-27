import Link from 'next/link';
import React from 'react';
import { AiFillCopyrightCircle } from 'react-icons/ai';
import { MdMail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer id="intro" className="mt-4 mb-10 lg:mb-0">
      <div className="flex h-10 items-center justify-between text-xs font-normal text-lightgray py-4 px-2 md:px-4 w-full bg-midnight-black">
        <div className="flex items-center">
          <div className="mr-1 text-base">
            <AiFillCopyrightCircle />
          </div>
          <span>{new Date().getFullYear()} All Rights Reserved</span>
        </div>
        <div className="flex items-center">
          <Link href="https://www.fiverr.com/samcvesa45" target="_blank">
            Made with ❤️ by <span className="font-bold">Sam</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center">
          <div className="mr-1 text-base">
            <MdMail />
          </div>
          <Link href="mailto:sameshiet45@gmail.com">sameshiet45@gmail.com</Link>
        </div>
      </div>
    </footer>
  );
}
