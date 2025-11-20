// useDialogEmail.js
import { create } from "zustand";

const storDialogEmail = create((set) => ({
  isOpen: false,
  setIsOpen: (state: boolean) => set({ isOpen: state }),
}));

export default storDialogEmail;
