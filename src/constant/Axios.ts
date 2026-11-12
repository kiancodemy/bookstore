import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";
import { refreshToken } from "@/hooks/RefreshToken";
import useAuthStore from "@/store/useAuthStore";

interface RetryConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

export const api = axios.create({ withCredentials: true });

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
        await refreshToken(); // ✅ re-run refresh here
        return api(original); // retry the failed request
      } catch {
        useAuthStore.getState().setJwtToken(null);
        // optionally redirect to login
      }
    }
    return Promise.reject(error);
  },
);
