import { Expertise } from '@/types/api';
import React from 'react';
import CardLayout from '../common/card-layout';

export default function ExpertiseCard({ data }: { data: Expertise }) {
  return (
    <CardLayout>
      <div className="h-full space-y-2 p-8 card_stylings">
        <div className="text-snow">{data.title}</div>
        <div className="text-sm text-lightgray font-normal">{data.desc}</div>
      </div>
    </CardLayout>
  );
}
