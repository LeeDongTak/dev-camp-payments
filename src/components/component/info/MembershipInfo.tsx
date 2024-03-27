import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import useFetchCoupon from "@/hooks/useFetchCoupon";
import { QUERY_KEY } from "@/keys/queryKeys";
import { cn } from "@/lib/utils";
import { UserType } from "@/types/type";
import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import CouponItem from "./CouponItem";
import useFetchPoint from "@/hooks/useFetchPoint";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { pointRegisterSchema } from "@/validation/isValidPoint";
import { useToast } from "@/components/ui/use-toast";

const MembershipInfo = () => {
  const [applyTotalPoint, setApplyTotalPoint] = useState(0);
  const [totalPoint, setTotalPoint] = useState(0);
  const { data: couponDatas } = useFetchCoupon();
  const { data: pointDatas, isLoading: isPointLoading } = useFetchPoint();
  const client = useQueryClient();
  const { toast } = useToast();
  const user = client.getQueryData<UserType[]>([QUERY_KEY.USER_DATA]);
  const couponData = couponDatas?.filter(
    (item) => item.userId === user?.[0].id
  );
  const form = useForm<{ point: string }>({
    resolver: zodResolver(pointRegisterSchema),
    defaultValues: {
      point: "0",
    },
  });
  const { point } = form.watch();

  /**
   * 함수 영역
   */
  const onSubmit = () => {};

  const changeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.trigger(["point"]);

    const pointValue = form.getFieldState("point");
    if (!pointValue.isDirty || pointValue.invalid) return;
    if (applyTotalPoint < 0) {
      console.log("asdf");
      form.setValue("point", "0");
      toast({
        title: "보유하신 포인트보다 많은 포인트를 입력할 수 없습니다",
        variant: "destructive",
        duration: 2000,
      });
    }

    setApplyTotalPoint(totalPoint - +point);
  };

  // 한글자 말려서 유효성 검사가 되는것을 방지하기 위함
  useEffect(() => {
    changeValueHandler();
  }, [point]);

  useEffect(() => {
    const pointData = pointDatas
      ?.filter((item) => item.userId === user?.[0].id)
      .map((item) => item.point);
    const totalPointData =
      pointData?.length === 0
        ? 0
        : (pointData?.reduce(
            (accumulator, currentNumber) => accumulator + currentNumber
          ) as number);

    setTotalPoint(totalPointData);
    setApplyTotalPoint(totalPointData);
  }, [totalPoint, isPointLoading]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className={cn("text-[1.1rem]")}>쿠폰/포인트</CardTitle>
      </CardHeader>
      <CardContent className={cn("flex flex-col text-[0.9rem] gap-3")}>
        <div>쿠폰</div>
        <div className="flex flex-col gap-5">
          {couponData?.map((item) => {
            return <CouponItem key={item.id} item={item} />;
          })}
        </div>
      </CardContent>
      <CardContent className={cn("flex flex-col text-[0.9rem] gap-3")}>
        <div>쿠폰 번호</div>
        <div className="flex gap-2">
          <Input type="number" placeholder="쿠폰 번호 입력" />
          <Button type="button">번호확인</Button>
        </div>
      </CardContent>
      <CardContent className={cn("flex flex-col text-[0.9rem] gap-3")}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex space-y-7 gap-2"
          >
            <FormField
              control={form.control}
              name="point"
              render={({ field }) => (
                <FormItem className={cn(" w-[100%]")}>
                  <FormLabel>포인트</FormLabel>
                  <FormControl>
                    <Input onChangeCapture={changeValueHandler} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">전액사용</Button>
          </form>
        </Form>
        <div className="text-[0.7rem]">
          <p className=" text-[#333]">
            보유 포인트
            <span className="text-[#000] font-bold">{applyTotalPoint}</span>
          </p>
          <p className="text-[gray]">
            5,000포인트 이상 보유 및 10,000원이상 구매시 사용가능
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MembershipInfo;
