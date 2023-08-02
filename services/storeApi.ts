import axios from "axios";
import { STORE_API_DOMAIN } from "@/constants/service";

export const getTemplate = (endpoint = "", data: any = null) => {
  const response = axios.get(
    `${STORE_API_DOMAIN}/${endpoint}`
  );
  return response.then((res) => res.data);
};
