'use client';
import { useBackground } from '@/features/background/api/get';
import React from 'react';
import ParagraphSkeleton from '../common/paragraph-skeleton';
import EduCard from './edu-card';
import ExpCard from './exp-card';

export default function Backgrounds() {
  const bgQuery = useBackground();
  const backgrounds = bgQuery?.data;
  const edu = backgrounds?.find((b) => b.eduCards)?.eduCards ?? [];
  const exp = backgrounds?.find((b) => b.expCards)?.expCards ?? [];

  return (
    <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-green px-4 pb-2 pt-10">
      <div className="flex flex-col gap-y-4 order-2 md:order-1 md:pr-12">
        <div className="mt-10 md:mt-0 text-xl text-snow font-semibold">
          Education
        </div>
        {bgQuery.isLoading
          ? [1, 2, 3].map((_, index) => (
              <ParagraphSkeleton
                key={index}
                className="p-8 w-full h-full relative"
              />
            ))
          : edu?.map((data) => <EduCard key={data.id} data={data} />)}
      </div>
      <div className="order-1 md:order-2">
        <div className="flex flex-col gap-y-4 md:pl-12">
          <div className="md:pt-0 pt-4 text-xl text-snow font-bold">
            Experience
          </div>
          {bgQuery.isLoading
            ? [1, 2, 3].map((_, index) => (
                <ParagraphSkeleton
                  key={index}
                  className="p-8 w-full h-full relative"
                />
              ))
            : exp?.map((data) => <ExpCard key={data.id} data={data} />)}
        </div>
      </div>
    </div>
  );
}
