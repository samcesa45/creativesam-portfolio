import Backgrounds from '@/ui/background/backgrounds';
import BannerLayout from '@/ui/common/banner-layout';
import Footer from '@/ui/footer';
import React from 'react';

export default function BackgroundPage() {
  return (
    <BannerLayout>
      <Backgrounds />

      <Footer />
    </BannerLayout>
  );
}
