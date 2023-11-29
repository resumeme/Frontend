import { useMutation, useQueryClient } from '@tanstack/react-query';
import { followKeys } from '../followKeys.const';
import { deleteMentorFollow } from '~/api/follow/delete/deleteMentorFollow';

export const useDeleteMentorFollow = () => {
  const queryCLient = useQueryClient();

  return useMutation({
    mutationFn: deleteMentorFollow,
    onSuccess: () => {
      queryCLient.refetchQueries({ queryKey: followKeys.all });
    },
  });
};
