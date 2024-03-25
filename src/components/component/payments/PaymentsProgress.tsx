import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import React from 'react';

const PaymentsProgress = () => {
  return (
    <Card>
      <CardContent className={cn('flex flex-col gap-5 text-[0.8rem] mt-6')}>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms2" />
          <label
            htmlFor="terms2"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            전체동의
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-[8px] h-[16px] mr-1">
            <p className="w-[100%] h-[55%] border-l-2 border-b-2"></p>
          </div>
          <Checkbox id="terms2" />
          <label
            htmlFor="terms2"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            구매조건 확인 및 결제진행에 동의
          </label>
        </div>
      </CardContent>
      <Button type="submit" className={cn('w-[100%] rounded-t-none py-[30px] text-[1.2rem]')}>
        결제하기
      </Button>
    </Card>
  );
};

export default PaymentsProgress;
