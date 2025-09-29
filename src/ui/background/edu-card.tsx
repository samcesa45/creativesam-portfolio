import React from 'react';
import CardLayout from '../common/card-layout';
import { Edu } from '@/types/api';

export default function EduCard({ data }: { data: Edu }) {
  return (
    <CardLayout className="keepItEmpty">
      <div className="card_stylings transition px-8 py-10">
        <div className="flex justify-between">
          <div className="flex-initial text-[17px] text-snow font-medium">
            {data.title}
          </div>
          <div className="flex justify-items-center justify-center">
            {data.year}
          </div>
        </div>
        <div className="text-xs text-lightgray font-normal italic mt-1">
          {data.degree}
        </div>
        <div className="text-sm text-lightgray font-normal  mt-4">
          {data.detail}
        </div>
      </div>
    </CardLayout>
  );
}
