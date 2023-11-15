import { useMutation } from '@tanstack/react-query';
import postSignOut from './../api/user/postSignOut';
import useUser from '~/hooks/useUser';

export const usePostSignOut = () => {
  const { clearUser } = useUser();

  return useMutation({
    mutationKey: ['signOut'],
    mutationFn: postSignOut,
    onSuccess: () => {
      clearUser();
    },
  });
};
