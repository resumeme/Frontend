import { useQuery } from '@tanstack/react-query';
import { categoryKeys } from '../categoryKeys.const';
import { GetResumeCareer, getResumeCareer } from '~/api/resume/details/getResumeCareer';

export const useGetResumeCareer = ({ resumeId }: GetResumeCareer) => {
  return useQuery({
    queryKey: categoryKeys.career,
    queryFn: () => getResumeCareer({ resumeId }),
    enabled: !!resumeId,
  });
};
