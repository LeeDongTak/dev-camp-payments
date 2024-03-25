import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import React from 'react';

const TotalPayments = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className={cn('text-[1.1rem]')}>최종 결제금액</CardTitle>
      </CardHeader>
      <CardContent className={cn('text-[0.8rem]')}>
        <div className="flex justify-between items-center">
          <span className=" text-[gray]">상품가격</span>
          <span className="font-semibold">18,000원</span>
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
          <span className="font-semibold">+2,500원</span>
        </div>
      </CardContent>
      <p className="h-[2px] bg-[#eee] m-6 mt-0"></p>
      <CardContent className={cn('flex justify-between items-center text-[0.9rem]')}>
        <span className="font-semibold">총 결제금액</span>
        <span className="text-[gray]">19,500원</span>
      </CardContent>
    </Card>
  );
};

export default TotalPayments;
