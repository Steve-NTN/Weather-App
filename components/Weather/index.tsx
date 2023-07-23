import Loading from "@/components/Loading";
import React from "react";
import useWeather from "./useWeather";
import { getWeatherImageUrl } from "@/utils/imageHelpers";
import "@/styles/Weather.styles.scss";

type Props = {};

const Weather = (props: Props) => {
  const { loading, weatherDetail, searchAddress, onChangeSearchAddress } =
    useWeather();

  let { name, sys, main, weather } = weatherDetail;
  let { temp, temp_min, temp_max } = main;
  let { icon, description, main: mainWeather } = weather[0];

  return (
    <div className="main">
      {loading && <Loading />}

      <div className="flex min-h-full flex-col justify-center px-6 py-6 max-w-screen-lg mx-auto">
        <input
          className="bg-gray-200 shadow-inner rounded-l p-2 flex-1 w-full"
          placeholder="Enter address"
          value={searchAddress}
          onChange={(e) => onChangeSearchAddress(e.target.value)}
        />

        {name && (
          <div className="rounded my-6 py-4">
            <div className="flex justify-between text-white">
              <div>
                {/* ĐỊA CHỈ */}
                <h5 className="font-bold text-2xl">
                  {name} <span className="text-sm">({sys.country})</span>
                </h5>

                {/* NHIỆT ĐỘ */}
                <p className="font-bold text-6xl">
                  {temp}&deg;C
                </p>
              </div>

              <div className="text-center">
                <img
                  src={getWeatherImageUrl(icon)}
                  alt="img"
                  width="100%"
                  className="weather-icon"
                />
                <p className="font-bold">{mainWeather}</p>
                <p className="font-bold">{description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
