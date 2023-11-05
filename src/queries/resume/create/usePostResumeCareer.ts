import { useMutation } from '@tanstack/react-query';
import { postResumeCareer } from '~/api/resume/create/postResumeCareer';
import Career from '~/types/career';

type UsePostResumeCareer = { resumeId: string; resumeCareer: Career };

export const usePostResumeCareer = () => {
  return useMutation({
    mutationKey: ['postCareer'],
    mutationFn: ({ resumeId, resumeCareer }: UsePostResumeCareer) =>
      postResumeCareer(resumeId, resumeCareer),
  });
};
