export default async function handler(req, res) {
  const { cityInput } = req.body;
  const getWeatherData = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=45.7485&longitude=4.84670&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,visibility,wind_speed_10m,wind_direction_80m&daily=sunrise,sunset`
  );
  const data = await getWeatherData.json();
  res.status(200).json(data);
}
