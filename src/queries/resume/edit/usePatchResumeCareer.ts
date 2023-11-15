import { useMutation } from '@tanstack/react-query';
import { patchResumeCareer } from '~/api/resume/edit/patchResumeCareer';

export const usePatchResumeCareer = () => {
  return useMutation({
    mutationKey: ['patchResumeCareer'],
    mutationFn: patchResumeCareer,
  });
};
