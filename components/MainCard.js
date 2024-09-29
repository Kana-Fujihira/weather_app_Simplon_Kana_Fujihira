import Image from "next/image";
import { ctoF } from "../services/converters";
import styles from "./MainCard.module.css";
import {cityData} from "../pages/api/data.js"

export const MainCard = ({
  weatherCode,
  unitSystem,
  weatherData,
}) => {
  
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.location}>
      {cityData.cities[0].name}, {cityData.cities[0].country}</h1>
      <p className={styles.description}>{weatherCode}</p>
      <Image
        width={300}
        height={300}
        // src={`/icons/${iconName}.svg`}
        alt="weatherIcon"
      />
      <h1 className={styles.temperature}>
        {unitSystem == "metric"
          ? Math.round(weatherData.hourly.temperature_2m)
          : Math.round(ctoF(weatherData.hourly.temperature_2m[0]))}
        °{unitSystem == "metric" ? "C" : "F"}
      </h1>
      <p>
        Feels like{" "}
        {unitSystem == "metric"
          ? Math.round(weatherData.hourly.apparent_temperature)
          : Math.round(ctoF(weatherData.hourly.apparent_temperature[0]))}
        °{unitSystem == "metric" ? "C" : "F"}
      </p>
    </div>
  );
};