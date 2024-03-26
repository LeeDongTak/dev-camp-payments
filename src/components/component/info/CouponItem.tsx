import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import useTotalPriceStore from "@/store/total-price";
import { couponType } from "@/types/type";
import React, { useState } from "react";

const CouponItem = ({ item }: { item: couponType }) => {
  const [isPlusCoupon, setIsPlusCoupon] = useState(true);
  const { toast } = useToast();
  const {
    totalProductPrice,
    applyCouponPoint,
    setAmount,
    setPercent,
    percent,
  } = useTotalPriceStore();
  const clickApplyCouponHandler = () => {
    if (isPlusCoupon && totalProductPrice - applyCouponPoint < 0) {
      toast({
        title: "쿠폰할인은 0원 미만으로 적용할 수 없습니다. ",
        variant: "destructive",
        duration: 2000,
      });
      return;
    }
    setIsPlusCoupon(!isPlusCoupon);
    if (item.type === "amount") {
      if (isPlusCoupon) {
        setAmount(item.content);
      } else if (!isPlusCoupon) {
        setAmount(-item.content);
      }
    }
    if (item.type === "percent") {
      if (isPlusCoupon) {
        setPercent(item.content);
      } else if (!isPlusCoupon) {
        setPercent(-item.content);
      }
    }
  };

  return (
    <div className="flex gap-2">
      <div
        className={`h-10 w-full rounded-md border bg-background px-3 py-2 text-smz ring-offset-background ${
          !isPlusCoupon && "bg-[#e8e8e8]"
        }`}
      >
        {item.content}
        {item.type === "percent" ? "%" : "원"}
      </div>
      <Button
        type="button"
        variant={isPlusCoupon ? "default" : "apply"}
        onClick={clickApplyCouponHandler}
      >
        쿠폰적용
      </Button>
    </div>
  );
};

export default React.memo(CouponItem);
