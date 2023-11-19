import { useMutation } from '@tanstack/react-query';
import { patchMentorProfile } from '~/api/user/edit/patchMentorProfile';

export const usePatchMentorProfile = () => {
  return useMutation({
    mutationFn: patchMentorProfile,
  });
};
