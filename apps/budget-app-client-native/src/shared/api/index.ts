import axios from "axios";
import { EXPO_PUBLIC_API_URL } from "../config/app.config";


export const client = axios.create({
  baseURL: EXPO_PUBLIC_API_URL,
  headers: {
    Accept: "application/json, text/plain, */*",
  },
});