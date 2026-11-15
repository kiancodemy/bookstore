import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toasters from "@/utility/toaster";

import type { CreateSubCategory } from "@/type/SubCategory";
import { apiUrl, ENDPOINTS } from "@/constant/Api";
import type { LoginResponse } from "@/type/Authnetication.Type";
import { api } from "@/constant/Axios";
import useModalHanlder from "@/store/useModals";
import { useQueryClient } from "@tanstack/react-query";
export function useCreatSubCategory() {
   const closeModal = useModalHanlder().setSubcategoryModal;
  const queryClient = useQueryClient();
  return useMutation<
    LoginResponse,
    AxiosError<LoginResponse>,
    CreateSubCategory
  >({
    mutationFn: async (data: CreateSubCategory) => {
      const res = await api.post<LoginResponse>(
        apiUrl(ENDPOINTS.CREATESUBCATEGORY),
        data,
      );
      return res.data;
    },
    onSuccess: (data) => {
      toasters("success", data.message);
      closeModal(false);
      toasters("success", data.message);
      queryClient.invalidateQueries({ queryKey: ["allcategory"] });
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
