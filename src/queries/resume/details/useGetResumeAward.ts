import { useSuspenseQuery } from '@tanstack/react-query';
import { categoryKeys } from '../categoryKeys.const';
import { GetResumeAward, getResumeAward } from '~/api/resume/details/getResumeAward';

export const useGetResumeAward = ({ resumeId }: GetResumeAward) => {
  return useSuspenseQuery({
    queryKey: categoryKeys.award(resumeId),
    queryFn: () => getResumeAward({ resumeId }),
  });
};
