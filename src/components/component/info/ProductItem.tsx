import { CardContent } from "@/components/ui/card";
import Image from "next/image";
import image from "/public/images/image.png";
import { CartType } from "@/types/type";

const ProductItem = ({ item }: { item: CartType }) => {
  return (
    <CardContent>
      <div className="flex justify-start gap-[20px]">
        <Image src={image} alt="제품이미지" width={100} height={100} />
        <div className="flex flex-col gap-[5px]">
          <p className="text-[0.8rem] font-semibold">{item.productName}</p>
          <p className="text-[0.8rem]">
            <span className="text-[0.7rem] py-[1px] px-[5px] border-[1px] mr-2 text-[gray]">
              필수
            </span>
            {item.productCondition} - {item.numberOfProduct}개
          </p>
          <p className="text-[0.9rem] font-black">{item.price}원</p>
        </div>
      </div>
    </CardContent>
  );
};

export default ProductItem;
