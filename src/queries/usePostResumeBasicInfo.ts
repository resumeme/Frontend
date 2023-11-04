import { useMutation } from '@tanstack/react-query';
import postResumeBasicInfo from '~/api/resume/postResumeBasicInfo';

export const usePostResumeBasicInfo = () => {
  return useMutation({
    mutationFn: postResumeBasicInfo,
  });
};
