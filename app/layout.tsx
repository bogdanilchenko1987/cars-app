import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import Container from '@/components/Container';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home | Cars App',
  description: 'Test task cars app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  text-zinc-900`}>
        <div className="bg-[#eeedf1]">
          {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
        </div> */}
          <Container>
            <Header />
            {children}
            <Footer />
          </Container>
        </div>
      </body>
    </html>
  );
}
