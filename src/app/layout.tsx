import './globals.css';
import { Inter, Poppins } from 'next/font/google';
import { Metadata } from 'next';
import Providers from '@/providers/Providers';

const inter = Inter({
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});
const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'creative-sam-portfolio',
  description: 'A Portfolio to showcase my current project and what I do',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${inter.variable} ${poppins.variable} antialiased bg-black`}
        className={`font-circular antialiased bg-black`}
        data-aos-easing="ease"
        data-aos-duration="400"
        data-aos-delay="0"
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
