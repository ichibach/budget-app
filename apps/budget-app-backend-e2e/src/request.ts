import axios from "axios";
import 'dotenv/config';

const TESTING_API_BASE_URL = process.env.TESTING_API_BASE_URL; 

if(!TESTING_API_BASE_URL) {
  throw new Error('Env variable TESTING_API_BASE_URL has not provided')
}

export const request = axios.create({
  baseURL: process.env.TESTING_API_BASE_URL
})
