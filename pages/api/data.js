export const cityData = {
  "cities": [
    {
      "name": "Lyon",
      "country": "France",
      "latitude": 45.7485,
      "longitude": 4.84670
    },
    {
      "name": "Tokyo",
      "country": "Japan",
      "latitude": 35.6895,
      "longitude": 139.69170
    },
    {
      "name": "Paris",
      "country": "France",
      "latitude": 48.8534,
      "longitude": 2.34880
    }
  ]
};

export default async function handler(req, res) {
  const defaultCity = cityData.cities[0];

  const getWeatherData = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${defaultCity.latitude}&longitude=${defaultCity.longitude}&current=temperature_2m,apparent_temperature&hourly=relative_humidity_2m,visibility,wind_speed_10m,wind_direction_10m&daily=sunrise,sunset&timezone=Europe%2FBerlin`
  );
  const data = await getWeatherData.json();
  res.status(200).json(data);
}