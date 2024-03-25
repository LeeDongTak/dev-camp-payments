import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import React from 'react';

const MembershipInfo = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className={cn('text-[1.1rem]')}>쿠폰/포인트</CardTitle>
      </CardHeader>
      <CardContent className={cn('flex flex-col text-[0.9rem] gap-3')}>
        <div>쿠폰</div>
        <div className="flex gap-2">
          <div className="h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background">
            1000
          </div>
          <Button type="button">쿠폰적용</Button>
        </div>
      </CardContent>
      <CardContent className={cn('flex flex-col text-[0.9rem] gap-3')}>
        <div>쿠폰 번호</div>
        <div className="flex gap-2">
          <Input type="number" placeholder="쿠폰 번호 입력" />
          <Button type="button">번호확인</Button>
        </div>
      </CardContent>
      <CardContent className={cn('flex flex-col text-[0.9rem] gap-3')}>
        <div>포인트</div>
        <div className="flex gap-2">
          <div className="h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background">0</div>
          <Button type="button">전액사용</Button>
        </div>
        <div className="text-[0.7rem]">
          <p className=" text-[#333]">
            보유 포인트 <span className="text-[#000] font-bold">2,300</span>
          </p>
          <p className="text-[gray]">5,000포인트 이상 보유 및 10,000원이상 구매시 사용가능</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MembershipInfo;
