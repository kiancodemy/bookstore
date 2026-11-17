import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toasters from "@/utility/toaster";
import useAuthStore from "@/store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { apiUrl, ENDPOINTS } from "@/constant/Api";
import type { LoginResponse, signInType } from "@/type/Authnetication.Type";

export function useSignIn() {
  const navigate = useNavigate();
  const setJwtToken = useAuthStore((s) => s.setJwtToken);
  return useMutation<LoginResponse, AxiosError<LoginResponse>, signInType>({
    mutationFn: async (data: signInType) => {
      const res = await axios.post<LoginResponse>(
        apiUrl(ENDPOINTS.SIGNUP),
        data,
        { withCredentials: true },
      );
      return res.data;
    },
    onSuccess: (data) => {
      toasters("success", data.message);
      setJwtToken(typeof data.data === "string" ? data.data : null);
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

      // I will fire first
    },
  });
}
