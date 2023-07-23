import { getTemplate } from "@/services/weatherApi";
import { useEffect, useState } from "react";
import { WEATHER_API_KEY } from "@/constants/service";

type WeatherDetailType = {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: {
    icon: string;
    main: string;
    description: string;
  }[];
};

const useWeather = () => {
  const [weatherDetail, setWeatherDetail] = useState<WeatherDetailType>({
    name: "",
    sys: {
      country: "",
    },
    main: {
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    },
    weather: [
      {
        icon: "",
        main: "",
        description: "",
      },
    ],
  });
  const [loading, setLoading] = useState(true);
  const [searchAddress, setsearchAddress] = useState("");

  const onChangeSearchAddress = (value: string) => {
    setsearchAddress(value);
  };

  useEffect(() => {
    setLoading(true);
    getTemplate(
      `data/2.5/weather?q=${searchAddress}&appid=${WEATHER_API_KEY}&units=metric`
    )
      .then((res) => {
        setLoading(false);
        setWeatherDetail(res);
      })
      .catch((err) => setLoading(false));
  }, [searchAddress]);

  return { weatherDetail, loading, searchAddress, onChangeSearchAddress };
};

export default useWeather;
