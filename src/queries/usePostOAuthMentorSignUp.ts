import { useMutation } from '@tanstack/react-query';
import postOauthMentorSignUp from '~/api/user/postOAuthMentorSignUp';

export const usePostOAuthMentorSignUp = () => {
  return useMutation({
    mutationKey: ['oAuthMentorSignUp'],
    mutationFn: postOauthMentorSignUp,
  });
};
