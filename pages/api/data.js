export default async function handler(req, res) {
  const { latitude, longitude } = req.body.cityInput; 

  try {
    const getWeatherData = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,visibility,wind_speed_10m,wind_direction_80m&daily=sunrise,sunset`
    );
    const data = await getWeatherData.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des données météorologiques." });
  }
}
