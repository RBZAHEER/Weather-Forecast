import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function SearchBox({ update }) {
  let [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "d674a1fed4d09ad23127919bf702d2fc";

  let getWeatherInfo = async () => {
    let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonRes = await res.json();
    let result = {
      temp: jsonRes.main.temp,
      tempMin: jsonRes.main.temp_min,
      tempMax: jsonRes.main.temp_max,
      humidity: jsonRes.main.humidity,
      feelsLike: jsonRes.main.feels_like,
      weather: jsonRes.weather[0].description,
    };
    console.log(result);
    return result;
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    console.log(city);
    event.preventDefault();
    setCity("");
    let newInfo = await getWeatherInfo();
    update(newInfo);
  };
  return (
    <div>
      <h1>Weather ForeCast</h1>

      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          style={{ marginBottom: 10 }}
        />{" "}
        &nbsp;
        <Button variant="outlined" startIcon={<SearchIcon />} type="submit">
          Search
        </Button>
        <br />
      </form>
    </div>
  );
}
