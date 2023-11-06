import { useMutation } from '@tanstack/react-query';
import { patchResumeTitle } from '~/api/resume/create/patchResumeTitle';

export const usePatchResumeTitle = () => {
  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationKey: ['patchTitle'],
    mutationFn: patchResumeTitle,
  });

  return { mutate, isPending, isError, isSuccess };
};
