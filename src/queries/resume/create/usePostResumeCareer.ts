import { useMutation } from '@tanstack/react-query';
import { postResumeCareer } from '~/api/resume/create/postResumeCareer';
import Career from '~/types/career';

export const usePostResumeCareer = (resumeId: number, resumeCareer: Career) => {
  return useMutation({
    mutationKey: ['postCareer', resumeId],
    mutationFn: () => postResumeCareer(resumeId, resumeCareer),
  });
};
