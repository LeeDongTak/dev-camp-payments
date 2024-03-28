import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import useTotalPriceStore from "@/store/total-price";
import { couponType } from "@/types/type";
import React, { useEffect, useState } from "react";

const CouponItem = ({ item }: { item: couponType }) => {
  const [isPlusCoupon, setIsPlusCoupon] = useState(true);
  const { toast } = useToast();
  const couponStorage = JSON.parse(
    JSON.parse(JSON.stringify(localStorage.getItem("couponId")))
  );
  const {
    totalProductPrice,
    applyCouponPoint,
    setAmount,
    setPercent,
    deliveryPoint,
  } = useTotalPriceStore();
  const clickApplyCouponHandler = () => {
    if (
      isPlusCoupon &&
      totalProductPrice + deliveryPoint - applyCouponPoint - item.content < 0
    ) {
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
        let couponIdArr = [...couponStorage];
        couponIdArr.push(item.id);
        localStorage.setItem("couponId", JSON.stringify(couponIdArr));
        setAmount(item.content);
      } else if (!isPlusCoupon) {
        let couponIdArr = couponStorage.filter((x: string) => x !== item.id);
        localStorage.setItem("couponId", JSON.stringify(couponIdArr));
        setAmount(-item.content);
      }
    }
    if (item.type === "percent") {
      if (isPlusCoupon) {
        let couponIdArr = [...couponStorage];
        couponIdArr.push(item.id);
        localStorage.setItem("couponId", JSON.stringify(couponIdArr));
        setPercent(item.content);
      } else if (!isPlusCoupon) {
        let couponIdArr = couponStorage.filter((x: string) => x !== item.id);
        localStorage.setItem("couponId", JSON.stringify(couponIdArr));
        setPercent(-item.content);
      }
    }
  };

  useEffect(() => {
    if (
      JSON.parse(
        JSON.parse(JSON.stringify(localStorage.getItem("couponId")))
      ) === null
    ) {
      localStorage.setItem("couponId", JSON.stringify([]));
    }
  }, []);
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
