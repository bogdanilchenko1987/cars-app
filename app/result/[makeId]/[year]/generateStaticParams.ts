import { getAllCars } from '@/services/getAllCars';

export const generateStaticParams = async () => {
  const res = await getAllCars();

  const cars = res.Results.filter(
    (i: { MakeName: string | unknown[] }) => i.MakeName.length < 7
  ).sort((a: { MakeName: string }, b: { MakeName: string }) =>
    a.MakeName.localeCompare(b.MakeName)
  );

  const years = Array.from({ length: 11 }, (_, i) =>
    (new Date().getFullYear() - i).toString()
  ).reverse();

  const paths = cars.flatMap((car: { MakeId: string }) =>
    years.map((year: string) => ({
      makeId: car.MakeId,
      year,
    }))
  );

  return paths;
};
