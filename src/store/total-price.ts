import { create } from "zustand";

type TotalPriceType = {
  totalPrice: number;
  amount: number;
  percent: number;
  deliveryPoint: number;
  defaultTotalPrice: (value: number) => void;
  setAmount: (value: number) => void;
  setPercent: (value: number) => void;
  setDeliveryPoint: (value: number) => void;
};

const useTotalPriceStore = create<TotalPriceType>()((set) => ({
  totalPrice: 0,
  amount: 0,
  percent: 0,
  deliveryPoint: 0,
  defaultTotalPrice: (value) => set((state) => ({ totalPrice: value })),
  setAmount: (value) => set((state) => ({ amount: (state.amount += value) })),
  setPercent: (value) =>
    set((state) => ({ percent: (state.percent += value) })),
  setDeliveryPoint: (value) => set((state) => ({ deliveryPoint: value })),
}));

export default useTotalPriceStore;
