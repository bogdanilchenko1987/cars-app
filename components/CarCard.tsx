/* eslint-disable @next/next/no-img-element */
type Car = {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
};

type CarCardProps = {
  cars: Car[];
};

export default function CarCard({ cars }: CarCardProps) {
  if (!cars) {
    throw new Promise(resolve => setTimeout(resolve, 1000)); // Simulate a delay for Suspense
  }

  return (
    <div className=" md:px-10 px-4 py-12 ">
      <div className="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
          {cars.map(car => (
            <div
              key={`${car.Make_ID}-${car.Model_ID}`}
              className="bg-inherit rounded overflow-hidden shadow-xl"
            >
              <img src="/img/car.jpg" alt="car" className="w-full h-52 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-bold text-black mb-1">{car.Make_Name}</h2>
                <h3 className="text-gray-700 text-lg mb-1">{car.Model_Name}</h3>

                <button
                  className="px-3 py-1.5 rounded-lg text-sm tracking-wider font-medium border border-black outline-none bg-transparent transition-all duration-300 hover:bg-black text-black hover:text-white"
                  type="button"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
