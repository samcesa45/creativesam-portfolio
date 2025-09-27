import { cn } from '@/lib/utils';
import React from 'react';

export default function CardLayout({
  children,
  className = 'h-full w-full',
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        className,
        'boxShadow hover:transition-all duration-200! hover:scale-[1.01] ease-linear rounded-xl',
      )}
    >
      {children}
    </div>
  );
}
