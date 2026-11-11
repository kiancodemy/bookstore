import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { apiUrl, ENDPOINTS } from "@/constant/Api";
import type { LoginResponse, signInType } from "@/type/Authnetication.Type";

export function useSignIn() {
  return useMutation<LoginResponse, AxiosError<LoginResponse>, signInType>({
    mutationFn: async (data: signInType) => {
      const res = await axios.post<LoginResponse>(
        apiUrl(ENDPOINTS.SIGNUP),
        data,
        {withCredentials:true}
      );
      return res.data;
    },
  });
}
