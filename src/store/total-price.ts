import { create } from "zustand";

type TotalPriceType = {
  totalProductPrice: number;
  applyCouponPoint: number;
  amount: number;
  percent: number;
  deliveryPoint: number;
  setTotalProductPrice: (value: number) => void;
  setApplyCouponPoint: (value: number) => void;
  setAmount: (value: number) => void;
  setPercent: (value: number) => void;
  setDeliveryPoint: (value: number) => void;
};

const useTotalPriceStore = create<TotalPriceType>()((set) => ({
  totalProductPrice: 0,
  applyCouponPoint: 0,
  amount: 0,
  percent: 0,
  deliveryPoint: 0,
  setTotalProductPrice: (value) =>
    set(() => ({
      totalProductPrice: value,
    })),
  setApplyCouponPoint: (value) =>
    set((state) => ({
      applyCouponPoint: value,
    })),
  setAmount: (value) => set((state) => ({ amount: (state.amount += value) })),
  setPercent: (value) =>
    set((state) => ({ percent: (state.percent += value) })),
  setDeliveryPoint: (value) => set((state) => ({ deliveryPoint: value })),
}));

export default useTotalPriceStore;
