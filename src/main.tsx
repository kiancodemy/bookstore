import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,          // no retries for any query
      staleTime: 1000 * 60 * 60,  // optional — your 1 hour cache
      gcTime: 1000 * 60 * 60,
    },
    mutations: {
      retry: 0,          // no retries for any mutation
    },
  },
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
     <ToastContainer rtl limit={1} closeButton={false} toastClassName="font-iran text-base font-semibold" />
  </StrictMode>,
);
