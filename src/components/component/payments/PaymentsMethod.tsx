import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import {
  loadPaymentWidget,
  PaymentWidgetInstance,
} from "@tosspayments/payment-widget-sdk";
import { Button } from "@/components/ui/button";
import { nanoid } from "nanoid";
import { useQueryClient } from "@tanstack/react-query";
import { CartType, UserType } from "@/types/type";
import { QUERY_KEY } from "@/keys/queryKeys";
import useTotalPriceStore from "@/store/total-price";

const PaymentsMethod = () => {
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  const paymentMethodsWidgetRef = useRef<ReturnType<
    PaymentWidgetInstance["renderPaymentMethods"]
  > | null>(null);
  const { totalPrice } = useTotalPriceStore();
  const client = useQueryClient();
  const user = client.getQueryData<UserType[]>([QUERY_KEY.USER_DATA]);
  const cart = client.getQueryData<CartType[]>([QUERY_KEY.CART_DATA]);
  const clientKey = process.env.NEXT_PUBLIC_TOSS_PAYMENTS_CLIENT_KEY as string;
  const customerKey = "YbX2HuSlsC9uVJW6NMRMj";
  const userName = user?.[0].name as string;
  const userEmail = user?.[0].email as string;
  const product = cart?.[0].productName as string;

  const clickPaymentsHandler = async () => {
    const paymentWidget = paymentWidgetRef.current;

    try {
      await paymentWidget?.requestPayment({
        orderId: nanoid(),
        orderName: product,
        customerName: userName,
        customerEmail: userEmail,
        successUrl: `${window.location.origin}/success`,
        failUrl: `${window.location.origin}/fail`,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;

    if (paymentMethodsWidget == null) {
      return;
    }

    paymentMethodsWidget.updateAmount(
      totalPrice,
      paymentMethodsWidget.UPDATE_REASON.COUPON
    );
  }, [totalPrice]);

  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey);

      const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
        "#payment-widget",
        totalPrice
      );

      paymentWidgetRef.current = paymentWidget;
      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    })();
  }, []);

  return (
    <Card>
      <CardContent
        id="payment-widget"
        className={cn("text-[0.8rem]")}
      ></CardContent>
      <Button
        type="button"
        className={cn("w-[100%] rounded-t-none py-[30px] text-[1.2rem]")}
        onClick={clickPaymentsHandler}
      >
        결제하기
      </Button>
    </Card>
  );
};

export default PaymentsMethod;
