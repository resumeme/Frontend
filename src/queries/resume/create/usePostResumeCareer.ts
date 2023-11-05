import { useMutation } from '@tanstack/react-query';
import { postResumeCareer } from '~/api/resume/create/postResumeCareer';

export const usePostResumeCareer = () => {
  return useMutation({
    mutationKey: ['postCareer'],
    mutationFn: postResumeCareer,
  });
};
