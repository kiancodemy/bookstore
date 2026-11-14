import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toasters from "@/utility/toaster";
import type { updateCategory } from "@/type/categotyType";

import { apiUrl, ENDPOINTS } from "@/constant/Api";
import type { LoginResponse} from "@/type/Authnetication.Type";
import { api } from "@/constant/Axios";
export function useUpdateCategory() {
 

  return useMutation<LoginResponse, AxiosError<LoginResponse>,updateCategory>({
    mutationFn: async (data: updateCategory) => {
      const res = await api.put<LoginResponse>(apiUrl(ENDPOINTS.UPDATECATEGORY), data);
      return res.data;
    },
    onSuccess: (data) => {
      toasters("success", data.message);
    
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
