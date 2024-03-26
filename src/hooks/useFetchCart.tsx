import { fetchCart } from "@/api/facth-Cart";
import { QUERY_KEY } from "@/keys/queryKeys";
import { CartType } from "@/types/type";
import { useQuery } from "@tanstack/react-query";

const useFetchCart = () => {
  const { data } = useQuery<CartType[]>({
    queryKey: [QUERY_KEY.CART_DATA],
    queryFn: fetchCart,
  });
  return { data };
};

export default useFetchCart;
