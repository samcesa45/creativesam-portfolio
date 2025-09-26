'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider } from '@/context';

type Props = {
  children: React.ReactNode;
};
export default function Providers({ children }: Props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return <ThemeProvider>{children}</ThemeProvider>;
}
