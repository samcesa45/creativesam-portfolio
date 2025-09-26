'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
// import 'aos/dist/aos.css';
// import { useTheme } from 'next-themes';
export default function Hero() {
  // const { theme } = useTheme();
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div
        className={` absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 sm:py-16 py-10 flex flex-row items-start gap-5`}
      >
        <div
          className="flex flex-col justify-center items-center mt-5"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay=""
        >
          <div className={`w-5 h-5 rounded-full  bg-[#915EFF]`}></div>
          <div
            className={`w-1 sm:h-80 h-40 dark:violet-gradient violet-gradient`}
          ></div>
        </div>

        <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="">
          <h1 className="font-black text-[#222222] dark:text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 ">
            Hi, {"I'm"} <span className="text-[#915EFF]">Sam</span>
          </h1>
          <p className="text-[#222222] max-w-[400px] dark:text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
            I design and develop services for customers of all sizes,
            <br className="sm:block hidden" />
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <Link href="#about" passHref aria-label="go to about section">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </Link>
      </div>
    </section>
  );
}
