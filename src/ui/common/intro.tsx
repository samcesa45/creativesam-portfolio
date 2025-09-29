import Link from 'next/link';
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
import { NAME, DESIGNATION, SOCIAL_LINKS } from '@/constants/index';
import { logos } from '../../../public/assets';
import { SetStateAction } from 'react';
import Download from './download';
import Contact from './contact';
import Skills from './skills';
import Tools from './tools';
type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
};
const Intro = ({}: Props) => {
  return (
    <>
      {/* fixed at top */}
      <div className="headerr z-50 absolute bg-midnight-black backdrop-blur-sm inset-y-0 h-48 top-0 flex items-center justify-center w-full flex-col px-4 gap-y-4">
        <Image
          className="w-16 h-16 rounded-full"
          width={200}
          height={200}
          src={logos}
          alt="logo picture"
        />
        <div className="flex flex-col items-center justify-center">
          <span className="text-gray-300 text-base font-bold break-normal">
            {NAME}
          </span>
          <span className="text-sm text-lightgray text-center mt-2">
            {DESIGNATION}
          </span>
        </div>
      </div>

      {/* middle components */}
      <div className="beech z-20 flex flex-col overflow-y-scroll pt-48 top-48 mb-4 space-y-6 divide-y divide-white overflow-x-hidden no-scrollbar px-4">
        {/* <Location /> */}
        {/* <Languages /> */}
        <Skills />
        <Tools />
        <Contact />
        <Download icon={<FaDownload />} />
      </div>

      {/* fixed at bottom */}
      <div className="footer absolute flex justify-center space-x-6 text-xl items-center bottom-0 z-50 h-10 w-full bg-MidNightBlack text-Snow">
        <Link
          href={SOCIAL_LINKS.GITHUB}
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <FaGithub />
        </Link>
        <Link
          href={SOCIAL_LINKS.TWITTER}
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <FaTwitter />
        </Link>
        {/* <Link href={SOCIAL_LINKS.FACEBOOK} target='_blank' rel='noreferrer' className=''>
          <FaFacebook />
        </Link> */}
        <Link
          href={SOCIAL_LINKS.LINKEDIN}
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <FaLinkedin />
        </Link>
      </div>
    </>
  );
};

export default Intro;
