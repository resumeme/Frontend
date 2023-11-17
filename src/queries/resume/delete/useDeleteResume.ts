import { useMutation } from '@tanstack/react-query';
import { deleteResume } from '~/api/resume/delete/deleteResume';

export const deleteResumeKeys = {
  all: ['resume'] as const,
};

export const useDeleteResume = () => {
  return useMutation({
    mutationKey: deleteResumeKeys.all,
    mutationFn: deleteResume,
  });
};
