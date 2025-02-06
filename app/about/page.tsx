import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | Cars App',
  description: 'About me and my cars app',
};

export default async function About() {
  return (
    <main className="text-center pt-32 px-5">
      <h3 className="text-4xl md:text-5xl font-bold mb-5">Welcome to my app</h3>
      <p className="max-w-[750px] mx-auto leading-8">
        Hello guys! This application was created as a test task for the position of Front-end
        Developer. I use Next.js, React, TypeScript and Tailwindcss as my stack here. Feel free to{' '}
        <Link className="text-zinc-500" href={'/'}>
          check it out
        </Link>
        .
      </p>
    </main>
  );
}
