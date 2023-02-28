import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {weatherService} from "../../services/weatherServise";
import queryParams from "../../constants/queryParams";
import Box from "@mui/material/Box";
import WeatherForecast from "../WeatherForecast/WeatherForecast";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import cities from "../../constants/cities";
import SelectForm from "../Selects/SelectForm";

const Weather = () => {


    const [query, setQuery] = useSearchParams(queryParams)
    const [temp, setTemp] = useState([])
    const [weather, setWeather] = useState([])
    const [wind, sendWind] = useState([])
    const [info, setInfo] = useState([])

    useEffect(() => {
        const queryData = Object.fromEntries([...query]);
        console.log(queryData, "data");

        weatherService
            .SearchWeather(queryData)
            .then(({ data }) => {
                setWeather(data.weather[0]);
                setTemp(data.main)
                setInfo(data)
                sendWind(data.wind)

              console.log(data.weather[0], 'weather')
                console.log(data.main,'temp')
                console.log (data,'data')


            })
            .catch((error) => {
                console.log(error, "Error in request");
            });
    }, [query]);


    return (

        <Box>
            <SelectForm/>
            <>
<WeatherForecast weatherF={weather} temp={temp} wind={wind} info={info}/>
            </>
        </Box>
    )
}
export default Weather