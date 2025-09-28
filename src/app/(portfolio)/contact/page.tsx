import { contactItems } from '@/constants';
import ContactForm from '@/features/contact/components/contact-form';
import BannerLayout from '@/ui/common/banner-layout';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { SiUpwork } from 'react-icons/si';
export default function ContactPage() {
  return (
    <BannerLayout>
      <div className="px-4 py-2">
        <div className="my-6 text-snow flex flex-col gap-y-5">
          <h1 className="text-lg font-bold">Contact Information</h1>
          <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
            {contactItems.map((card, i) => (
              <div
                key={i}
                className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4"
              >
                {card.items.map((item, j) => (
                  <div key={j} className="flex justify-between items-center">
                    <span className="md:text-base">{item.label}</span>
                    <span className="text-lightgray md:text-sm">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex items-center justify-center gap-x-8 sm:gap-x-16 text-snow">
            <Link
              href=""
              className="hover:scale-125 ease-in-out duration-700"
              target="_blank"
            >
              <HiMail />
            </Link>
            <Link
              href=""
              className="hover:scale-125 ease-in-out duration-700"
              target="_blank"
            >
              <FaGithub />
            </Link>
            <Link
              href=""
              className="hover:scale-125 ease-in-out duration-700"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
            <Link
              href=""
              className="hover:scale-125 ease-in-out duration-700"
              target="_blank"
            >
              <SiUpwork />
            </Link>
          </div>
          <ContactForm />
        </div>
      </div>
    </BannerLayout>
  );
}
