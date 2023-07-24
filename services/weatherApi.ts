import { WEATHER_API_KEY } from "@/constants/service";
import axios from "axios";

export const getTemplate = (endpoint = "", data: any = null) => {
  const response = axios.get(
    `${process.env.NEXT_PUBLIC_WEATHER_API_DOMAIN}/${endpoint}&appid=${WEATHER_API_KEY}`
  );
  return response.then((res) => res.data);
};
