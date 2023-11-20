import { useMutation } from '@tanstack/react-query';
import { patchResumeBasicInfo } from '~/api/resume/create/patchResumeBasicInfo';

export const usePatchResumeBasicInfo = () => {
  return useMutation({
    mutationKey: ['patchBasicInfo'],
    mutationFn: patchResumeBasicInfo,
  });
};
