import { User } from '@core';
import create from 'zustand';
interface UserStoreState {
    setAuthValue: (token: string) => void;
    user: Omit<User, "password"> | null;
    setUser: (user: Omit<User, "password">) => void;
    logout: () => void;
}

export const useUserStore = create<UserStoreState>((set) => ({
    setAuthValue: (token: string) =>
        set((_) => {
            window.localStorage.setItem("token", token);
        }),
    user: null,
    setUser: (user: Omit<User, "password">) => set((_) => ({ user })),
    logout: () =>
        set((_) => {
            window.localStorage.removeItem("token");
            window.location.assign("/");
        }),
}));