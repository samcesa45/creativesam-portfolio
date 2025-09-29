'use client';
import { usePortfolio } from '@/features/portfolio/api/get';
import React from 'react';
import PortfolioCard from './portfolio-card';
import ImageParagraphSkeleton from '../common/imageparagraph-skeleton';

export default function Portfolio() {
  const portfolioQuery = usePortfolio();
  const portfolios = portfolioQuery?.data;
  return (
    <div className="grid items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">
      {!portfolioQuery?.isLoading
        ? [1, 2, 3].map((_, index) => (
            <ImageParagraphSkeleton
              key={index}
              className="w-full object-cover"
            />
          ))
        : portfolios?.map((data) => (
            <PortfolioCard key={data.id} data={data} />
          ))}
    </div>
  );
}
