import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import type{ forgetpassword } from "@/type/Authnetication.Type";
import { apiUrl, ENDPOINTS } from "@/constant/Api";
import type { LoginResponse } from "@/type/Authnetication.Type";

export function useForgetPassword() {
  return useMutation<LoginResponse, AxiosError<LoginResponse>, forgetpassword>({
    mutationFn: async (data: forgetpassword) => {
      const res = await axios.post<LoginResponse>(apiUrl(ENDPOINTS.FORGETPASSWORD), data,{withCredentials:true});
      return res.data;
    },
  });
}