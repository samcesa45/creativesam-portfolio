import { TECH_STACK } from '@/constants';
import React from 'react';
import Badge from './badge';

export default function Tools() {
  return (
    <div className="flex flex-col space-y-1 pt-6">
      <div className="flex flex-col gap-y-4">
        <span className="text-snow text-xs font-bold">Tools</span>
        <div className="flex flex-wrap gap-2">
          {TECH_STACK.map((item, index) => (
            <Badge key={index} title={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
