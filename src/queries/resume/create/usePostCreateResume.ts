import { useMutation } from '@tanstack/react-query';
import { postCreateResume } from '~/api/resume/create/postCreateResume';

export const usePostCreateResume = () => {
  return useMutation({
    mutationKey: ['postResume'],
    mutationFn: postCreateResume,
  });
};
