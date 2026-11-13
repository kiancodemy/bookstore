import { useMutation } from "@tanstack/react-query";
import{ AxiosError } from "axios";
import { api } from "@/constant/Axios";
import type{ forgetpassword } from "@/type/Authnetication.Type";
import { apiUrl, ENDPOINTS } from "@/constant/Api";
import type { LoginResponse } from "@/type/Authnetication.Type";
import toasters from "@/utility/toaster";
import { useNavigate } from "react-router-dom";
export function useForgetPassword() {
  const navifgate=useNavigate();
  return useMutation<LoginResponse, AxiosError<LoginResponse>, forgetpassword>({
    mutationFn: async (data: forgetpassword) => {
      const res = await api.post<LoginResponse>(apiUrl(ENDPOINTS.FORGETPASSWORD), data,{withCredentials:true});
      return res.data;
    },
     onSuccess: (data) => {
      toasters("success", data.message);
      navifgate("/resetpassword")
     
    },
    onError: (error) => {
        if (error.code === "ECONNABORTED") {
        toasters("error", "زمان درخواست به پایان رسید. لطفاً دوباره تلاش کنید.");
        return;
      }
      toasters("error", error.response?.data.message||"خطای داخلی");

      // I will fire first
    },
  });
}