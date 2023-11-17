import { useSuspenseQuery } from '@tanstack/react-query';
import { getMyResumes } from '~/api/resume/getMyResumes';

export const useGetMyResumes = () => {
  return useSuspenseQuery({
    queryKey: ['getMyResumes'],
    queryFn: getMyResumes,
  });
};
