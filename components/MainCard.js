import Image from "next/image";
import { ctoF } from "../services/converters";
import {cityData} from "../pages/api/data.js";
import { getAMPM } from "../services/helpers";
import Sun from "../public/icons/Sun.svg";
import Cloud from "../public/icons/Cloud.svg";
import CloudRain from "../public/icons/CloudRain.svg";
import CloudSun from "../public/icons/CloudSun.svg";
import CloudMoonStar from "../public/icons/CloudMoonStar.svg";
import Fog from "../public/icons/Fog.svg";
import MoonStarSmile from "../public/icons/MoonStarSmile.svg";
import Snow from "../public/icons/Snow.svg";
import Thunder from "../public/icons/Thunder.svg";
import TwoCloud from "../public/icons/TwoCloud.svg";
import styles from "./MainCard.module.css";


export const MainCard = ({
  unitSystem,
  weatherData,
}) => {
  
  const code  =  weatherData.daily.weather_code[0];
  
  function getWeatherDescription(code) {
    if (code === 0) {
      return "Clear sky";
    } else if (code === 1 || code === 2 || code === 3) {
      return "Mainly clear, partly cloudy, and overcast";
    } else if (code === 45 || code === 48) {
      return "Fog and depositing rime fog";
    } else if (code === 51 || code === 53 || code === 55) {
      return "Drizzle: Light, moderate, and dense intensity";
    } else if (code === 56 || code === 57) {
      return "Freezing Drizzle: Light and dense intensity";
    } else if (code === 61 || code === 63 || code === 65) {
      return "Rain: Slight, moderate and heavy intensity";
    } else if (code === 66 || code === 67) {
      return "Freezing Rain: Light and heavy intensity";
    } else if (code === 71 || code === 73 || code === 75) {
      return "Snow fall: Slight, moderate, and heavy intensity";
    } else if (code === 77) {
      return "Snow grains";
    } else if (code === 80 || code === 81 || code === 82) {
      return "Rain showers: Slight, moderate, and violent";
    } else if (code === 85 || code === 86) {
      return "Snow showers slight and heavy";
    } else if (code === 95) {
      return "Thunderstorm: Slight or moderate";
    } else if (code === 96 || code === 99) {
      return "Thunderstorm with slight and heavy hail";
    } else {
      return "Unknown weather condition";
    }
  }

  function getWeatherImage(code) {
    const ampm = getAMPM(unitSystem, weatherData.current.time, weatherData.timezone); 
    if (code === 0) {
      return ampm === 'PM' ? MoonStarSmile : Sun;
    } else if (code === 1 || code === 2 || code === 3) {
      return ampm === 'PM' ? CloudMoonStar : CloudSun;
    } else if (code === 45 || code === 48) {
      return Fog;
    } else if (code === 51 || code === 53 || code === 55) {
      return CloudRain;
    } else if (code === 56 || code === 57) {
      return Fog;
    } else if (code === 61 || code === 63 || code === 65) {
      return CloudRain;
    } else if (code === 66 || code === 67) {
      return CloudRain;
    } else if (code === 71 || code === 73 || code === 75) {
      return Snow;
    } else if (code === 77) {
      return Snow;
    } else if (code === 80 || code === 81 || code === 82) {
      return CloudRain;
    } else if (code === 85 || code === 86) {
      return Snow;
    } else if (code === 95) {
      return Thunder;
    } else if (code === 96 || code === 99) {
      return Thunder;
    } else {
      return null;
    }
  }
  
  const weatherImage = getWeatherImage(code);


  return (
    <div className={styles.wrapper}>
     <p>  Current Weather  </p> 
      <h1 className={styles.location}>
      
      {cityData.cities[0].name}, {cityData.cities[0].country}</h1>
      <p className={styles.description}>{getWeatherDescription(code)}</p>

      <Image
        width={300}
        height={300}
        src={weatherImage}
        alt="weatherIcon"
      />
      <h1 className={styles.temperature}>
        {unitSystem == "metric"
          ? Math.round(weatherData.current.temperature_2m)
          : Math.round(ctoF(weatherData.current.temperature_2m))} 
        °{unitSystem == "metric" ? "C" : "F"}
      </h1>
      <p>
        Feels like{" "}
        {unitSystem == "metric"
          ? Math.round(weatherData.current.apparent_temperature)
          : Math.round(ctoF(weatherData.current.apparent_temperature))}
        °{unitSystem == "metric" ? "C" : "F"}
      </p>
    </div>
  );
};