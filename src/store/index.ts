import create from 'zustand';

interface StoreState {
    collapse: boolean;
    setCollapse: () => void;
}
export const useStore = create<StoreState>(set => ({
    collapse: false,
    setCollapse: () => set(state => ({ collapse: !state.collapse })),
}))
