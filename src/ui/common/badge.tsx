import React from 'react';

export default function Badge({ title }: { title: string }) {
  return (
    <span className="py-2 px-3 text-xs text-snow  bg-evening-black rounded-full">
      {title}
    </span>
  );
}
