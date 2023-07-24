import { NextWeathersType } from "./useWeather";

export const convertHourlyToDailyWeathers = (
  weathers: NextWeathersType[] = []
) => {
  let dailyWeathers: any[] = [];
  let tmpdailyWeathers: any[] = [];
  let currentDate = "";

  weathers.forEach((weather) => {
    let [weatherDate] = weather.dt_txt.split(" ");

    tmpdailyWeathers.push(weather);
    if (currentDate !== weatherDate) {
      dailyWeathers.push(tmpdailyWeathers);
      tmpdailyWeathers = [];
      currentDate = weatherDate;
    }
  });
  return dailyWeathers.map((weathers) => weathers[0]);
};
