import { api } from "@/constant/Axios";
import axios from "axios";
import { apiUrl, ENDPOINTS } from "@/constant/Api";
import useAuthStore from "@/store/useAuthStore";
import type { LoginResponse } from "@/type/Authnetication.Type";

let refreshPromise: Promise<string | null> | null = null;

export function refreshToken(): Promise<string | null> {
  if (refreshPromise) return refreshPromise; // dedupe concurrent refreshes

  refreshPromise = api
    .post<LoginResponse>(apiUrl(ENDPOINTS.REFRESHTOKEN))
    .then((res) => {
      const token = typeof res.data.data === "string" ? res.data.data : null;
      console.log(token);
      useAuthStore.getState().setJwtToken(token);
      return token;
    })
    .catch(() => {
      useAuthStore.getState().setJwtToken(null);
      return null;
    })
    .finally(() => {
      refreshPromise = null;
    });

  return refreshPromise;
}
