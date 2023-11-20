import { useMutation } from '@tanstack/react-query';
import { postResumeLink } from '~/api/resume/create/postResumeLink';

export const usePostResumeLink = () => {
  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationKey: ['postLink'],
    mutationFn: postResumeLink,
  });

  return { mutate, isPending, isError, isSuccess };
};
