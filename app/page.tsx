import CarForm from '@/components/CarForm';

import { getAllCars } from '@/services/getAllCars';
import { yearsCounter } from '@/services/years';

export default async function Home() {
  const res = await getAllCars();

  //filter cars with MakeName length less than 7 and sort them
  const cars = res.Results.filter(
    (i: { MakeName: string | unknown[] }) => i.MakeName.length < 7
  ).sort((a: { MakeName: string }, b: { MakeName: string }) =>
    a.MakeName.localeCompare(b.MakeName)
  );

  const years = yearsCounter;

  return (
    <>
      <main className="text-center pt-32 px-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">Find Your DREAM car today!</h1>
        <CarForm years={years} cars={cars} />
      </main>
    </>
  );
}
