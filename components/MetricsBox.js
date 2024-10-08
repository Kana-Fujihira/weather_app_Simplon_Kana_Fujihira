import { degToCompass } from "../services/converters";
import {
  getTime,
  getAMPM,
  getVisibility,
  getWindSpeed,
} from "../services/helpers";
import { MetricsCard } from "./MetricsCard";
import styles from "./MetricsBox.module.css";

export const MetricsBox = ({ weatherData, unitSystem }) => {

  const sunrise = weatherData
  ? getTime(unitSystem, weatherData.daily.sunrise[0], weatherData.timezone)
  : null;
const sunset = weatherData
  ? getTime(unitSystem, weatherData.daily.sunset[0], weatherData.timezone)
  : null;


  return (
    <div className={styles.wrapper}>
      <MetricsCard
        title={"Humidity"}
        iconSrc={"/icons/humidity.png"}
        metric={weatherData.hourly.relative_humidity_2m[0]}
        unit={"%"}
      />
      <MetricsCard
        title={"Wind speed"}
        iconSrc={"/icons/wind.png"}
        metric={getWindSpeed(unitSystem, weatherData.hourly.wind_speed_10m[0])}
        unit={unitSystem == "metric" ? "m/s" : "m/h"}
      />
      <MetricsCard
        title={"Wind direction"}
        iconSrc={"/icons/compass.png"}
        metric={degToCompass(weatherData.hourly.wind_direction_10m[0])}
      />
      <MetricsCard
        title={"Visibility"}
        iconSrc={"/icons/binocular.png"}
        metric={getVisibility(unitSystem, weatherData.hourly.visibility[0])}
        unit={unitSystem == "metric" ? "km" : "miles"}
      />
      <MetricsCard
        title={"Sunrise"}
        iconSrc={"/icons/sunrise.png"}
        metric={sunrise}
        unit={getAMPM(
          unitSystem,
          weatherData.daily.sunrise[0],
          weatherData.timezone
        )}
      />
      <MetricsCard
        title={"Sunset"}
        iconSrc={"/icons/sunset.png"}
        metric={sunset}
        unit={getAMPM(unitSystem, weatherData.daily.sunset[0], weatherData.timezone)}
      />
    </div>
  );
};