'use client';
import React, { useState } from 'react';
import Gallery from './gallery';
import { tabData } from '@/constants';
import { StaticImageData } from 'next/image';
type GalleryImage = {
  src: string | StaticImageData;
  alt: string;
};

export type TabItem = {
  id: number;
  title: string;
  images: GalleryImage[];
  boxClass?: string;
};

const MyTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const isAllTab = activeTab === 0;

  //Get all images from tabs except 'All
  const mergedImages = tabData
    .filter((tab) => tab.id !== 0)
    .flatMap((tab) => tab.images);
  const currentTabData = tabData.find((tab) => tab.id === activeTab);
  return (
    <div>
      {/* Tab Buttons */}
      <div className="flex mt-8 mb-20">
        {tabData.map((tab) => (
          <button
            key={tab.id}
            className={`mx-4 py-2 text-[#222222] dark:text-white ${
              activeTab === tab.id
                ? 'border-b-2 w-max border-b-[#915EFF]  '
                : 'border-b-2 border-transparent'
            }`}
            style={{ transition: 'all 0.55s ease' }}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      {/* Tab Buttons */}
      {/* Tab Content */}
      {currentTabData && (
        <div
          className={`${currentTabData.boxClass || ''}`}
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Gallery
            images={isAllTab ? mergedImages : currentTabData?.images || []}
          />
        </div>
      )}
      {/* Tab Content */}
    </div>
  );
};

export default MyTabs;
