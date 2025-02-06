'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import { Suspense, useEffect, useState } from 'react';

// import CarCard from '@/components/CarCard';
const CarCard = React.lazy(() => import('@/components/CarCard'));

type Car = {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
};

export default function ResultPage() {
  const { makeId, year } = useParams();

  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(
          `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
        );

        const res = await response.json();

        // Remove duplicates
        const uniqueModels: Car[] = Array.from(
          new Map(
            res.Results.map((model: Car) => [`${model.Make_ID}-${model.Model_ID}`, model])
          ).values()
        ) as Car[];

        setCars(uniqueModels);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log(error);
      }
    };

    fetchCars();
  }, [makeId, year]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <main className="">
      <h1 className=" text-center mt-5 text-4xl md:text-5xl font-bold mb-5">Car results: </h1>
      <Link className="ml-4 md:ml-10" href={'/'}>
        Go Back
      </Link>
      {error && (
        <p className="text-center pt-32 px-5">
          Houston, we have a problem!... Try to reload the page
        </p>
      )}
      {!loading && cars.length === 0 && !error ? (
        <h3 className="text-center mt-10">
          Sorry, no results...
          <Link className="text-zinc-500" href={'/'}>
            Try another car
          </Link>
        </h3>
      ) : (
        <Suspense fallback={<p className="text-center mt-5 px-5">Loading...</p>}>
          <CarCard cars={cars} />
        </Suspense>
      )}
    </main>
  );
}
