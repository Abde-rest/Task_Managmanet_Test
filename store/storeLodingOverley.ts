// useDialogEmail.js
import { create } from "zustand";

interface TypeLodingOverly {
  isOpen: boolean;
  message: string;
  setIsOpen: (state: { newstate: boolean; newmessage: string }) => void;
}

const storeLodingOverley = create<TypeLodingOverly>((set) => ({
  isOpen: false,
  message: "",
  setIsOpen: ({ newstate, newmessage }) =>
    set({ isOpen: newstate, message: newmessage }),
}));

export default storeLodingOverley;
