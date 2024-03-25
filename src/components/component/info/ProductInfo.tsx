import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import image from '/public/images/image.png';
import useFetchUserQuery from '@/hooks/usefetchUserQuery';
const ProductInfo = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className={cn('text-[1.1rem]')}>주문상품 정보</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-start gap-[20px]">
          <Image src={image} alt="제품이미지" width={100} height={100} />
          <div className="flex flex-col gap-[5px]">
            <p className="text-[0.8rem] font-semibold">Daily Facial Soap</p>
            <p className="text-[0.8rem]">
              <span className="text-[0.7rem] py-[1px] px-[5px] border-[1px] mr-2 text-[gray]">필수</span>용량 : 80ml -
              1개
            </p>
            <p className="text-[0.9rem] font-black">18,000원</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductInfo;
