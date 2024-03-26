import { fetchCart } from "@/api/facth-Cart";
import { fetchCoupon } from "@/api/facth-coupon";
import { QUERY_KEY } from "@/keys/queryKeys";
import { CartType, couponType } from "@/types/type";
import { useQuery } from "@tanstack/react-query";

const useFetchCoupon = () => {
  const { data } = useQuery<couponType[]>({
    queryKey: [QUERY_KEY.COUPON_DATA],
    queryFn: fetchCoupon,
  });
  return { data };
};

export default useFetchCoupon;
