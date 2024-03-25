import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import React from 'react';

const ShippingInfo = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className={cn('text-[1.1rem]')}>배송 정보</CardTitle>
      </CardHeader>
      <CardContent className={cn('text-[0.9rem]')}>
        <div className="font-bold">홍길동</div>
        <div className="text-[gray]">01012345678</div>
        <div className="font-bold">
          <p>서울특벌시 서대문구 성산로7길 89-8 (연희동)</p>
          <p>주식회사 아임웹</p>
          <p>(03706)</p>
        </div>
      </CardContent>
      <CardContent className={cn('text-[0.9rem]')}>
        <div>배송매모</div>
        <Select>
          <SelectTrigger className="mt-[10px] text-[0.9rem]">
            <SelectValue placeholder="배송매모를 선택해 주세요" />
          </SelectTrigger>
          <SelectContent className={cn('text-[0.9rem]')}>
            <SelectItem value="light">경비실에 맡겨주세요</SelectItem>
            <SelectItem value="dark">문 앞에 놔주세요</SelectItem>
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
};

export default ShippingInfo;
