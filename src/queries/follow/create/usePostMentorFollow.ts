import { useMutation } from '@tanstack/react-query';
import { postMentorFollow } from '~/api/follow/create/postMentorFollow';

export const usePostMentorFollow = () => {
  return useMutation({
    mutationFn: postMentorFollow,
  });
};
