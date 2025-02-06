export const generateStaticParams = async () => {
  const response = await fetch(
    'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'
  );

  // const result = await response;
  const res = await response.json();

  const cars = res.Results.filter((i: { MakeName: string | unknown[] }) => i.MakeName.length < 7);
  const years = Array.from({ length: 30 }, (_, i) => (new Date().getFullYear() - i).toString());

  const paths = cars.flatMap((car: { MakeId: string }) =>
    years.map((year: string) => ({
      makeId: car.MakeId,
      year,
    }))
  );

  return paths;
};
