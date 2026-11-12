import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { apiUrl, ENDPOINTS } from "@/constant/Api";
import type { LoginResponse,resetpassword } from "@/type/Authnetication.Type";

export function useResetPassword() {
  return useMutation<LoginResponse, AxiosError<LoginResponse>,resetpassword>({
    mutationFn: async (data: resetpassword) => {
      const res = await axios.post<LoginResponse>(apiUrl(ENDPOINTS.RESETPASSWORD), data,{withCredentials:true});
      return res.data;
    },
  });
}