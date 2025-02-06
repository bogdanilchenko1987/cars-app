import Link from 'next/link';

export default function NoResults() {
  return (
    <h3 className="text-center mt-10">
      Sorry, no results...
      <Link className="text-zinc-500" href={'/'}>
        Try another car
      </Link>
    </h3>
  );
}
