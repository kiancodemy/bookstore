import { useQuery } from "@tanstack/react-query";
import { apiUrl, ENDPOINTS } from "@/constant/Api";
import { api } from "@/constant/Axios";
import type { LoginResponse } from "@/type/Authnetication.Type";
import { AxiosError } from "axios";
import type { CategoryResponse } from "@/type/categotyType";
export function useAllCategory() {
  return useQuery<CategoryResponse, AxiosError<LoginResponse>>({
    queryKey: ["allcategory"],
    queryFn: async () => {
      const res = await api.get(apiUrl(ENDPOINTS.allCategory));
      return res.data;
    },
    
  });
}
