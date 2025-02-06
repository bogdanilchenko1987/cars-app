import { getAllCars } from '@/services/getAllCars';
import { yearsCounter } from '@/services/years';

export const generateStaticParams = async () => {
  const res = await getAllCars();

  //filter cars with MakeName length less than 7 and sort them
  const cars = res.Results.filter(
    (i: { MakeName: string | unknown[] }) => i.MakeName.length < 7
  ).sort((a: { MakeName: string }, b: { MakeName: string }) =>
    a.MakeName.localeCompare(b.MakeName)
  );

  const years = yearsCounter;

  const paths = cars.flatMap((car: { MakeId: string }) =>
    years.map((year: string) => ({
      makeId: car.MakeId,
      year,
    }))
  );

  return paths;
};
