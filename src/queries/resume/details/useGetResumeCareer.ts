import { useSuspenseQuery } from '@tanstack/react-query';
import { categoryKeys } from '../categoryKeys.const';
import { GetResumeCareer, getResumeCareer } from '~/api/resume/details/getResumeCareer';

export const useGetResumeCareer = ({ resumeId }: GetResumeCareer) => {
  return useSuspenseQuery({
    queryKey: categoryKeys.career(resumeId),
    queryFn: () => getResumeCareer({ resumeId }),
  });
};
