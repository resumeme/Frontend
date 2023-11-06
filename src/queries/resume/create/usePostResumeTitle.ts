import { useMutation } from '@tanstack/react-query';
import { postResumeTitle } from '~/api/resume/create/postResumeTitle';

export const usePostResumeTitle = () => {
  return useMutation({
    mutationKey: ['postTitle'],
    mutationFn: postResumeTitle,
  });
};
