import Link from 'next/link';
import React from 'react';

export default function Download({ icon }: { icon: React.ReactNode }) {
  return (
    <Link
      href=""
      target="_blank"
      className=" pb-14 pt-4 flex text-lightgray items-center gap-x-4"
    >
      <span className="text-snow">Download</span>
      <span>{icon}</span>
    </Link>
  );
}
