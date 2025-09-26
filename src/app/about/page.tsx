'use client';
import SectionWrapper from '@/components/section_wrapper/SectionWrapper';
import { services } from '@/constants';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

type Props = {
  index: number;
  title: string;
  icon: string;
};
const ServiceCard = ({ ...service }) => (
  <Tilt
    scale={1}
    // options={{ max: 45, scale: 1, speed: 450 }}
    transitionSpeed={450}
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    className="md:w-[250px] w-full"
  >
    <div
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay=""
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <Image
          src={service.icon}
          alt="web-development"
          className="object-contain w-16 h-16"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {service.title}
        </h3>
      </div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div data-aos="fade-down" data-aos-duration="1200" data-aos-delay="">
        <p className="sm:text-[18px] text-[14px] text-[#222222] dark:text-secondary uppercase tracking-wider">
          Introduction
        </p>
        <h2 className="text-[#222222] dark:text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Overview.
        </h2>
      </div>
      <p
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay=""
        className="mt-4 text-[#222222] dark:text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {`I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Next js, React native, Node.js, and
        , wordpress and Laravel. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!`}
      </p>
      <div className="grid grid-cols-2 md:flex md:flex-wrap gap-5 md:gap-10 mt-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
