'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import { Suspense, useEffect, useState } from 'react';

// for Suspense
const CarCard = React.lazy(() => import('@/components/CarCard'));

import ErrResults from '@/components/ErrResults';
import NoResults from '@/components/NoResults';

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

  const isResults = !loading && cars.length === 0 && !error;

  return (
    <main>
      <h1 className=" text-center mt-5 text-4xl md:text-5xl font-bold mb-5">Car results:</h1>
      <Link className="ml-4 md:ml-10" href={'/'}>
        Go Back
      </Link>
      {error && <ErrResults />}
      {isResults ? (
        <NoResults />
      ) : (
        <Suspense fallback={<p className="text-center mt-5 px-5">Loading...</p>}>
          <CarCard cars={cars} />
        </Suspense>
      )}
    </main>
  );
}
