'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { SetStateAction } from 'react';
type NavItemProps = {
  text: string;
  icon: React.ReactNode;
  href: string;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
};
export default function NavItem({ icon, text, href, setIsOpen }: NavItemProps) {
  const pathname = usePathname();
  const className =
    pathname === `${href}`
      ? 'rounded-xl text-deep-night-black! bg-green font-bold tracking-widest'
      : '';
  return (
    <Link
      onClick={() => setIsOpen(false)}
      href={href}
      className={cn(
        className,
        'transition flex items-center px-2 hover:bg-evening-black text-silvergray hover:text-silvergray rounded-xl py-1.5 font-semibold space-x-4 text-base',
      )}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}
