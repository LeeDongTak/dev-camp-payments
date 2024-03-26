import { create } from "zustand";

type TotalPriceType = {
  totalPrice: number;
  defaultTotalPrice: (value: number) => void;
};

const useTotalPriceStore = create<TotalPriceType>()((set) => ({
  totalPrice: 0,
  defaultTotalPrice: (value) => set((state) => ({ totalPrice: value })),
}));

export default useTotalPriceStore;
