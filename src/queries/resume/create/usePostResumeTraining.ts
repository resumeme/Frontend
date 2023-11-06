import { useMutation } from '@tanstack/react-query';
import { postResumeTraining } from '~/api/resume/create/postResumeTraining';

export const usePostResumeTraining = () => {
  return useMutation({
    mutationKey: ['postCareer'],
    mutationFn: postResumeTraining,
  });
};
