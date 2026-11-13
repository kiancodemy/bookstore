import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/constant/Axios";
import { apiUrl, ENDPOINTS } from "@/constant/Api";
import type { LoginResponse, resetpassword } from "@/type/Authnetication.Type";
import toasters from "@/utility/toaster";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@/store/useAuthStore";
export function useResetPassword() {
  const navigate = useNavigate();
  const setJwtToken = useAuthStore((s) => s.setJwtToken);
  return useMutation<LoginResponse, AxiosError<LoginResponse>, resetpassword>({
    mutationFn: async (data: resetpassword) => {
      const res = await  api.post<LoginResponse>(
        apiUrl(ENDPOINTS.RESETPASSWORD),
        data,
        { withCredentials: true },
      );
      return res.data;
    },
    onSuccess: (data) => {
      setJwtToken(typeof data.data === "string" ? data.data : null);
      toasters("success", data.message);
      navigate("/admin");
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
