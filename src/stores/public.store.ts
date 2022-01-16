import { ICustomerDetail } from '@core';
import create from 'zustand';

interface PublicStoreState {
    collapse: boolean;
    setCollapse: () => void;
    customersDetail: ICustomerDetail;
    setCustomerDetail: (customersDetail: ICustomerDetail) => void;
}


export const usePublicStore = create<PublicStoreState>((set) => ({
    collapse: false,
    setCollapse: () => set((state) => ({ collapse: !state.collapse })),
    customersDetail: { names: [], phones: [], addresses: [] },
    setCustomerDetail: (customersDetail: ICustomerDetail) => set((_) => ({ customersDetail })),
}));