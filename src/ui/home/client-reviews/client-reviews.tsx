'use client';
import { useReviews } from '@/features/reviews/api/get';
import ParagraphSkeleton from '@/ui/common/paragraph-skeleton';
import React from 'react';
import ReviewCard from './review-card';

export default function ClientReviews() {
  const reviewsQuery = useReviews();
  const reviews = reviewsQuery?.data;

  return (
    <>
      <div className="px-2 md:px-8 py-4 text-lg font-bold text-snow">
        Clients Reviews
      </div>
      <div className="overflow-x-auto w-full grid justify-items-center grid-flow-col gap-4 px-2 md:px-8 pt-2 pb-4">
        {reviewsQuery?.isLoading
          ? [1, 2, 3, 4, 5].map((_, index) => (
              <ParagraphSkeleton
                key={index}
                className="w-80 md:w-96 h-full p-4 md:p-8"
              />
            ))
          : reviews?.map((data, index) => (
              <ReviewCard key={index} data={data} />
            ))}
      </div>
    </>
  );
}
