import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import useFetchCoupon from "@/hooks/useFetchCoupon";
import { QUERY_KEY } from "@/keys/queryKeys";
import { cn } from "@/lib/utils";
import { UserType } from "@/types/type";
import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
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

const MembershipInfo = () => {
  const { data: couponDatas } = useFetchCoupon();
  const { data: pointDatas } = useFetchPoint();
  const client = useQueryClient();
  const user = client.getQueryData<UserType[]>([QUERY_KEY.USER_DATA]);
  const couponData = couponDatas?.filter(
    (item) => item.userId === user?.[0].id
  );
  const pointData = pointDatas
    ?.filter((item) => item.userId === user?.[0].id)
    .map((item) => item.point);
  const totalPoint =
    pointData?.length === 0
      ? 0
      : (pointData?.reduce(
          (accumulator, currentNumber) => accumulator + currentNumber
        ) as number);
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

  const changeValueHandler = () => {
    form.trigger(["point"]);
  };

  // 한글자 말려서 유효성 검사가 되는것을 방지하기 위함
  useEffect(() => {
    changeValueHandler();
  }, [point]);

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
            <span className="text-[#000] font-bold">{totalPoint}</span>
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
