import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";
import { refreshToken } from "@/hooks/authentication/RefreshToken";
import useAuthStore from "@/store/useAuthStore";
interface RetryConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

export const api = axios.create({ withCredentials: true, timeout: 6000 });

// attach the current JWT to every request
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().jwtToken;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// on 401 → refresh once → retry the original request
api.interceptors.response.use(
  (res) => res,
  async (error: AxiosError) => {
    const original = error.config as RetryConfig;

    if (error.response?.status === 401 && !original._retry) {
      original._retry = true; // prevent infinite loop
      try {
        await refreshToken();

        const jwt = useAuthStore.getState().jwtToken;
        if (jwt) {
          return api(original);
        } else {
          window.location.href = "/login";
        }
      } catch {
        useAuthStore.getState().setJwtToken(null);
        window.location.href = "/login";
        // optionally redirect to login
      }
    }
    return Promise.reject(error);
  },
);
