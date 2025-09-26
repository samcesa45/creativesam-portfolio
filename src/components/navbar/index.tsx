'use client';
import { logos, menu, close } from '@/assets';
import { navLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '@/context';
import { styles } from '@/constants/styles';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);

      const sections = document.querySelectorAll('section[id]');
      sections.forEach((current: any) => {
        const sectionId = current.getAttribute('id');
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        styles.paddingX,
        'w-full flex items-center py-5 fixed top-0 z-20',
        'dark:text-white text-primary',
        scrolled || theme == 'dark'
          ? 'bg-primary text-white'
          : 'bg-transparent',
      )}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between w-full mx-auto max-w-7xl"
      >
        <Link
          href="/"
          passHref
          aria-label="home page"
          className="flex items-center gap-2"
          onClick={() => window.scrollTo(0, 0)}
        >
          <Image
            src={logos}
            alt="logo-image"
            className="object-contain w-9 h-9"
          />
          <p
            className={cn(
              'text-xs md:text-[18px] font-bold cursor-pointer flex',
              'text-[#222222] dark:text-white',
              scrolled || theme === 'dark' ? 'text-white' : '',
            )}
          >
            Sam &nbsp;
            <span className="hidden sm:block"> | web & Mobile Artisan</span>
          </p>
        </Link>

        <motion.ul className="flex flex-row gap-10 list-none" role="list">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              role="listitem"
              className={cn(
                'text-[18px] font-medium cursor-pointer hidden sm:flex',
                scrolled || theme === 'dark'
                  ? 'hover:text-white  text-secondary'
                  : 'hover:text-[#ff9301]',
              )}
            >
              <Link href={`#${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
          <button
            id="toggle-button"
            onClick={() => toggleTheme()}
            type="button"
            aria-label="toggle-button"
            className={`border-2  text-gray-800 border-gray-500 dark:text-gray-300 dark:border-gray-300 rounded-lg text-sm p-2  sm:flex`}
          >
            <svg
              id="toggle-button-dark-icon"
              className={cn('w-5 h-5', theme === 'dark' ? 'hidden' : '')}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg
              id="toggle-button-light-icon"
              className={cn(
                'w-5 h-5',
                'dark:text-white',
                theme === 'dark' ? '' : 'hidden',
              )}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </motion.ul>

        <div className="flex items-center justify-end flex-1 sm:hidden">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient dark:bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul
              className="flex flex-col items-start justify-end flex-1 gap-4 list-none"
              role="list"
            >
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  role="listitem"
                  className={cn(
                    'text-[16px] font-poppins font-medium cursor-pointer',
                    active === nav.id ? 'text-white' : 'text-secondary',
                  )}
                  onClick={() => setToggle(!toggle)}
                >
                  <Link href={`#${nav.id}`} aria-label={nav.title}>
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
