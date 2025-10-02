import { NextResponse } from 'next/server';

const recommendations = [
  {
    id: 0,
    name: 'Sunday Odoh',
    image: '/images/emoji.png',
    designation: 'Laravel | Node ',
    view: 'Hey everyone! I wanted to take a moment to recommend Samuel for any React.js opportunities. I had the pleasure of working with him on multiple projects where he showcased a strong understanding of React.js and Next.js concepts and delivered high-quality code. He consistently demonstrated a willingness to learn and grow, and his enthusiasm for tackling new challenges was contagious. Samuel is a reliable and dedicated team member who would be a great asset to any React.js team. Highly recommended! 👍! 🌟',
    linkednURL: '',
  },
  {
    id: 1,
    name: 'James Ajagabos',
    image: '/images/emoji.png',
    designation:
      'Backend Engineer | Laravel Developer',
    view: "I had the privilege of working alongside Samuel on multiple  projects, and I must say, his talent and work ethic truly stood out. Recently, we were both part of the dynamic team at Hasob , where Samuel's professionalism and attention to detail shone brightly. I wholeheartedly endorse Samuel for any opportunity that calls for a highly skilled and dedicated individual.",
    linkednURL: '',
  },
  {
    id: 2,
    name: 'Victor Opara',
    image: '/images/emoji.png',
    designation: 'Nestjs | JavaScript | Tailwind | Sass | Bootstrap',
    view: "I wholeheartedly recommend Samuel as a talented React frontend developer with an incredible UI development. His proficiency in Nest.js further enhances his capabilities, allowing him to build robust and scalable applications. Samuel's attention to detail, problem-solving skills, and dedication to delivering exceptional results make him a valuable addition to any development team.",
    linkednURL: '',
  },
  {
    id: 3,
    name: 'MaryJane Nwansi',
    image: '/images/emoji.png',
    designation: 'Brand Manager',
    view: 'Samuel is a highly-skilled web developer.I highly recommend services. I have worked with him on multiple projects and look forward to doing so again in the future',
    linkednURL: '',
  },
];
export async function GET() {
  return NextResponse.json(recommendations, { status: 200 });
}
