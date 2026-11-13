import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { apiUrl, ENDPOINTS } from "@/constant/Api";
import type { LoginResponse} from "@/type/Authnetication.Type";

export function useLogin() {
  return useMutation<LoginResponse, AxiosError<LoginResponse>>({
    mutationFn: async () => {
      const res = await axios.post<LoginResponse>(apiUrl(ENDPOINTS.LOG));
      return res.data;
    },
  });
}