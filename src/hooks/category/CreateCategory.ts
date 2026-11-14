import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toasters from "@/utility/toaster";
import { apiUrl, ENDPOINTS } from "@/constant/Api";
import type { LoginResponse } from "@/type/Authnetication.Type";
import type { CreateCategory } from "@/type/categotyType";
import { api } from "@/constant/Axios";
import { useQueryClient } from "@tanstack/react-query";
import useModalHanlder from "@/store/useModals";
export function useCreateCategory() {
  const closeModal = useModalHanlder().setcategoryModal;
  const queryClient = useQueryClient();
  return useMutation<LoginResponse, AxiosError<LoginResponse>, CreateCategory>({
    mutationFn: async (data: CreateCategory) => {
      const res = await api.post<LoginResponse>(
        apiUrl(ENDPOINTS.CREATECATEGORY),
        data,
      );
      return res.data;
    },
    onSuccess: (data) => {
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
