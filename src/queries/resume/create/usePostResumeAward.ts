import { useMutation } from '@tanstack/react-query';
import { postResumeAward } from '~/api/resume/create/postResumeAward';

export const usePostResumeAward = () => {
  return useMutation({
    mutationKey: ['postAward'],
    mutationFn: postResumeAward,
  });
};
