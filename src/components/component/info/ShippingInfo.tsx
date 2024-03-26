import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { QUERY_KEY } from "@/keys/queryKeys";
import { cn } from "@/lib/utils";
import { UserType } from "@/types/type";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import React from "react";

const ShippingInfo = () => {
  const client = useQueryClient();
  const user = client.getQueryData<UserType[]>([QUERY_KEY.USER_DATA]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className={cn("text-[1.1rem]")}>배송 정보</CardTitle>
      </CardHeader>
      <CardContent className={cn("text-[0.9rem]")}>
        <div className="font-bold">{user?.[0].name}</div>
        <div className="text-[gray]">{user?.[0].phone}</div>
        <div className="font-bold w-[80%]">{user?.[0].address}</div>
      </CardContent>
      <CardContent className={cn("text-[0.9rem]")}>
        <div>배송매모</div>
        <Select>
          <SelectTrigger className="mt-[10px] text-[0.9rem]">
            <SelectValue placeholder="배송매모를 선택해 주세요" />
          </SelectTrigger>
          <SelectContent className={cn("text-[0.9rem]")}>
            <SelectItem value="light">경비실에 맡겨주세요</SelectItem>
            <SelectItem value="dark">문 앞에 놔주세요</SelectItem>
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
};

export default ShippingInfo;
