import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import useAuthStore from "@/store/useAuthStore";
import toasters from "@/utility/toaster";
import { useNavigate } from "react-router-dom";

import { apiUrl, ENDPOINTS } from "@/constant/Api";
import type { LoginResponse, LoginType } from "@/type/Authnetication.Type";
import { api } from "@/constant/Axios";
export function useLogin() {
  const navigate = useNavigate();

  // zustand wjt token setterr //
  const setJwtToken = useAuthStore((s) => s.setJwtToken);
  return useMutation<LoginResponse, AxiosError<LoginResponse>, LoginType>({
    mutationFn: async (data: LoginType) => {
      const res = await api.post<LoginResponse>(apiUrl(ENDPOINTS.LOGIN), data);
      return res.data;
    },
    onSuccess: (data) => {
      toasters("success", data.message);
      setJwtToken(typeof data.data === "string" ? data.data : null);
      navigate("/admin");
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
