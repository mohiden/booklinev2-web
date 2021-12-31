import create from 'zustand';

interface CustomStoreState {
    collapse: boolean;
    setCollapse: () => void;
}

export const useCustomStore = create<CustomStoreState>((set) => ({
    collapse: false,
    setCollapse: () => set((state) => ({ collapse: !state.collapse })),
}));