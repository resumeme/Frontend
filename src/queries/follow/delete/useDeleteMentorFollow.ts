import { useMutation } from '@tanstack/react-query';
import { deleteMentorFollow } from '~/api/follow/delete/deleteMentorFollow';

export const useDeleteMentorFollow = () => {
  return useMutation({
    mutationFn: deleteMentorFollow,
  });
};
