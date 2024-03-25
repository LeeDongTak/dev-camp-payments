import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import React from 'react';

const OrderInfo = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className={cn('text-[1.1rem]')}>주문자 정보</CardTitle>
      </CardHeader>
      <CardContent className={cn('text-[0.9rem]')}>
        <div className="font-bold">홍길동</div>
        <div className="text-[gray]">01012345678</div>
        <div className="text-[gray]">user@test.com</div>
      </CardContent>
    </Card>
  );
};

export default OrderInfo;
