import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';
import React from 'react';

const PaymentsMethod = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className={cn('text-[1.1rem]')}>최종 결제금액</CardTitle>
      </CardHeader>
      <CardContent className={cn('text-[0.8rem]')}>
        <RadioGroup defaultValue="comfortable" className={cn('flex flex-wrap justify-between')}>
          <div className="flex items-center space-x-2 w-[48%]">
            <RadioGroupItem value="creditCard" id="r1" />
            <Label htmlFor="r1">신용카드</Label>
          </div>
          <div className="flex items-center space-x-2 w-[48%]">
            <RadioGroupItem value="virtualAccount" id="r2" />
            <Label htmlFor="r2">가상계좌</Label>
          </div>
          <div className="flex items-center space-x-2 w-[48%]">
            <RadioGroupItem value="bankBookPay" id="r3" />
            <Label htmlFor="r3">무통장 입금</Label>
          </div>
          <div className="flex items-center space-x-2 w-[48%]">
            <RadioGroupItem value="phonePay" id="r4" />
            <Label htmlFor="r4">핸드폰 결제</Label>
          </div>
          <div className="flex items-center space-x-2 w-[48%]">
            <RadioGroupItem value="kakaoPay" id="r5" />
            <Label htmlFor="r5">카카오 페이</Label>
          </div>
        </RadioGroup>
        <p className="h-[2px] bg-[#eee] my-6 "></p>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms2" />
          <label
            htmlFor="terms2"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            현금영수증 신청
          </label>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentsMethod;
