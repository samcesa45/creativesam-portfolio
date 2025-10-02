import React from 'react';
import CardLayout from '../common/card-layout';
import { Exp } from '@/types/api';
import Link from 'next/link';

export default function ExpCard({ data }: { data: Exp }) {
  return (
    <CardLayout>
      <div className="card_stylings transition px-8 py-10">
        <div className="flex-initial text-[17px] text-snow font-medium">
          {data?.title}
        </div>
        <div className="text-sm text-lightgray font-normal italic mt-1">
          {data?.role}
        </div>
        <div className="text-lightgray text-xs opacity-50 font-normal italic">
          <Link href={data?.url} target="_blank">
            {data?.url}
          </Link>
        </div>
        <ul>
          {data?.desc?.map((item,index)=>(
            <li className='list-none text-lightgray text-sm font-normal mt-4 text-justify' key={`desc-${index}`}>{item}</li>
          ))}
        </ul>
        <div className="flex justify-between text-lightgray bg-deep-night-black w-full h-auto text-xs rounded-full py-3 px-6 mt-4 font-normal opacity-50">
          <div>{data?.year}</div>
          <div>{data?.location}</div>
        </div>
      </div>
    </CardLayout>
  );
}
