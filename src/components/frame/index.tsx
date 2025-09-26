'use client';
import Image from 'next/image';
import React from 'react';

type Props = {};

const Photo = ({ photo }: any) => {
  return (
    <div>
      <Image
        alt={photo.name}
        src={photo.imageSrc}
        width={600}
        height={600}
        className="w-full aspect-square col-span-2"
      />
      <div className="bg-white p-4 px-6">
        <h3>{photo.name}</h3>
        <p>taken by{photo.username}</p>
      </div>
    </div>
  );
};

export default Photo;
