import Link from 'next/link';

export default async function Result() {
  return (
    <div className="mx-auto mt-4">
      That page was not found...
      <Link className="text-zinc-500" href={'/'}>
        Main page
      </Link>
    </div>
  );
}
