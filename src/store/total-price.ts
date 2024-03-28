import { create } from "zustand";

type TotalPriceType = {
  totalPrice: number;
  totalProductPrice: number;
  applyCouponPoint: number;
  amount: number;
  percent: number;
  usedTotalPoint: number;
  deliveryPoint: number;
  setTotalPrice: (value: number) => void;
  setTotalProductPrice: (value: number) => void;
  setApplyCouponPoint: (value: number) => void;
  setAmount: (value: number) => void;
  setPercent: (value: number) => void;
  setUsedTotalPoint: (value: number) => void;
  setDeliveryPoint: (value: number) => void;
  resetState: () => void;
};

const useTotalPriceStore = create<TotalPriceType>()((set) => ({
  totalPrice: 0,
  totalProductPrice: 0,
  applyCouponPoint: 0,
  amount: 0,
  percent: 0,
  usedTotalPoint: 0,
  deliveryPoint: 0,
  setTotalPrice: (value) => set(() => ({ totalPrice: value })),
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
  setUsedTotalPoint: (value) => set((state) => ({ usedTotalPoint: value })),
  setDeliveryPoint: (value) => set((state) => ({ deliveryPoint: value })),
  resetState: () =>
    set((state) => ({
      totalPrice: 0,
      totalProductPrice: 0,
      applyCouponPoint: 0,
      amount: 0,
      percent: 0,
      usedTotalPoint: 0,
      deliveryPoint: 0,
    })),
}));

export default useTotalPriceStore;
