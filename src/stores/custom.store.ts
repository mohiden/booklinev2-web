import { ICustomerDetail } from '@core';
import create from 'zustand';

interface CustomStoreState {
    collapse: boolean;
    setCollapse: () => void;
    customersDetail: ICustomerDetail;
    setCustomerDetail: (customersDetail: ICustomerDetail) => void;
}


export const useCustomStore = create<CustomStoreState>((set) => ({
    collapse: false,
    setCollapse: () => set((state) => ({ collapse: !state.collapse })),
    customersDetail: { names: [], phones: [], addresses: [] },
    setCustomerDetail: (customersDetail: ICustomerDetail) => set((_) => ({ customersDetail })),
}));