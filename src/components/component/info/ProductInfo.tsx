import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect } from "react";
import useFetchCart from "@/hooks/useFetchCart";
import { useQueryClient } from "@tanstack/react-query";
import { CartType, UserType } from "@/types/type";
import { QUERY_KEY } from "@/keys/queryKeys";
import ProductItem from "./ProductItem";
import useTotalPriceStore from "@/store/total-price";

const ProductInfo = () => {
  const { data } = useFetchCart();
  const client = useQueryClient();
  const user = client.getQueryData<UserType[]>([QUERY_KEY.USER_DATA]);
  const cartData = data?.filter((item) => item.userId === user?.[0].id);
  const { totalPrice, defaultTotalPrice } = useTotalPriceStore();

  useEffect(() => {
    if (cartData) {
      let totalPrice = 0;
      for (let i = 0; i < cartData.length; i++) {
        totalPrice += cartData[i].price;
      }
      defaultTotalPrice(totalPrice);
    }
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className={cn("text-[1.1rem]")}>주문상품 정보</CardTitle>
      </CardHeader>
      {cartData?.map((item) => {
        return <ProductItem key={item.id} item={item} />;
      })}
    </Card>
  );
};

export default ProductInfo;
