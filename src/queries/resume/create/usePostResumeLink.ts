import { useMutation } from '@tanstack/react-query';
import { postResumeLink } from '~/api/resume/create/postResumeLink';

export const usePostResumeLink = () => {
  return useMutation({
    mutationKey: ['postLink'],
    mutationFn: postResumeLink,
  });
};
