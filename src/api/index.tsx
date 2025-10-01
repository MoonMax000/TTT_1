import axios from 'axios';

export const authApi = axios.create({
  baseURL: 'https://authservice.tyriantrade.com/api',
  withCredentials: true,
});

export const streamApi = axios.create({
  baseURL: 'https://streamer.k8s.tyriantrade.com/api/v1',
  withCredentials: true,
});

export const api = axios.create({
  baseURL: 'https://auth.k8s.tyriantrade.com/api/v1',
  withCredentials: true,
});

export const recomendationApi = axios.create({
  baseURL: 'https://recomendation.k8s.tyriantrade.com/api/v1',
  withCredentials: true,
});

authApi.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    if ((status === 401 || status === 403) && typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      console.log(currentPath !== '/guest');
      if (currentPath !== '/guest') {
        window.location.href = '/guest';
      }
    }

    return Promise.reject(error);
  },
);
