import { create } from "zustand";
interface AuthState {
  jwtToken: string | null;
  setJwtToken: (token: string | null) => void;
  clearjwtToekn: () => void;
}
const useAuthStore = create<AuthState>((set) => ({
  // state
  jwtToken: null,

  // actions
  setJwtToken: (token) => set({ jwtToken: token }),
  clearjwtToekn: () => set({ jwtToken: null }),
}));

export default useAuthStore;
