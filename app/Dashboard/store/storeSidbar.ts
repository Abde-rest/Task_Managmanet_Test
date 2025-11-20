import { create } from "zustand";

const storeSidbar = create((set) => ({
  isOpen: false,
  setIsOpenSidbar: (state: boolean) => set({ isOpen: state }),
}));

export default storeSidbar;
