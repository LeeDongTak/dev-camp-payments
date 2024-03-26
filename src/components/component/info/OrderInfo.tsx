import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useFetchUser from "@/hooks/useFetchUser";
import { cn } from "@/lib/utils";
import React from "react";

const OrderInfo = () => {
  const { data } = useFetchUser();

  return (
    <Card>
      <CardHeader>
        <CardTitle className={cn("text-[1.1rem]")}>주문자 정보</CardTitle>
      </CardHeader>
      <CardContent className={cn("text-[0.9rem]")}>
        <div className="font-bold">{data?.[0].name}</div>
        <div className="text-[gray]">{data?.[0].phone}</div>
        <div className="text-[gray]">{data?.[0].email}</div>
      </CardContent>
    </Card>
  );
};

export default OrderInfo;
