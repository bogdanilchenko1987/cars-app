import CarForm from '@/components/CarForm';
import { getAllCars } from '@/services/getAllCars';

export default async function Home() {
  // getAllCars();

  // const response = await fetch(
  //   'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'
  // );

  const res = await getAllCars();

  const cars = res.Results.filter(
    (i: { MakeName: string | unknown[] }) => i.MakeName.length < 7
  ).sort((a: { MakeName: string }, b: { MakeName: string }) =>
    a.MakeName.localeCompare(b.MakeName)
  );

  const years = Array.from({ length: 11 }, (_, i) =>
    (new Date().getFullYear() - i).toString()
  ).reverse();

  return (
    <>
      <main className="text-center pt-32 px-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">Find Your DREAM car today!</h1>
        <CarForm years={years} cars={cars} />
      </main>
    </>
  );
}
