import { useQuery } from '@tanstack/react-query';
import { GetResumeAward, getResumeAward } from '~/api/resume/details/getResumeAward';

export const useGetResumeAward = ({ resumeId }: GetResumeAward) => {
  return useQuery({
    queryKey: ['getResumeAward'],
    queryFn: () => getResumeAward({ resumeId }),
    enabled: !!resumeId,
  });
};
