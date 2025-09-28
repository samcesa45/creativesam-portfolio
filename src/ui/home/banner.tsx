'use client';
import React from 'react';
import BannerLayout from '../common/banner-layout';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';
import Image from 'next/image';

export default function Banner() {
  return (
    <BannerLayout>
      <div className="absolute inset-0 z-20 flex flex-col items-center py-6 justify-center w-full h-full bg-gradient-to-t from-midnight-black">
        <div className="bg-lightgray/10 w-[95%] h-[90%] px-4 py-2 rounded-xl overflow-hidden flex md:block">
          <div className="flex items-center md:justify-around">
            <div>
              <div>
                <h1 className="text-3xl sm:text-4xl xl:text-5xl text-snow font-bold">
                  Hi, I'm Sam Christopher
                </h1>
              </div>
              <div>
                <div className="py-4 font-cascadia text-snow pb-4 text-xs h-20 lg:h-auto">
                  <span>
                    {'<'}
                    <span className="text-green sm:text-base xl:text-lg font-bold">
                      div
                    </span>
                    {'>'}{' '}
                    <span className="text-snow sm:text-xl xl:text-2xl font-bold">
                      {' '}
                      I am a{' '}
                      <span className="inline-block">
                        <Typewriter
                          options={{
                            strings: [
                              'Full Stack Developer',
                              'Frontend Developer',
                            ],
                            autoStart: true,
                            loop: true,
                          }}
                        />
                      </span>
                    </span>
                    {'</'}
                    <span className="text-Green sm:text-base xl:text-lg font-bold">
                      div
                    </span>
                    {'>'}
                  </span>
                </div>
              </div>
              <Link
                to="intro"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                className="button bg-green hover:bg-green/60 transition rounded-xl text-midnight-black text-base font-medium  px-8 py-2"
              >
                Explore
              </Link>
            </div>
            <div className="w-48 h-52 relative hidden md:block">
              <Image
                width={300}
                height={300}
                className="absolute top-8 w-full h-full"
                src="/images/emoji.png"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* details in row */}
        <div className="grid grid-cols-2 gap-4 md:gap-0 md:flex items-center justify-between w-full px-4 xl:px-8 2xl:px-16">
          <div className="flex items-center gap-x-1">
            <span className="text-base md:text-lg text-green font-bold">
              10+
            </span>
            <span className="text-xs text-snow">Completed Projects</span>
          </div>

          <div className="flex items-center gap-x-1">
            <span className="text-base md:text-lg text-green font-bold">
              8+
            </span>
            <span className="text-xs text-snow">Freelance Clients</span>
          </div>

          <div className="flex items-center gap-x-1">
            <span className="text-base md:text-lg text-green font-bold">
              5+
            </span>
            <span className="text-xs text-snow">Honors & Awards</span>
          </div>

          <div className="flex items-center gap-x-1">
            <span className="text-base md:text-lg text-green font-bold">
              1+
            </span>
            <span className="text-xs text-snow">Opensource Projects</span>
          </div>
        </div>
      </div>
    </BannerLayout>
  );
}
