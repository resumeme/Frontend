import { useSuspenseQuery } from '@tanstack/react-query';
import { getMyResumes } from '~/api/resume/getMyResumes';

export const resumesKeys = {
  all: ['resumes'] as const,
  my: () => [...resumesKeys.all, 'myResumes'] as const,
  feedback: (menteeId: number) => [...resumesKeys.all, menteeId],
};

export const useGetMyResumes = () => {
  return useSuspenseQuery({
    queryKey: resumesKeys.my(),
    queryFn: getMyResumes,
  });
};
