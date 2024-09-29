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
    `https://api.open-meteo.com/v1/forecast?latitude=${defaultCity.latitude}&longitude=${defaultCity.longitude}&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,visibility,wind_speed_10m,wind_direction_80m&daily=sunrise,sunset`
  );
  const data = await getWeatherData.json();
  res.status(200).json(data);
}
