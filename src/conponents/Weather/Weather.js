import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Box from "@mui/material/Box";

import { weatherService } from "../../services/weatherServise";
import queryParams from "../../constants/queryParams";
import WeatherForecast from "../WeatherForecast/WeatherForecast";
import SelectForm from "../Selects/SelectForm";

const Weather = () => {
  const [query, setQuery] = useSearchParams(queryParams);
  const [temp, setTemp] = useState([]);
  const [weather, setWeather] = useState([]);
  const [wind, sendWind] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const queryData = Object.fromEntries([...query]);

    weatherService
      .SearchWeather(queryData)
      .then(({ data }) => {
        setWeather(data.weather[0]);
        setTemp(data.main);
        setInfo(data);
        sendWind(data.wind);
      })
      .catch((error) => {
        console.log(error, "Error in request");
      });
  }, [query]);

  return (
    <Box>
      <SelectForm />
      <>
        <WeatherForecast
          weatherF={weather}
          temp={temp}
          wind={wind}
          info={info}
        />
      </>
    </Box>
  );
};
export default Weather;
