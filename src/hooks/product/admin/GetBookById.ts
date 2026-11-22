import { useQuery } from "@tanstack/react-query";
import { apiUrl, ENDPOINTS } from "@/constant/Api";
import { api } from "@/constant/Axios";

import type { productResponse } from "@/type/Product";
import { AxiosError } from "axios";

export function useGetBookById(id: number) {
  return useQuery<productResponse, AxiosError<productResponse>>({
    queryKey: ["getSingleBook", id], // ← include id so it refetches per id
    queryFn: async ({ signal }) => {
      const res = await api.get(
        `${apiUrl(ENDPOINTS.GETSingleBook)}/${id}`, // ← actual id
        { signal }
      );
      return res.data;
    },
    enabled: !!id, // don't fire when id is undefined/0
  });
}