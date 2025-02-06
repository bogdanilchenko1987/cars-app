'use client';

import Link from 'next/link';
import { ChangeEvent, FormEvent, useState } from 'react';
import { motion } from 'framer-motion';

interface Car {
  MakeId: number;
  MakeName: string;
}

interface CarFormProps {
  cars: Car[];
  years: string[];
}

const container = (delay: number, x: number) => ({
  hidden: { x: x, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

export default function CarForm({ cars, years }: CarFormProps) {
  const [formData, setFormData] = useState({
    year: '',
    model: '',
  });

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  const isButtonDisabled = !formData.model || !formData.year;

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <motion.div
          variants={container(0, -100)}
          initial="hidden"
          animate="visible"
          className="w-[50%] text-center mx-auto"
        >
          <label htmlFor="year"></label>
          <select
            id="year"
            name="year"
            className="mr-2 w-auto bg-inherit"
            value={formData.year}
            onChange={handleSelectChange}
          >
            <option value="">Select Year</option>
            {years.map(year => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <label htmlFor="model"></label>
          <select
            id="model"
            name="model"
            className=" w-auto bg-inherit"
            value={formData.model}
            onChange={handleSelectChange}
          >
            <option value="">Select Model</option>
            {cars.map(car => (
              <option key={car.MakeId} value={car.MakeId}>
                {car.MakeName}
              </option>
            ))}
          </select>
        </motion.div>

        <motion.div variants={container(0.5, 100)} initial="hidden" animate="visible">
          <Link href={`/result/${formData.model}/${formData.year}`} passHref>
            <button
              className={` w-[50%] mt-5 px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-black outline-none bg-transparent transition-all duration-300 ${
                isButtonDisabled ? 'text-gray-500 ' : 'hover:bg-black text-black hover:text-white'
              }`}
              type="submit"
              disabled={isButtonDisabled}
            >
              Next
            </button>
          </Link>
        </motion.div>
      </form>
    </div>
  );
}
