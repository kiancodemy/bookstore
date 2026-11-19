import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import toasters from "@/utility/toaster";
import { apiUrl, ENDPOINTS } from "@/constant/Api";
import type { LoginResponse } from "@/type/Authnetication.Type";
import { api } from "@/constant/Axios";
import type { CreateBookType } from "@/type/Product";
export function useCreateNewBook() {
  const navigate = useNavigate();
  return useMutation<LoginResponse, AxiosError<LoginResponse>, CreateBookType>({
    mutationFn: async (data: CreateBookType) => {
      const res = await api.post<LoginResponse>(
        apiUrl(ENDPOINTS.CREATENEWBOOK),
        data,
      );
      return res.data;
    },
    onSuccess: (data) => {
      toasters("success", data.message);
      navigate("/admin/products")
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
