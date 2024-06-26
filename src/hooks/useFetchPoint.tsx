import { fetchPoint } from "@/api/facth-point";
import { QUERY_KEY } from "@/keys/queryKeys";
import { PointType } from "@/types/type";
import { useQuery } from "@tanstack/react-query";

const useFetchPoint = () => {
  const { data, isLoading } = useQuery<PointType[]>({
    queryKey: [QUERY_KEY.POINT_DATA],
    queryFn: fetchPoint,
  });
  return { data, isLoading };
};

export default useFetchPoint;
