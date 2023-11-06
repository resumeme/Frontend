import { useMutation } from '@tanstack/react-query';
import { postResumeProject } from '~/api/resume/create/postResumeProject';

export const usePostResumeProject = () => {
  return useMutation({
    mutationKey: ['postProject'],
    mutationFn: postResumeProject,
  });
};
