import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { EXPO_PUBLIC_API_URL } from "../config/app.config";


const client = axios.create({
  baseURL: EXPO_PUBLIC_API_URL,
  headers: {
    Accept: "application/json, text/plain, */*",
  },
});


client.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // const accessToken = localStorage.getItem(STORAGE_TOKEN.ACCESS_TOKEN);
    const accessToken = 'user token'
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export { client };