import { User } from "@generated";
import create from "zustand";

interface StoreState {
  collapse: boolean;
  setCollapse: () => void;
  setAuthValue: (token: string) => void;
  user: User | null;
  setUser: (user: User) => void;
}
export const useStore = create<StoreState>((set) => ({
  collapse: false,
  setCollapse: () => set((state) => ({ collapse: !state.collapse })),
  setAuthValue: (token: string) =>
    set((_) => {
      window.localStorage.setItem("token", token);
    }),
  user: null,
  setUser: (user: User) => set((state) => ({ user })),
}));
