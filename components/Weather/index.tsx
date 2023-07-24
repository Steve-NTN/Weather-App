import Loading from "@/components/Loading";
import React from "react";
import useWeather from "./useWeather";
import { getWeatherImageUrl } from "@/utils/imageHelpers";
import "@/styles/Weather.styles.scss";
import Image from "next/image";

type Props = {};

const Weather = (props: Props) => {
  const {
    nextWeathers,
    subWeatherInformations,
    loading,
    weatherDetail,
    searchAddress,
    onChangeSearchAddress,
  } = useWeather();

  let { name, sys, main, weather } = weatherDetail;
  let { temp } = main;
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
          <div className="rounded my-6 py-4 text-white">
            <div className="flex justify-between">
              {/* ĐỊA CHỈ VÀ NHIỆT ĐỘ */}
              <div>
                <h5 className="font-bold text-2xl">
                  {name} <span className="text-sm">({sys.country})</span>
                </h5>
                <p className="font-bold text-6xl">{temp}&deg;C</p>
              </div>

              {/* ẢNH VÀ THỜI TIẾT HIỆN TẠI */}
              <div className="text-center">
                <Image
                  src={getWeatherImageUrl(icon)}
                  alt="img"
                  className="weather-icon"
                />
                <p className="font-bold">{mainWeather}</p>
                <p className="font-bold">{description}</p>
              </div>
            </div>

            {/* THÔNG TIN PHỤ */}
            <div className="text-center my-4">
              {subWeatherInformations.map((infor, idx) => (
                <p key={idx}>
                  <span className="font-bold">
                    {infor.label && `${infor.label}: `}
                  </span>
                  <>{infor.value}</>
                </p>
              ))}
            </div>

            {/* THÔNG TIN MẤY NGÀY TIẾP */}
            <div className="grid grid-cols-4 md:grid-cols-6 gap-2 mt-6">
              {nextWeathers.map((nexWeather, id) => {
                let { main: weatherMain, weather } = nexWeather;
                let { temp } = weatherMain;
                let { icon, main } = weather[0];
                return (
                  <div className="weather-box text-center" key={id}>
                    <p className="text-xl font-bold">{temp}</p>
                    <Image
                      src={getWeatherImageUrl(icon)}
                      alt="img"
                      className="mx-auto"
                    />
                    <p>{main}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
