import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useQueryClient } from "@tanstack/react-query";
import toasters from "@/utility/toaster";
import { apiUrl, ENDPOINTS } from "@/constant/Api";
import type { SingBookRespopnse } from "@/type/Product";
import { api } from "@/constant/Axios";
import type { UpdateBookType } from "@/type/Product";

export function useUPdateBook() {
  const queryClient = useQueryClient();

  return useMutation<
    SingBookRespopnse,
    AxiosError<SingBookRespopnse>,
    UpdateBookType
  >({
    mutationFn: async (data: UpdateBookType) => {
      const res = await api.put<SingBookRespopnse>(
        apiUrl(ENDPOINTS.UPDATESingleBook),
        data,
      );
      return res.data;
    },
    onSuccess: (data) => {
      toasters("success", data.message);

      queryClient.invalidateQueries({
        queryKey: ["getSingleBook", data.data.id],
      });
      queryClient.invalidateQueries({
        queryKey: ["allBooks"],
      });
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
    },
  });
}
