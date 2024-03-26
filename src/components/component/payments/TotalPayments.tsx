import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QUERY_KEY } from "@/keys/queryKeys";
import { cn } from "@/lib/utils";
import useTotalPriceStore from "@/store/total-price";
import { CartType } from "@/types/type";
import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";

const TotalPayments = () => {
  const { totalPrice, deliveryPoint, setDeliveryPoint } = useTotalPriceStore();
  const client = useQueryClient();
  const cartData = client.getQueryData<CartType[]>([QUERY_KEY.CART_DATA]);

  useEffect(() => {
    const isDeliveryPoints = cartData?.map((x) => x.isDelivery);
    const isDeliveryPoint = isDeliveryPoints?.includes(true);
    setDeliveryPoint(isDeliveryPoint ? 2500 : 0);
  }, [deliveryPoint, cartData]);
  return (
    <Card>
      <CardHeader>
        <CardTitle className={cn("text-[1.1rem]")}>최종 결제금액</CardTitle>
      </CardHeader>
      <CardContent className={cn("text-[0.8rem]")}>
        <div className="flex justify-between items-center">
          <span className=" text-[gray]">상품가격</span>
          <span className="font-semibold">{totalPrice}원</span>
        </div>
        <div className="flex justify-between items-center">
          <span className=" text-[gray]">쿠폰할인</span>
          <span className="font-semibold">-1,000원</span>
        </div>
        <div className="flex justify-between items-center">
          <span className=" text-[gray]">포인트</span>
          <span className="font-semibold">-0원</span>
        </div>
        <div className="flex justify-between items-center">
          <span className=" text-[gray]">배송비</span>
          <span className="font-semibold">+{deliveryPoint}원</span>
        </div>
      </CardContent>
      <p className="h-[2px] bg-[#eee] m-6 mt-0"></p>
      <CardContent
        className={cn("flex justify-between items-center text-[0.9rem]")}
      >
        <span className="font-semibold">총 결제금액</span>
        <span className="text-[gray]">19,500원</span>
      </CardContent>
    </Card>
  );
};

export default TotalPayments;
