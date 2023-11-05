import { useQuery } from '@tanstack/react-query';
import { GetResumeCareer, getResumeCareer } from '~/api/resume/details/getResumeCareer';

export const useGetResumeCareer = ({ resumeId }: GetResumeCareer) => {
  return useQuery({
    queryKey: ['getResumeCareer'],
    queryFn: () => getResumeCareer({ resumeId }),
    enabled: !!resumeId,
  });
};
