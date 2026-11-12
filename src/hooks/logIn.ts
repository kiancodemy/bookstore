import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { apiUrl, ENDPOINTS } from "@/constant/Api";
import type { LoginResponse, LoginType } from "@/type/Authnetication.Type";
import { api } from "@/constant/Axios";
export function useLogin() {
  return useMutation<LoginResponse, AxiosError<LoginResponse>, LoginType>({
    mutationFn: async (data: LoginType) => {
      const res = await api.post<LoginResponse>(apiUrl(ENDPOINTS.LOGIN), data);
      return res.data;
    },
  });
}