import { useMutation } from '@tanstack/react-query';
import { patchMenteeProfile } from '~/api/user/edit/patchMenteeProfile';

export const usePatchMenteeProfile = () => {
  return useMutation({
    mutationFn: patchMenteeProfile,
  });
};
