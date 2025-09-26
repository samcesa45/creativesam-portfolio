import Navbar from '@/components/navbar';
import About from './about/page';
import Hero from '@/components/hero';
import Experience from '@/components/experience';
import Works from '@/components/works';
import Feedbacks from '@/components/feedbacks';
import Contacts from '@/components/contacts/Index';
import MyTabs from '@/components/tabs';
import StarsCanvas from '@/components/canvas/star';
import SpaceScene from '@/components/canvas/star';

export default function Home() {
  return (
    // <main className="relative  bg-[rgb(252,252,252)] text-black dark:bg-primary">
    <main className="relative">
      <div className="bg-cover bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Works />
      <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
        <Feedbacks />
        <MyTabs />
      </div>
      <div className="relative z-0">
        <Contacts />
        {/* <StarsCanvas /> */}
        {/* <SpaceScene/> */}
      </div>
    </main>
  );
}
