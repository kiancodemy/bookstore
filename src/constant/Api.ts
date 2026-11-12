
export const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:9091";

export const ENDPOINTS = {
  LOGIN: "/api/v1/auth/login",
  SIGNUP: "/api/v1/auth/signup",
  LOGOUT: "/api/v1/auth/logout",
  FORGETPASSWORD: "/api/v1/auth/forgetPassword",
  RESETPASSWORD: "/api/v1/auth/resetPassword",
  REFRESHTOKEN: "/api/v1/auth/refreshtoken/verify",

};

// helper to build full URLs
export const apiUrl = (endpoint:string) => `${API_URL}${endpoint}`;