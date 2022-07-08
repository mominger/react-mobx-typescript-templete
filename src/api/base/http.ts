import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import Config from '@/helper/config';

enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

const instance = axios.create({
  baseURL: Config.BASE_URL,
  timeout: 5 * 60 * 1000, // 5 minute
});

function excute<T = any>(
  url: string,
  method: Method,
  data?: object,
  config?: AxiosRequestConfig,
): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const axiosConfig = {
      url,
      method,
      data,
      ...config,
    };

    if (method === Method.GET || method === Method.DELETE) {
      axiosConfig.params = data;
    }

    instance
      .request<T>(axiosConfig)
      .then((result: AxiosResponse) => {
        if (result.status >= 200 && result.status < 400) {
          resolve(result.data);
        } else {
          reject(new Error('http error: ' + result.status));
        }
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
}

const createMethod =
  (method: Method) =>
  <T>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig,
  ): Promise<any> => {
    return excute<T>(url, method, data, config);
  };

const http = {
  get: createMethod(Method.GET),
  post: createMethod(Method.POST),
  put: createMethod(Method.PUT),
  delete: createMethod(Method.DELETE),
};

export default http;
