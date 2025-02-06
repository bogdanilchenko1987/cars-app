import CarForm from '@/components/CarForm';

export default async function Home() {
  const response = await fetch(
    'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'
  );

  // const result = await response;
  const res = await response.json();

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

// export async function getAllCars() {
//   const arr = [];
//   for (let i = 465; i < 479; i++) {
//     const response = await fetch(
//       `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${i}?format=json`
//     );
//     arr.push(await response.json());
//   }
//   console.log(arr);
//   return arr;
// }

// export default async function Home() {
//   const cars = await getAllCars();

//   const years = [
//     2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,
//   ];
//   return (
//     <>
//       <main className="text-center pt-32 px-5">
//         <h1 className="text-4xl md:text-5xl font-bold mb-5">
//           Find Your DREAM car today!
//         </h1>
//         <form>
//           <select>
//             <option value="">Choose a model</option>
//             {cars.map((car) => (
//               <option
//                 key={car.Results[0]?.Make_Name}
//                 value={car.Results[0]?.Make_Name}
//               >
//                 {car.Results[0]?.Make_Name}
//               </option>
//             ))}
//           </select>

//           <select>
//             <option value="">Choose a year</option>

//             {years.map((year) => (
//               <option key={year} value={year}>
//                 {year}
//               </option>
//             ))}
//           </select>
//           <button>Next</button>
//         </form>
//       </main>
//     </>
//   );
// }
