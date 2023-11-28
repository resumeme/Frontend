import { useMutation, useQueryClient } from '@tanstack/react-query';
import { followKeys } from '../followKeys.const';
import { postMentorFollow } from '~/api/follow/create/postMentorFollow';

export const usePostMentorFollow = () => {
  const queryCLient = useQueryClient();

  return useMutation({
    mutationFn: postMentorFollow,
    onSuccess: () => {
      queryCLient.refetchQueries({ queryKey: followKeys.all });
    },
  });
};
