import { create } from "zustand";
interface AuthState {
  categoryModal: boolean;
  subcategoryModal: boolean;
  setcategoryModal: (open: boolean) => void;
  setSubcategoryModal: (open: boolean) => void;
}
const useModalHanlder = create<AuthState>((set) => ({
  categoryModal: false,
  subcategoryModal: false,
  setcategoryModal: (open) => {
    set({ categoryModal: open });
  },
  setSubcategoryModal: (open) => {
    set({ subcategoryModal: open });
  },
}));

export default useModalHanlder;
