import { NextResponse } from 'next/server';

const expertise = [
  {
    id: 0,
    title: 'Full Stack Development',
    desc: 'I am a skilled Software developer with extensive experience in building robust web applications using Nextjs, Nestjs, React,postgresql and prisma. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients.',
  },
  {
    id: 1,
    title: 'Scrum and Jira',
    desc: "As a developer, I'm proficient in Jira and Scrum methodologies. I use Jira to simplify project management tasks like task assignment, prioritization, and progress tracking. Scrum has improved my teamwork, utilizing daily stand-ups, sprint planning, and retrospectives. My expertise ensures high-quality software products are delivered promptly.",
  },
  {
    id: 2,
    title: 'Mobile Development',
    desc: 'I specialize in building cross-platform mobile applications using React Native and Flutter. My experience spans integrating REST APIs, managing app state, implementing offline storage, and publishing apps to the App Store and Google Play. I focus on delivering fast, responsive, and user-friendly mobile experiences that align with modern UI/UX best practices.',
  },
  {
    id: 3,
    title: 'WordPress Development',
    desc: 'I develop custom WordPress solutions, including theme and plugin development, API integration, and WooCommerce setups. I am skilled at optimizing websites for performance, SEO, and responsive design. From crafting tailored business websites to implementing scalable content management systems, I ensure clean, secure, and maintainable WordPress codebases.',
  },
  {
    id: 4,
    title: 'Github',
    desc: 'GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.',
  },
  // {
  //   id: 5,
  //   title: 'Open Source Contributor',
  //   desc: "Open Source is the future. I usually take some time on weekend and contribute into opensource project. It gives me opportunity to learn from best developer's practices and also gives me a chance to help others and contribute into the community for the good.",
  // },
];

export async function GET() {
  return NextResponse.json(expertise, { status: 200 });
}
