import axios from "axios";

export const getTemplate = (endpoint = "", data: any = null) => {
  const response = axios.get(
    `${process.env.NEXT_PUBLIC_WEATHER_API_DOMAIN}/${endpoint}`
  );
  return response.then((res) => res.data);
};
