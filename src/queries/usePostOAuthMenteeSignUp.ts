import { useMutation } from '@tanstack/react-query';
import postOauthMenteeSignUp from '~/api/user/postOAuthMenteeSignUp';

export const usePostOAuthMenteeSignUp = () => {
  return useMutation({
    mutationKey: ['oAuthMenteeSignUp'],
    mutationFn: postOauthMenteeSignUp,
  });
};
