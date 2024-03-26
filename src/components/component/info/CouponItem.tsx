import { Button } from "@/components/ui/button";
import { couponType } from "@/types/type";
import React from "react";

const CouponItem = ({ item }: { item: couponType }) => {
  return (
    <div className="flex gap-2">
      <div className="h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background">
        {item.content}
        {item.type === "percent" ? "%" : "원"}
      </div>
      <Button type="button">쿠폰적용</Button>
    </div>
  );
};

export default CouponItem;
