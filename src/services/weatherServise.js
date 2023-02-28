import {urls} from "../configs";
import {axiosService} from "./axiosService";

const weatherService = {
    SearchWeather: ({ q="", units ="", lang ='', appid="" }) =>
        axiosService.get(urls.forecast, { params: {q, units, lang, appid } }),
};

export { weatherService };
