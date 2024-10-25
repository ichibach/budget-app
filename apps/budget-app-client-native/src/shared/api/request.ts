import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { client } from "./client";

export const request = async <T = any>(options: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  const onSuccess = (response: AxiosResponse) => {
    // additional logic here
    return response;
  };

  const onError = function (error: AxiosError) {
    return Promise.reject({
      message: error.message,
      code: error.code,
      response: error.response,
    });
  };

  return client(options).then(onSuccess).catch(onError);
};

export type RequestFn = typeof request;