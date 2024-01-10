import { useMutation } from '@tanstack/react-query';
import { patchResumeTitle } from '~/api/resume/create/patchResumeTitle';

export const usePatchResumeTitle = () => {
  return useMutation({
    mutationKey: ['patchTitle'],
    mutationFn: patchResumeTitle,
  });
};
