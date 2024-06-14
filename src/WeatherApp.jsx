import { dividerClasses } from "@mui/material";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    feelsLike: 31.1,
    humidity: 55,
    temp: 29.52,
    tempMax: 29.52,
    tempMin: 29.52,
    weather: "overcast clouds",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div>
      <SearchBox update={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
