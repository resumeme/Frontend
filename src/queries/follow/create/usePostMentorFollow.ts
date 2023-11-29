import { useMutation, useQueryClient } from '@tanstack/react-query';
import { followKeys } from '../followKeys.const';
import { postMentorFollow } from '~/api/follow/create/postMentorFollow';

export const usePostMentorFollow = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postMentorFollow,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: followKeys.all });
    },
  });
};
