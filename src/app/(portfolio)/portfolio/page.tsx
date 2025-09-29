import BannerLayout from '@/ui/common/banner-layout';
import Footer from '@/ui/footer';
import Portfolio from '@/ui/porfolio/portfolio';
import React from 'react';

export default function PortFolioPage() {
  return (
    <BannerLayout>
      <Portfolio />
      <Footer />
    </BannerLayout>
  );
}
