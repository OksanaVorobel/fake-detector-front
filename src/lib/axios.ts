import Axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from 'axios';

import storage from './storage';

const BASE_URL = 'http://localhost:8000';

export const api: AxiosInstance = Axios.create({
  baseURL: BASE_URL,
});

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = storage.getToken();

  if (!config.headers) return config;

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  // config.headers['Content-Type'] ??= 'application/json';
  config.headers['x-access-token'] = token;
  config.headers.Accept = 'application/json';

  return config;
}

const AUTH_ERROR_CODES = [401, 403];

api.interceptors.request.use(authRequestInterceptor);
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const code = error.response?.status;

    if (code && AUTH_ERROR_CODES.includes(code)) {
      // TODO handle refresh token
      window.location.pathname = '/';

      return;
    } else {
      return Promise.reject(error);
    }
  },
);
