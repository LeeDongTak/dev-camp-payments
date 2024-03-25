import { fetchUser } from '@/api/facth-user';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useFetchUserQuery = () => {
  const { data } = useQuery({
    queryKey: ['userData'],
    queryFn: fetchUser,
  });
  return { data };
};

export default useFetchUserQuery;
