import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toasters from "@/utility/toaster";

import { apiUrl, ENDPOINTS } from "@/constant/Api";
import type { LoginResponse, LoginType } from "@/type/Authnetication.Type";
import { api } from "@/constant/Axios";
export function useSubCreateCategory() {
  return useMutation<LoginResponse, AxiosError<LoginResponse>, LoginType>({
    mutationFn: async (data: LoginType) => {
      const res = await api.put<LoginResponse>(
        apiUrl(ENDPOINTS.UPDATESUBCATEGORY),
        data,
      );
      return res.data;
    },
    onSuccess: (data) => {
      toasters("success", data.message);
    },
    onError: (error) => {
      if (error.code === "ECONNABORTED") {
        toasters(
          "error",
          "زمان درخواست به پایان رسید. لطفاً دوباره تلاش کنید.",
        );
        return;
      }
      toasters("error", error.response?.data.message || "خطای داخلی");

      // I will fire first
    },
  });
}
