export async function getAllCars() {
  try {
    const response = await fetch(
      'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'
    );
    const res = await response.json();

    if (!res.Count) throw new Error('Unable to download cars.');
    return res;
  } catch (error) {
    console.log(error);
  }
}
