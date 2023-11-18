import axios from "axios";
import { STORE_API_DOMAIN } from "@/constants/service";
import http from "./http";

export const getTemplate = (endpoint = "", data: any = null) => {
  const response = axios.get(`${STORE_API_DOMAIN}/${endpoint}`);
  return response.then((res) => res.data);
};

export const apiGetBanners = () => http.get(`/banner`);
