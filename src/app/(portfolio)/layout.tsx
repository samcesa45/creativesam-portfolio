import TopBar from '@/ui/top-bar';
import React from 'react';
import SideBar from '@/ui/side-bar';

export default function PortfolioLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-screen flex flex-col select-none lg:p-[0.8rem] font-circular">
      <TopBar />
      <main className="w-full h-auto lg:w-9/12 shadow-2xl bg-DeepNightBlack relative overflow-auto overflow-x-hidden no-scrollbar">
        {children}
      </main>
      <SideBar />
    </div>
  );
}
