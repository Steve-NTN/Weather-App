import { getTemplate } from "@/services/weatherApi";
import { FC, useEffect, useMemo, useState } from "react";
import { useSearchTerm } from "@/hooks/useSearchTerm";
import { convertHourlyToDailyWeathers } from "./utils";

type WeatherDetailType = {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    feels_like: number;
    sea_level: number;
  };
  weather: {
    icon: string;
    main: string;
    description: string;
  }[];
};

export type NextWeathersType = {
  main: {
    temp: number;
  };
  weather: {
    main: string;
    icon: string;
  }[];
  dt_txt: string
};

type LatLongType = {
  lat?: number;
  lon?: number;
};

type SubWeatherInformationsType = {
  label?: string;
  value?: FC | string | number;
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
      pressure: 0,
      humidity: 0,
      feels_like: 0,
      sea_level: 0,
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
  const [nextWeathers, setNextWeathers] = useState<NextWeathersType[]>([]);
  const [latLong, setLatLong] = useState<LatLongType>({});
  const [searchAddress, setsearchAddress] = useState("");
  const { tmpValue } = useSearchTerm(searchAddress, 500);

  const onChangeSearchAddress = (value: string) => {
    setsearchAddress(value);
  };

  // THÔNG TIN THỜI TIẾT PHỤ
  const subWeatherInformations: SubWeatherInformationsType[] = useMemo(() => {
    let { temp_min, temp_max, pressure, humidity, feels_like, sea_level } =
      weatherDetail.main;
    return [
      { label: `${temp_min}°C - ${temp_max}°C` },
      { label: "Feels like", value: `${feels_like}°C` },
      { label: "Pressure", value: pressure },
      { label: "Humidity", value: humidity },
      { label: "Sea level", value: sea_level },
    ];
  }, [weatherDetail]);

  // LẤY THÔNG TIN THỜI TIẾT HIỆN TẠI
  useEffect(() => {
    setLoading(true);
    getTemplate(`data/2.5/weather?q=${searchAddress}&units=metric`)
      .then((res) => {
        setLoading(false);
        setWeatherDetail(res);
        setLatLong(res.coord);
      })
      .catch((err) => setLoading(false));
  }, [tmpValue]);

  // LẤY THÔNG TIN THỜI TIẾT 5 NGÀY TIẾP
  useEffect(() => {
    let { lat, lon } = latLong;
    if (lat && lon) {
      getTemplate(`data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric`)
        .then((res) => {
          setNextWeathers(convertHourlyToDailyWeathers(res.list || []));
        })
        .catch((err) => setLoading(false));
    }
  }, [latLong]);

  return {
    nextWeathers,
    subWeatherInformations,
    weatherDetail,
    loading,
    searchAddress,
    onChangeSearchAddress,
  };
};

export default useWeather;
