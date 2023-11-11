import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { resumeMeAxios } from '~/api/axios';
import CONSTANTS from '~/constants';
import { User } from '~/types/user';
import { getCookie, deleteCookie, setCookie } from '~/utils/cookie';

export const userKeys = {
  user: ['user'] as const,
};

const getUser = async (): Promise<User | null> => {
  if (!getCookie(CONSTANTS.ACCESS_TOKEN_HEADER)) return null;

  const { data } = await resumeMeAxios.get('/v1/user');

  if (!data) {
    deleteCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

    return null;
  }

  return data;
};

const useUser = () => {
  const queryClient = useQueryClient();

  const { data: user, refetch } = useSuspenseQuery({
    queryKey: userKeys.user,
    queryFn: getUser,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  const initialUser = async (accessToken: string) => {
    setCookie(CONSTANTS.ACCESS_TOKEN_HEADER, accessToken);
    refetch();
  };

  const clearUser = () => {
    queryClient.setQueryData(userKeys.user, null);
    deleteCookie(CONSTANTS.ACCESS_TOKEN_HEADER);
  };

  return { user, clearUser, initialUser };
};

export default useUser;
