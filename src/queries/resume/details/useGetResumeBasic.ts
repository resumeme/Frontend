import { useQuery } from '@tanstack/react-query';
import { categoryKeys } from '../categoryKeys.const';
import { GetResumeBasic, getResumeBasic } from '~/api/resume/details/getResumeBasic';

export const useGetResumeBasic = ({ resumeId }: GetResumeBasic) => {
  return useQuery({
    queryKey: categoryKeys.basic(resumeId),
    queryFn: () => getResumeBasic({ resumeId }),
    enabled: !!resumeId,
  });
};
