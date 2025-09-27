import { Expertise } from '@/types/api';
import React from 'react';
import CardLayout from '../common/card-layout';

export default function ExpertiseCard({ data }: { data: Expertise }) {
  return (
    <CardLayout>
      <div className="h-full space-y-2 p-8 card_stylings transition bg-evening-black/95 rounded-xl hover:bg-gradient-to-br hover:from-green/10 hover:to-indigo-600/5">
        <div className="text-snow">{data.title}</div>
        <div className="text-sm text-lightgray font-normal">{data.desc}</div>
      </div>
    </CardLayout>
  );
}
