import create from "zustand";

interface StoreState {
  collapse: boolean;
  setCollapse: () => void;
  setAuthValue: (token: string) => void;
  // user: User | null;
  // setUser: (user: User) => void;
  // logout: () => void;
}
export const useStore = create<StoreState>((set) => ({
  collapse: false,
  setCollapse: () => set((state) => ({ collapse: !state.collapse })),
  setAuthValue: (token: string) =>
    set((_) => {
      window.localStorage.setItem("token", token);
    }),
  // user: null,
  // setUser: (user: User) => set((state) => ({ user })),
  // logout: () =>
  //   set((_) => {
  //     window.localStorage.removeItem("token");
  //     window.location.assign("/");
  //   }),
}));
