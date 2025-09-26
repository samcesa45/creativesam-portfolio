import { cn } from '@/lib/utils';
import React from 'react';
type Props = {
  title: string;
  percent: string;
  bgColor: string;
};
export default function LinearBar({ title, percent, bgColor }: Props) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-xs text-gray-400">{title}</span>
        <span className="text-xs text-gray-400">{percent}</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700 ">
        <div
          className={cn(bgColor, 'w-16 h-2 rounded-full ')}
          style={{ width: `${percent}` }}
        ></div>
      </div>
    </div>
  );
}
