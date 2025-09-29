import { NextResponse } from 'next/server';

const portfolio = [
  {
    id: 1,
    projectName: 'Bristish Protocol Academy',
    url: 'https://thebritishprotocolacademy.com',
    image: '/assets/bpa.png',
    projectDetail:
      'A Website that provides practical etiquette and diplomacy training for individuals, professionals, and organizations.',
    technologiesUsed: [
      {
        tech: 'WordPress',
      },
      {
        tech: 'Elementor',
      },
    ],
  },
  {
    id: 2,
    projectName: 'Laura Windsor Etiquette Academy',
    url: 'https://laurawindsoretiquett.com',
    image: '/assets/laura.png',
    projectDetail:
      'Etiquette Academy websites that helps children and adults acquire the skills to navigate modern polite society in a multi-cultural environment',
    technologiesUsed: [
      {
        tech: 'WordPress',
      },
      {
        tech: 'Elementor',
      },
    ],
  },
  {
    id: 3,
    projectName: 'Zeltechnologies',
    url: 'https://zeltechnologies.com',
    image: '/assets/zeltechnology.png',
    projectDetail:
      'A Websites that helps Transform and Elevate Your Business Through Innovative and Personalized Technology Solutions',
    technologiesUsed: [
      {
        tech: 'Nextjs',
      },
      {
        tech: 'ReactHookform',
      },
      {
        tech: 'Framer-motion',
      },
    ],
  },
  {
    id: 4,
    projectName: 'Ezimo Town',
    url: 'https://www.ezimotown.com',
    image: '/assets/ezimo.png',
    projectDetail:
      'A simple blog that showcases the rich cultural heritage of ezimo, the people and its blessed natural resources',
    technologiesUsed: [
      {
        tech: 'NextJs',
      },
      {
        tech: 'Tanstack query',
      },
      {
        tech: 'TailwindCSS',
      },
      {
        tech: 'ReactHookform',
      },
      {
        tech: 'Zustand',
      },
      {
        tech: 'Framer-motion',
      },
    ],
  },
  {
    id: 5,
    projectName: 'Scola LMS Portal',
    url: 'https://platform.scola.ng',
    image: '/assets/iterum.png',
    projectDetail:
      'Scola is an innovative, multi-tenant and comprehensive Learning Management System (LMS) designed to streamline administrative and operational tasks within a school environment.',
    technologiesUsed: [
      {
        tech: 'Laravel',
      },
      {
        tech: 'Mysql',
      },
      {
        tech: 'Boostrap5',
      },
      {
        tech: 'TailwindCSS',
      },
      {
        tech: 'Jquery',
      },
    ],
  },
  {
    id: 6,
    projectName: 'Zelfarms',
    url: 'https://zelfarms.com',
    image: '/assets/zelfarms-img.png',
    projectDetail:
      'Zelfarms is an ecommerce platform that focus on delivering products that meet the highest standards of quality and taste.',
    technologiesUsed: [
      {
        tech: 'ReactJS',
      },
      {
        tech: 'Tanstack query',
      },
      {
        tech: 'ReactHookform',
      },
      {
        tech: 'Zustand',
      },
      {
        tech: 'TailwindCSS',
      },
    ],
  },
  {
    id: 7,
    projectName: 'StokOps Mobile',
    url: 'https://apps.apple.com/ng/app/stokops/id6737730220',
    image: '/assets/stokops-mobile.png',
    projectDetail:
      'This system helps you manage your inventory, track your suppliers, and optimize your business operations with ease.',
    technologiesUsed: [
      {
        tech: 'React Native',
      },
      {
        tech: 'Tanstack query',
      },
      {
        tech: 'Zustand',
      },
      {
        tech: 'React Native Paper',
      },
      {
        tech: 'Native wind',
      },
    ],
  },
];

export async function GET() {
  return NextResponse.json(portfolio, { status: 200 });
}
