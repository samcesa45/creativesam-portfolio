import Footer from '@/ui/footer';
import Banner from '@/ui/home/banner';
import Expertise from '@/ui/home/expertise';
import Recommendations from '@/ui/home/recommendations/recommendations';
import React from 'react';

export default function HomePage() {
  return (
    <main className="Home-Page -z-10">
      <Banner />
      <Expertise />
      <Recommendations/>
      <Footer />
    </main>
  );
}
