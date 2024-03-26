import { fetchUser } from "@/api/facth-user";
import { QUERY_KEY } from "@/keys/queryKeys";
import { UserType } from "@/types/type";
import { useQuery } from "@tanstack/react-query";

const useFetchUser = () => {
  const { data } = useQuery<UserType[]>({
    queryKey: [QUERY_KEY.USER_DATA],
    queryFn: fetchUser,
  });
  return { data };
};

export default useFetchUser;
