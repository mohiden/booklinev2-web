import { IUser } from '@core';
import create from 'zustand';
interface UserStoreState {
    setAuthValue: (token: string) => void;
    user: Omit<IUser, "password"> | null;
    setUser: (user: Omit<IUser, "password">) => void;
    logout: () => void;
}

export const useUserStore = create<UserStoreState>((set) => ({
    setAuthValue: (token: string) =>
        set((_) => {
            window.localStorage.setItem("token", token);
        }),
    user: null,
    setUser: (user: Omit<IUser, "password">) => set((_) => ({ user })),
    logout: () =>
        set((_) => {
            window.localStorage.removeItem("token");
            window.location.assign("/");
        }),
}));