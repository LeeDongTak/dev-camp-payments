import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import React from 'react';
import ProductInfo from './ProductInfo';
import OrderInfo from './OrderInfo';
import ShippingInfo from './ShippingInfo';
import MembershipInfo from './MembershipInfo';

const Info = () => {
  return (
    <div className={cn('flex flex-col gap-[20px] w-[100%] h-[100%] mx-auto')}>
      <ProductInfo />
      <OrderInfo />
      <ShippingInfo />
      <MembershipInfo />
    </div>
  );
};

export default Info;
