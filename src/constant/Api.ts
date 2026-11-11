
export const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:9091";

export const ENDPOINTS = {
  LOGIN: "/api/v1/auth/login",
  SIGNUP: "/api/v1/auth/signup",
  LOGOUT: "/api/v1/auth/",
  FORGETPASSWORD: "/products",
  RESETPASSWORD: "/products",
  ALLCATEGORY: "/products",
  ALLSUBCATGEGORY: "/products",
};

// helper to build full URLs
export const apiUrl = (endpoint:string) => `${API_URL}${endpoint}`;