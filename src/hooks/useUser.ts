import { useSuspenseQuery } from '@tanstack/react-query';
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

  return data;
};

const useUser = () => {
  const { data: user, refetch } = useSuspenseQuery({
    queryKey: userKeys.user,
    queryFn: getUser,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  const initialUser = async (accessToken: string, refreshToken: string) => {
    setCookie(CONSTANTS.ACCESS_TOKEN_HEADER, accessToken);
    setCookie(CONSTANTS.REFRESH_TOKEN_HEADER, refreshToken, 100);
    setCookie('role', String(user?.role));

    refetch();
  };

  const clearUser = () => {
    deleteCookie(CONSTANTS.ACCESS_TOKEN_HEADER);
    deleteCookie(CONSTANTS.REFRESH_TOKEN_HEADER);

    refetch();
  };

  return { user, clearUser, initialUser };
};

export default useUser;
