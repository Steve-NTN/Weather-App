import { APP_API_DOMAIN } from "@/constants/service";
import axios from "axios";

const http = axios.create({
  baseURL: APP_API_DOMAIN,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

export default http;
