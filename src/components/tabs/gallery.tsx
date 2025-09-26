import Image, { StaticImageData } from 'next/image';
import React from 'react';

type GalleryProps = {
  images: { src: string | StaticImageData; alt: string }[];
  aosDuration?: string;
  aosDelay?: string;
};
export default function Gallery({
  images,
  aosDuration = '1200',
  aosDelay = '',
}: GalleryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div
          data-aos="fade-right"
          data-aos-duration={aosDuration}
          data-aos-delay={aosDelay}
          key={index}
          className="bg-top gallery-link"
        >
          <Image
            src={image.src}
            alt={image.alt}
            className="object-cover h-[200px] max-h-[300] max-w-[500px]"
            width={500}
            height={300}
          />
        </div>
      ))}
    </div>
  );
}
