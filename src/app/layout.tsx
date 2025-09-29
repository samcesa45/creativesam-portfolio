import './globals.css';
import { Metadata } from 'next';
import Providers from '@/providers/Providers';

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
        className={`font-circular-normal antialiased bg-black`}
        data-aos-easing="ease"
        data-aos-duration="400"
        data-aos-delay="0"
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
