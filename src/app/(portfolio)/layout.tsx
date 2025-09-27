'use client';
import TopBar from '@/ui/top-bar';
import React from 'react';
import { LayoutProvider } from '@/context/layout-provider';
import Main from '@/ui/main';

export default function PortfolioLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <LayoutProvider>
      <div className="h-screen flex flex-col select-none lg:p-[0.8rem] font-circular-normal">
        <TopBar />
        <Main>{children}</Main>
      </div>
    </LayoutProvider>
  );
}
