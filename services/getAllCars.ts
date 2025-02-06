// const BASE_URL =
//   "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/audi?format=json";

export async function getAllCars() {
  const response = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/audi?format=json`
  );

  if (!response.ok) throw new Error("Unable to fetch posts!");

  return response;
}

const BASE_URL = "https://673dfa890118dbfe8609a017.mockapi.io";

export async function getAllPosts() {
  const response = await fetch(`${BASE_URL}/posts`);

  if (!response.ok) throw new Error("Unable to fetch posts!");

  return response.json();
}
