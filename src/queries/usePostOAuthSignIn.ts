import { useMutation } from '@tanstack/react-query';
import postOAuthSignIn from '~/api/user/postOAuthSignIn';

export const usePostOAuthSignIn = () => {
  return useMutation({
    mutationKey: ['oAuthSignIn'],
    mutationFn: postOAuthSignIn,
  });
};
