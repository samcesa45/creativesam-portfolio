'use client';
import { useExpertise } from '@/features/expertise/api/get';
import React from 'react';
import ParagraphSkeleton from '../common/paragraph-skeleton';
import ExpertiseCard from './expertise-card';

export default function Expertise() {
  const expertiseQuery = useExpertise();
  const expertise = expertiseQuery?.data;
  return (
    <>
      <div className="px-2 md:px-8 py-4 text-lg font-bold text-snow">
        My Expertise
      </div>
      <div className="grid items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8">
        {expertiseQuery.isLoading
          ? [1, 2, 3, 4, 5, 6].map((_, index) => (
              <ParagraphSkeleton key={index} className="space-y-2 p-8" />
            ))
          : expertise?.map((data, index) => (
              <ExpertiseCard key={index} data={data} />
            ))}
      </div>
    </>
  );
}
