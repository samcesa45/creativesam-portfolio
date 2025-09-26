'use client';
import { experiences } from '@/constants';
import Image from 'next/image';
import 'react-vertical-timeline-component/style.min.css';
import {
  VerticalTimelineElement,
  VerticalTimeline,
} from 'react-vertical-timeline-component';
import SectionWrapper from '../section_wrapper/SectionWrapper';
import { useContext } from 'react';
import { ThemeContext } from '@/context';
import { useTheme } from 'next-themes';

const ExperienceCard = ({ ...experience }) => {
  const { theme } = useTheme();
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: `${theme === 'dark' ? '#fff' : '#222222'}`,
      }}
      contentArrowStyle={{
        borderRight: `${
          theme === 'dark' ? '7px solid #232631' : '7px solid #222222'
        }`,
      }}
      date={experience.date}
      iconStyle={{
        background: `${theme === 'dark' ? experience.iconBg : '#222222'}`,
      }}
      icon={
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 ml-5 space-y-2 list-disc">
        {experience.points.map((point: string, index: number) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
const Experience = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="">
        <p className="sm:text-[18px] text-[14px] text-[#222222] dark:text-secondary uppercase tracking-wider text-center">
          What I have done so far
        </p>
        <h2 className="text-[#222222] dark:text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          Work Experience.
        </h2>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay=""
        className="flex flex-col mt-20"
      >
        <VerticalTimeline
          lineColor={`${theme === 'dark' ? '#ffffff' : '#1D1836'}`}
        >
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
