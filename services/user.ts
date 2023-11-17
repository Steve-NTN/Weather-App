import http from "services/http";

const PRE_ENDPOINT = "user";

export const apiLogin = (data: any) => http.post(`${PRE_ENDPOINT}/login`, data);
