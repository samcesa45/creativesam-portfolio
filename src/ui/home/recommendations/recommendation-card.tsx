import { Recommendations } from '@/types/api'
import CardLayout from '@/ui/common/card-layout'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function RecommendationCard({data}:{data:Recommendations}) {
  return (
    <CardLayout>
        <div className='p-8 h-full relative card_stylings transition bg-evening-black/95 rounded-xl hover:bg-gradient-to-br hover:from-green/10 hover:to-indigo-600/5'>
          <Image width={64} height={64} src={data?.image} className='absolute z-10 right-10 -top-5 border-green w-16 h-16 border-[3px] rounded-full m-0' alt={`${data?.name} Image`}/>
          <div className='text-snow underline italic'>
            <Link href={data?.linkednURL} target='_blank'></Link>
          </div>
          <div className='text-xs text-lightgray italic mt-1'>{data?.designation}</div>
          <div className='text-sm mt-2 text-lightgray font-normal'>{data?.view}</div>
        </div>
    </CardLayout>
  )
}
