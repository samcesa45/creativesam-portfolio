import { Reviews } from '@/types/api';
import CardLayout from '@/ui/common/card-layout';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

export default function ReviewCard({ data }: { data: Reviews }) {
  return (
    <CardLayout>
      <div className="flex flex-col justify-between card_stylings w-80 md:w-96 h-full p-4 md:p-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <span className="text-sm text-snow font-bold">
              {data?.clientName}
            </span>
            <div className="text-xs text-lightgray flex items-center gap-1 font-light">
              <MdLocationOn />
              <em>{data?.clientLocation}</em>
            </div>
          </div>
          <span className="text-sm text-lightgray font-light">
            {data?.clientSource}
          </span>
        </div>
        <div className="text-sm mt-2 text-lightgray font-normal">
          {data?.clientReview}
        </div>
        <div className="flex gap-2 items-center justify-center bg-midnight-black w-6/12 md:w-5/12 text-xs text-green rounded-full p-2 mt-4">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
    </CardLayout>
  );
}
