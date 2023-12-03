import _axios, { AxiosResponse } from 'axios';

const axios = _axios.create({
  baseURL: '/',
  timeout: 3000,
  // withCredentials: true,
  // headers: { 'X-Custom-Header': 'foobar' },
});

// preRequest
axios.interceptors.request.use(
  (config) => {
    // NProgress.start();
    return config;
  },
  (error) => {
    // NProgress.done();
    // alert('Request Error');
    return Promise.resolve(error);
  },
);

// preResponse
axios.interceptors.response.use(
  (response) => {
    // NProgress.done();
    return response;
  },
  (error) => {
    // NProgress.done();
    // alert('Response Error');
    return Promise.resolve(error.response);
  },
);

export type Response<T> = AxiosResponse<T>;

export default axios;
