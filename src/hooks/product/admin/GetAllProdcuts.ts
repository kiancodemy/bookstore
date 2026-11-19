import { useQuery } from "@tanstack/react-query";
import { apiUrl, ENDPOINTS } from "@/constant/Api";
import { api } from "@/constant/Axios";
import { useSearchParams } from "react-router-dom";

import type { productResponse } from "@/type/Product";
import { AxiosError } from "axios";


export function useGetAllAdminBooks() {
  /// gettting all the queries of url;
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());

  return useQuery<productResponse,AxiosError<productResponse>>({
    queryKey: ["allBooks",params],
    queryFn: async ({ signal }) => {
      const res = await api.get(apiUrl(ENDPOINTS.GETALLADMINBOOKS), {
        signal,
        params,
      });
      return res.data;
    },
  });
}
