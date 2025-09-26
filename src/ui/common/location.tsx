import { DETAILS } from '@/constants';
import { getObjectKeys } from '@/lib/utils';
import React from 'react';

export default function Location() {
  const keys = getObjectKeys(DETAILS);
  return (
    <div className="flex flex-col space-y-1 pt-6">
      {keys.map((key, index) => (
        <div key={index} className="flex items-center justify-between">
          <span className="text-snow text-xs font-bold">{key}</span>
          <span className="text-gray-600 text-xs">
            {DETAILS[key as keyof typeof DETAILS]}
          </span>
        </div>
      ))}
    </div>
  );
}
