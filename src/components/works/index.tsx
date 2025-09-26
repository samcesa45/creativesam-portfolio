'use client';
import SectionWrapper from '../section_wrapper/SectionWrapper';
import { styles } from '@/constants/styles';
import { projects } from '@/constants';
import Tilt from 'react-parallax-tilt';
import Image, { StaticImageData } from 'next/image';
import { github } from '@/assets';
import PaginatedList from '../pagination';

const Works = () => {
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="">
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </div>

      <div className="flex w-full">
        <p
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay=""
          className="mt-3 text-[#222222] dark:text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          live demos in it. It reflects my ability to solve complex problems,
          work with different technologies, and manage projects effectively.
        </p>
      </div>
      <PaginatedList
        items={projects}
        itemsPerPage={6}
        renderItem={(item, index) => (
          <ProjectCard key={`${item.name}-${index}`} index={index} {...item} />
        )}
      />
    </>
  );
};

export default SectionWrapper(Works, 'works');

type Props = {
  index: number;
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string | StaticImageData;
  source_code_link: string;
};

const ProjectCard = ({
  index,
  name,
  image,
  source_code_link,
  tags,
  description,
}: Props) => {
  return (
    <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="">
      <Tilt className="bg-black-100 p-5 rounded-2xl md:w-[300px] w-full h-full max-h-full">
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            alt={name}
            className="object-cover w-full h-full rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img-hover">
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient"
            >
              <Image
                src={github}
                alt="github"
                className="object-contain w-1/2 h-1/2"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-lg md:text-[24px] line-clamp-2">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <p
              key={`${tag.name}-${index}`}
              className={`text-[14px] ${tag.color}`}
            >
              # {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};
