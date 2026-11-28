import { useQuery } from "@tanstack/react-query";
import { apiUrl, ENDPOINTS } from "@/constant/Api";
import { api } from "@/constant/Axios";
import type{ allOrderStatusResponse } from "@/type/categotyType";
import { AxiosError } from "axios";
export function useAllOrderStatus() {
  return useQuery<allOrderStatusResponse, AxiosError<allOrderStatusResponse>>({
    queryKey: ["allorderstatus"],
    queryFn: async ({ signal }) => {
      const res = await api.get(apiUrl(ENDPOINTS.GETALLORDERSTATUS), {
        signal,
      });
      return res.data;
    },
  });
}
