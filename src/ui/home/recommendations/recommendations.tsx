'use client';
import { useRecommendations } from '@/features/recommendations/api/get'
import ParagraphSkeleton from '@/ui/common/paragraph-skeleton'
import React from 'react'
import RecommendationCard from './recommendation-card'

export default function Recommendations() {
    const recommendationQuery = useRecommendations()
    const recommendations = recommendationQuery?.data
  return (
   <>
   <div className='px-2 md:px-8 py-4 text-lg font-bold text-snow'>
    Recommendations
   </div>
   <div className='grid w-full h-full mt-5 grid-flow-row md:grid-cols-2 grid-rows-auto gap-x-4 gap-y-4 px-2 md:px-8 pb-8'>
    {recommendationQuery?.isLoading
    ? [1,2,3,4].map((_,index) => (
        <ParagraphSkeleton key={index} className='p-8 h-full w-full relative'/>
    ))
    : recommendations?.map((data,index) => (
        <RecommendationCard key={index} data={data}/>
    ))
    }
   </div>
   </>
  )
}
