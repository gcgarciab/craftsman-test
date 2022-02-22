import NProgress from 'nprogress';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const httpClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});

const responseBody = (response: AxiosResponse<any>) => response.data;

const requests = {
  get: (url: string, params?: {}) =>
    httpClient.get(url, { params }).then(responseBody),
  post: (url: string, body: {}) =>
    httpClient.post(url, body).then(responseBody),
  put: (url: string, body?: {}) => httpClient.put(url, body).then(responseBody),
  delete: (url: string) => httpClient.delete(url).then(responseBody),
};

/**
 * Start NProgress.
 */
httpClient.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    NProgress.start();
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Finish NProgress and return response or error.
 */
httpClient.interceptors.response.use(
  (response: AxiosResponse) => {
    NProgress.done();
    console.log(response);
    return response;
  },
  async (error) => {
    NProgress.done();
    console.log(error.response.data);
    return Promise.reject(error);
  }
);

export default requests;
