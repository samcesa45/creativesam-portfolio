import { NextResponse } from 'next/server';

const background = [
  {
    eduCards: [
      {
        id: 0,
        title: 'University Of Benin',
        degree: 'B.eng, Mechanical Engineering',
        detail:
          "Bachelor's Degree in Mechanical Engineering from Univeristy Of Benin.",
        year: '2012-2017',
      },
      {
        id: 1,
        title: 'Command Day Secondary School',
        degree: 'SSCE Certificate',
        detail:
          'Completed Secondary School from Command Day Secondary School, Ojo',
        year: '2001-2007',
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: 'Zeltechnologies',
        role: 'Frontend/Mobile Engineer (contract)',
        url: 'https://www.zeltechnologies.com',
        desc: [
            "Built Zelfarms and DNest web application using React, Zustand and Tanstack query, reducing page load time by 30% and enhancing user retention.",
            "Developed and maintained 2+ client-facing web applications, enhancing user engagement and satisfaction by 20%.",
            "Enhanced cross-browser compatibility and SEO, leading to a 15% boost in organic search traffic.",
            "Implemented responsive designs for multiple platforms, resulting in a 40% increase in mobile traffic.",
            "Conducted code reviews and mentoring, improving code quality and reducing production bugs by 15%.",
            "Built Ezimo blog and optimized it for better seo using Next js",
            "Refactored and optimised StokOps Mobile for better performance thereby increasing mobile traffic by 20%, fixed all recurring bugs."
          ],
        year: 'Oct 2024 - Sep. 2025',
        location: 'Abuja, Nigeria',
      },
      {
        id: 2,
        title: 'Hasob Integrated Service',
        role: 'Frontend Engineer',
        url: 'https://hasob.ng',
        desc:  [
            "Developed dashboards, custom web templates for institutions using various libraries such as tailwindcss, bootstrap5 and sass",
            "Collaborated with designers and product managers to deliver intuitive and visually appealing interfaces.",
            "Optimized web performance and ensured accessibility compliance, leading to a 20% improvement in user experience metrics.",
            "Developed and maintained 2 websites templates so that clients can select the one that meets their requirements thereby increasing clients satisfactions",
            "Led a team of 3 developers to integrate complex UI components, increasing project delivery speed by 20%",
          ],
        year: 'Dec 2021 - Dec 2024',
        location: 'Abuja, Nigeria',
      },
    ],
  },
];

export async function GET() {
  return NextResponse.json(background, { status: 200 });
}
