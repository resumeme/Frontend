import { useMutation } from '@tanstack/react-query';
import postOauthSignUp from '~/api/user/postOAuthSignUp';

export const usePostOAuthSignUp = () => {
  return useMutation({
    mutationKey: ['oAuthMenteeSignUp'],
    mutationFn: postOauthSignUp,
  });
};
