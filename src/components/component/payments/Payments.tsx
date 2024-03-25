import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import React from 'react';
import PaymentsProgress from './PaymentsProgress';
import PaymentsMethod from './PaymentsMethod';
import TotalPayments from './TotalPayments';

const Payments = () => {
  return (
    <div className={cn('flex flex-col gap-[20px] w-[100%] h-[100%] mx-auto')}>
      <TotalPayments />
      <PaymentsMethod />
      <PaymentsProgress />
    </div>
  );
};

export default Payments;
