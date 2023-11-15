import { useQuery } from '@tanstack/react-query';
import { categoryKeys } from '../categoryKeys.const';
import { GetResumeAward, getResumeAward } from '~/api/resume/details/getResumeAward';

export const useGetResumeAward = ({ resumeId }: GetResumeAward) => {
  return useQuery({
    queryKey: categoryKeys.award(resumeId),
    queryFn: () => getResumeAward({ resumeId }),
    enabled: !!resumeId,
  });
};
