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
  PHONE: '+2348102820942',
};
export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/samcesa45',
  LINKEDIN: 'https://www.linkedin.com/in/samuel-christopher-0117aa349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  TWITTER: 'https://x.com/samicode4love',
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
        name: '+2348102820942',
      },
    ],
  },
];
