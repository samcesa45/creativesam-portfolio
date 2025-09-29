import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  herobg,
} from '../../public/assets';
// import hasob from 'assets/hasob.png';
// import ezimo from 'assets/ezimo.png';
// import corenotes from 'assets/corenotes.png';
// import iterum from 'assets/iterum.png';
// import myeverydeal from 'assets/my-everydeal.png';
// import zelfarms from 'assets/zelfarms-img.png';
// import zelfarmsMobile from 'assets/zelfarms.png';
// import DNest from 'assets/dnest-img.png';
// import dlplus from 'assets/dlplus.png';
// import Zeltech from 'assets/zeltech.jpg';
// import MyeverydealLogo from 'assets/myeverydeal-website-logo.webp';
// import shops from 'assets/shops.jpg';
// import tetfund from 'assets/tetfund.png';
// import sanmtos from 'assets/sanmtos.png';
// import itranxit from 'assets/iTranxit.png';
// import itranxit2 from 'assets/iTransxit2.png';
// import stokops from 'assets/stokops.png';
// import stokopsMobile from 'assets/stokops-mobile.png';
// import classPadi from 'assets/class-padi.png';
// import laura from 'assets/laura.png';
// import bpa from 'assets/bpa.png';
// import zeltechnology from 'assets/zeltechnology.png';
import { SetStateAction } from 'react';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'React/Next js Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Wordpress Developer',
    icon: backend,
  },
  {
    title: 'Laravel Developer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'hero',
    icon: herobg,
  },
];

// const experiences = [
//   {
//     title: 'Frontend Engineer',
//     company_name: 'Zeltechnologies',
//     icon: Zeltech,
//     iconBg: '#E6DEDD',
//     date: 'Oct 2024 - september 2025',
//     points: [
//       'Built Zelfarms and DNest web application using React, Zustand and Tanstack query, reducing page load time by 30% and enhancing user retention.',
//       'Developed and maintained 2+ client-facing web applications, enhancing user engagement and satisfaction by 20%.',
//       'Enhanced cross-browser compatibility and SEO, leading to a 15% boost in organic search traffic.',
//       'Implemented responsive designs for multiple platforms, resulting in a 40% increase in mobile traffic.',
//       'Conducted code reviews and mentoring, improving code quality and reducing production bugs by 15%.',
//       'Built Ezimo blog and optimized it for better seo using Next js',
//       'Refactored and optimised StokOps Mobile for better performance thereby increasing mobile traffic by 20%, fixed all recurring bugs.',
//     ],
//   },
//   {
//     title: 'Frontend Engineer',
//     company_name: 'Hasob Integrated Service',
//     icon: hasob,
//     iconBg: '#383E56',
//     date: 'Dec 2021 - Dec 2024',
//     points: [
//       'Developed dashboards, custom web templates for institutions using various libraries such as tailwindcss, bootstrap5 and sass',
//       'Collaborated with designers and product managers to deliver intuitive and visually appealing interfaces.',
//       'Optimized web performance and ensured accessibility compliance, leading to a 20% improvement in user experience metrics.',
//       'Developed and maintained 2 websites templates so that clients can select the one that meets their requirements thereby increasing clients satisfactions',
//       'Led a team of 3 developers to integrate complex UI components, increasing project delivery speed by 20%',
//     ],
//   },
//   {
//     title: 'Frontend Engineer',
//     company_name: 'Myeverydeal',
//     icon: MyeverydealLogo,
//     iconBg: '#383E56',
//     date: 'Jan 2022 - Jan 2023',
//     points: [
//       'Built a dynamic e-commerce platform using React and Rtk query, resulting in a 35% increase in user transactions.',
//       'Integrated third-party APIs for real-time product updates and payments (Paystack), improving operational efficiency.',
//       'Enhanced cross-browser compatibility and SEO, leading to a 15% boost in organic search traffic.',
//       'Collaborated with stakeholders to gather requirements and deliver tailored solutions, achieving a 95% client satisfaction rate.',
//     ],
//   },
// ];

// const testimonials = [
//   {
//     testimonial:
//       'I thought it was impossible to make a website as beautiful as our product, but Sam proved me wrong.',
//     name: 'Sara Lee',
//     designation: 'CFO',
//     company: 'Acme Co',
//     image: 'https://randomuser.me/api/portraits/women/4.jpg',
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Sam does.",
//     name: 'Chris Brown',
//     designation: 'COO',
//     company: 'DEF Corp',
//     image: 'https://randomuser.me/api/portraits/men/5.jpg',
//   },
//   {
//     testimonial:
//       "After Sam optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: 'Lisa Wang',
//     designation: 'CTO',
//     company: '456 Enterprises',
//     image: 'https://randomuser.me/api/portraits/women/6.jpg',
//   },
// ];

// const projects = [
//   {
//     name: 'Laura Windsor Etiquette Academy',
//     description:
//       'Etiquette Academy websites that helps children and adults acquire the skills to navigate modern polite society in a multi-cultural environment ',
//     tags: [
//       {
//         name: 'elementor',
//         color: 'blue-text-gradient',
//       },
//       {
//         name: 'wordpress',
//         color: 'green-text-gradient',
//       },
//     ],
//     image: laura,
//     source_code_link: 'https://laurawindsoretiquett.com/',
//   },
//   {
//     name: 'Bristish Protocol Academy',
//     description:
//       'A Website that provides practical etiquette and diplomacy training for individuals, professionals, and organizations. ',
//     tags: [
//       {
//         name: 'elementor',
//         color: 'blue-text-gradient',
//       },
//       {
//         name: 'wordpress',
//         color: 'green-text-gradient',
//       },
//     ],
//     image: bpa,
//     source_code_link: 'https://thebritishprotocolacademy.com/',
//   },
//   {
//     name: 'Zeltechnologies',
//     description:
//       'A Websites that helps Transform and Elevate Your Business Through Innovative and Personalized Technology Solutions',
//     tags: [
//       {
//         name: 'Nextjs',
//         color: 'blue-text-gradient',
//       },
//       {
//         name: 'framer-motion',
//         color: 'green-text-gradient',
//       },
//     ],
//     image: zeltechnology,
//     source_code_link: 'https://zeltechnologies.com/',
//   },
//   {
//     name: 'Ezimo Town',
//     description:
//       'A simple blog that showcases the rich cultural heritage of ezimo, the people and its blessed natural resources',
//     tags: [
//       {
//         name: 'Next js',
//         color: 'blue-text-gradient',
//       },
//       {
//         name: 'Tanstack query',
//         color: 'green-text-gradient',
//       },
//       {
//         name: 'tailwindcss',
//         color: 'pink-text-gradient',
//       },
//       {
//         name: 'zustand',
//         color: 'orange-text-gradient',
//       },
//     ],
//     image: ezimo,
//     source_code_link: 'https://www.ezimotown.com/',
//   },
//   {
//     name: 'StokOps Mobile',
//     description:
//       'This system helps you manage your inventory, track your suppliers, and optimize your business operations with ease.',
//     tags: [
//       {
//         name: 'React Native',
//         color: 'pink-text-gradient',
//       },
//       {
//         name: 'Tanstack query',
//         color: 'green-text-gradient',
//       },
//       {
//         name: 'zustand',
//         color: 'orange-text-gradient',
//       },
//       {
//         name: 'React Native Paper',
//         color: 'orange-text-gradient',
//       },
//       {
//         name: 'Native wind',
//         color: 'orange-text-gradient',
//       },
//     ],
//     image: stokopsMobile,
//     source_code_link: 'https://apps.apple.com/ng/app/stokops/id6737730220',
//   },
//   {
//     name: 'classPadi Academy',
//     description:
//       'A landing page that helps users understands, enquire and access the main application',
//     tags: [
//       {
//         name: 'laravel',
//         color: 'blue-text-gradient',
//       },
//       {
//         name: 'boostrap 5',
//         color: 'green-text-gradient',
//       },
//     ],
//     image: classPadi,
//     source_code_link: 'https://classpadi.com/',
//   },
//   {
//     name: 'Scola LMS Portal',
//     description:
//       'Scola is an innovative, multi-tenant and comprehensive Learning Management System (LMS) designed to streamline administrative and operational tasks within a school environment.',
//     tags: [
//       {
//         name: 'laravel',
//         color: 'blue-text-gradient',
//       },
//       {
//         name: 'mysql',
//         color: 'green-text-gradient',
//       },
//       {
//         name: 'bootstrap5',
//         color: 'pink-text-gradient',
//       },
//       {
//         name: 'jquery',
//         color: 'orange-text-gradient',
//       },
//     ],
//     image: iterum,
//     source_code_link: 'https://platform.scola.ng/',
//   },
//   {
//     name: 'StokOps',
//     description:
//       'This system helps you manage your inventory, track your suppliers, and optimize your business operations with ease.',
//     tags: [
//       {
//         name: 'Laravel',
//         color: 'blue-text-gradient',
//       },
//       {
//         name: 'mysql',
//         color: 'green-text-gradient',
//       },
//       {
//         name: 'bootstrap5/scss',
//         color: 'pink-text-gradient',
//       },
//       {
//         name: 'jquery',
//         color: 'orange-text-gradient',
//       },
//     ],
//     image: stokops,
//     source_code_link: 'https://stokops.com/',
//   },
//   {
//     name: 'Zelfarms',
//     description:
//       'Zelfarms is an ecommerce platform that focus on delivering products that meet the highest standards of quality and taste.',
//     tags: [
//       {
//         name: 'React',
//         color: 'blue-text-gradient',
//       },
//       {
//         name: 'Tanstack query',
//         color: 'green-text-gradient',
//       },
//       {
//         name: 'tailwindcss',
//         color: 'pink-text-gradient',
//       },
//       {
//         name: 'zustand',
//         color: 'orange-text-gradient',
//       },
//     ],
//     image: zelfarms,
//     source_code_link: 'https://zelfarms.com',
//   },
//   {
//     name: 'Zelfarms Mobile',
//     description:
//       'Zelfarms is an ecommerce platform that focus on delivering products that meet the highest standards of quality and taste.',
//     tags: [
//       {
//         name: 'Flutter',
//         color: 'blue-text-gradient',
//       },
//       {
//         name: 'riverpod',
//         color: 'green-text-gradient',
//       },
//       {
//         name: 'hive',
//         color: 'orange-text-gradient',
//       },
//     ],
//     image: zelfarmsMobile,
//     source_code_link:
//       'https://play.google.com/store/apps/details?id=com.zelfarms.app',
//   },
//   {
//     name: 'DNest Rentals',
//     description:
//       'DNest helps Facilitate property rentals, bookings, and hospitality management.',
//     tags: [
//       {
//         name: 'React',
//         color: 'blue-text-gradient',
//       },
//       {
//         name: 'Tanstack query',
//         color: 'green-text-gradient',
//       },
//       {
//         name: 'tailwindcss',
//         color: 'pink-text-gradient',
//       },
//       {
//         name: 'zustand',
//         color: 'orange-text-gradient',
//       },
//     ],
//     image: DNest,
//     source_code_link: 'https://dnest.ng',
//   },
//   {
//     name: 'MyEverydeal',
//     description:
//       'A multi vendor ecommerce marketplace that helps small and large businesses grow and reach new consumers. It offers a platform where customers in any part of the world can find and shop for all they need.',
//     tags: [
//       {
//         name: 'React',
//         color: 'blue-text-gradient',
//       },
//       {
//         name: 'typescript',
//         color: 'green-text-gradient',
//       },
//       {
//         name: 'redux/rtkquery',
//         color: 'pink-text-gradient',
//       },
//       {
//         name: 'bootstrap5',
//         color: 'orange-text-gradient',
//       },
//     ],
//     image: myeverydeal,
//     source_code_link: 'https://marketplace.myeverydeal.com',
//   },
//   {
//     name: 'iTranxit Logistics',
//     description:
//       'iTranxit enables individuals and businesses to order or schedule a pickup and track frieght deliveries seamlessly.',
//     tags: [
//       {
//         name: 'React',
//         color: 'pink-text-gradient',
//       },
//       {
//         name: 'bootstrap5',
//         color: 'orange-text-gradient',
//       },
//     ],
//     image: itranxit,
//     source_code_link: 'https://itranxit.com/',
//   },
//   {
//     name: 'iTranxit Mobile',
//     description:
//       'iTranxit enables individuals and businesses to order or schedule a pickup and track frieght deliveries seamlessly.',
//     tags: [
//       {
//         name: 'Flutter',
//         color: 'pink-text-gradient',
//       },
//       {
//         name: 'google-map',
//         color: 'orange-text-gradient',
//       },
//     ],
//     image: itranxit2,
//     source_code_link: 'https://itranxit.com/',
//   },
//   {
//     name: 'Core Notes',
//     description:
//       'An Hospital Management platform that manages the daily activities of staff and track their progress on task accomplished.',
//     tags: [
//       {
//         name: 'Express',
//         color: 'blue-text-gradient',
//       },
//       {
//         name: 'MongoDB',
//         color: 'green-text-gradient',
//       },
//       {
//         name: 'React',
//         color: 'pink-text-gradient',
//       },
//       {
//         name: 'Tailwindcss',
//         color: 'orange-text-gradient',
//       },
//     ],
//     image: corenotes,
//     source_code_link: 'https://corenotes.net',
//   },
//   {
//     name: 'Dlplus',
//     description:
//       ' is a prominent trading and B2B IT service provider, which provides custom IT services and solutions for businesses of various needs.',
//     tags: [
//       {
//         name: 'wordpress',
//         color: 'blue-text-gradient',
//       },
//       {
//         name: 'Elementor',
//         color: 'green-text-gradient',
//       },
//     ],
//     image: dlplus,
//     source_code_link: 'https://www.dlplus.com.ng/',
//   },
//   {
//     name: 'Shops',
//     description:
//       'Shops is THE professional, full-featured and high performance e-commerce mobile application!.It connects buyer to shop for their favorite product',
//     tags: [
//       {
//         name: 'react native',
//         color: 'blue-text-gradient',
//       },
//       {
//         name: 'redux',
//         color: 'blue-text-gradient',
//       },
//       {
//         name: 'laravel',
//         color: 'green-text-gradient',
//       },
//     ],
//     image: shops,
//     source_code_link: 'https://github.com/samcesa45/shops/',
//   },
//   {
//     name: 'Tetfund Website',
//     description:
//       'Tetfund landing Page for enhanced user experience and enables users to learn about recent developments ongoing in governments institutions',
//     tags: [
//       {
//         name: 'wordpress',
//         color: 'blue-text-gradient',
//       },
//       {
//         name: 'Elementor',
//         color: 'green-text-gradient',
//       },
//     ],
//     image: tetfund,
//     source_code_link: 'https://tetfund.gov.ng/',
//   },
//   // {
//   //   name: "Sanmtos Farm",
//   //   description:
//   //     "A multi vendor ecommerce marketplace that helps small and large businesses grow and reach new consumers. It offers a platform where customers in any part of the world can find and shop for all they need.",
//   //   tags: [
//   //     {
//   //       name: "react",
//   //       color: "blue-text-gradient",
//   //     },
//   //     {
//   //       name: "rtk query",
//   //       color: "pink-text-gradient",
//   //     },
//   //     {
//   //       name: "laravel",
//   //       color: "green-text-gradient",
//   //     },
//   //   ],
//   //   image: sanmtos,
//   //   source_code_link: "https://github.com/",
//   // },
// ];

export const NAME = 'Sam Christopher';

export const DESIGNATION = `Full-Stack Developer | React, Next.js, Nest.js, WordPress`;

export const DETAILS = {
  Residence: 'Nigeria',
  City: 'Abuja',
};

export const SKILLS = [
  {
    title: 'React',
    level: '80%',
  },
  {
    title: 'React-Native',
    level: '80%',
  },
  {
    title: 'Next.js',
    level: '80%',
  },
  {
    title: 'Nest.js',
    level: '60%',
  },
  {
    title: 'Laravel',
    level: '60%',
  },
  {
    title: 'WordPress',
    level: '80%',
  },
];

export const TECH_STACK = [
  'TypeScript',
  'ReactJS',
  'NextJS',
  'TypeScript',
  'NestJS',
  'Tanstackquery',
  'Zustand',
  'TailwindCSS',
  'CSS',
  'SCSS',
  'Redux',
  'Shadcn UI',
  'REST API',
  'Posgresql',
  'Git',
  'GitHub',
  'Jira',
];

export const CONTACTS = {
  EMAIL: 'sameshiet45@gmail.com',
  PHONE: '+923159591822',
};
export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/osamajavaid',
  LINKEDIN: 'https://www.linkedin.com/in/iosamajavaid/',
  TWITTER: 'https://twitter.com/iosamajavaid',
  FACEBOOK: 'https://www.facebook.com/iosamajavaid',
};

export type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  children?: React.ReactNode;
};

export const contactItems = [
  {
    label: 'card1',
    items: [
      {
        label: 'Country',
        name: 'Nigeria',
      },
      {
        label: 'City',
        name: 'Abuja',
      },
      {
        label: 'Company',
        name: 'creativesam45',
      },
    ],
  },
  {
    label: 'card2',
    items: [
      {
        label: 'Email',
        name: 'sameshiet45@gmail.com',
      },
      {
        label: 'Linkedin',
        name: 'creativesam45',
      },
      {
        label: 'Phone',
        name: '091282933889',
      },
    ],
  },
];
