import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const AxiosClient = Axios.create({
  baseURL: 'https://newsfeed-server.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 2000,
});

// Add a request interceptor
AxiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    // Do something before request is sent
    const accessToken = localStorage.getItem('token');

    if (accessToken) config.headers['Authorization'] = `Basic ${accessToken}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
AxiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error.data);
  }
);

export default AxiosClient;
