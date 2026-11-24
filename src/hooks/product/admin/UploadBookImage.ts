import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toasters from "@/utility/toaster";
import { apiUrl, ENDPOINTS } from "@/constant/Api";
import { api } from "@/constant/Axios";
import type {
  UploadBookImageResponse,
  UploadBookImageVariables,
} from "@/type/Product";
import { useQueryClient } from "@tanstack/react-query";
export function useUPloadBookImage() {
  const queryClient = useQueryClient();

  return useMutation<
    UploadBookImageResponse,
    AxiosError<UploadBookImageResponse>,
    UploadBookImageVariables
  >({
    mutationFn: async ({ id, formData }) => {
      const res = await api.post<UploadBookImageResponse>(
        apiUrl(`${ENDPOINTS.UPLOADBOOKIMAGE}/${id}`),
        formData,
        { timeout: 17000 },
      );
      return res.data;
    },
    onSuccess: (data,{ id }) => {
      toasters("success", data.message);
      queryClient.invalidateQueries({
        queryKey: ["getSingleBook", id],
      });
    },
    onError: (error) => {
      if (error.code === "ECONNABORTED") {
        toasters(
          "error",
          "زمان درخواست به پایان رسید. لطفاً دوباره ارسال کنید کنید.",
        );
        return;
      }
      toasters("error", error.response?.data.message || "خطای داخلی");

      // I will fire first
    },
  });
}
