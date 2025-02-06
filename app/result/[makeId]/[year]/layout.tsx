import { Metadata } from 'next';

type Props = {
  params: Promise<{ makeId: string; year: number }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { makeId, year } = await params;

  return {
    title: `Car results for makeId: ${makeId} - year: ${year} | Cars App`,
  };
}

export default function ResultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
