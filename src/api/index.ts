import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const AxiosClient = Axios.create({
  baseURL: 'https://newsfeed-server.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
  // timeout: 2000,
});

// const isTokenExpired = false;
let refreshTokenRequest: Promise<string> | null;

// Add a request interceptor
AxiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    // Do something before request is sent
    const accessToken = localStorage.getItem('token');

    if (accessToken) config.headers['Authorization'] = `Bearer ${accessToken}`;
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
    const originalConfig = error.config;

    if (originalConfig.url !== '/login' && error.response) {
      // Access Token was expired
      if (error.response.status === 401) {
        if (refreshTokenRequest) {
          refreshTokenRequest.then((token: string) => {
            originalConfig.headers['Authorization'] = `Bearer ${token}`;
          });
        } else {
          const refreshToken = localStorage.getItem('refresh-token');
          refreshTokenRequest = AxiosClient.post('/token', {
            refreshToken,
          }).then((res) => {
            refreshTokenRequest = null;
            const { token } = res.data;
            localStorage.setItem('token', token);
            return token;
          });
        }
      }
    }

    return Promise.reject(error);
  }
);

export default AxiosClient;
