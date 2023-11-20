import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import postSignOut from './../api/user/postSignOut';
import { appPaths } from '~/config/paths';
import useUser from '~/hooks/useUser';

export const usePostSignOut = () => {
  const { clearUser } = useUser();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ['signOut'],
    mutationFn: postSignOut,
    onSuccess: () => {
      clearUser();
      navigate(appPaths.main());
    },
    onError: () => {
      alert('잠시 후 다시 시도해 주세요.');
    },
  });
};
