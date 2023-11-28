import axios, { AxiosError } from 'axios';
import { router } from '../router';
import { store } from '../store';
export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL
})

api.interceptors.response.use(undefined, (error: AxiosError) => {
  if (error?.response?.status === 401) {
    store.userToken = '';
    router.push('/login');
  }

  throw error;
});

api.interceptors.request.use((request) => {
  request.headers.Authorization = `Bearer ${store.userToken}`;

  return request;
}, undefined);