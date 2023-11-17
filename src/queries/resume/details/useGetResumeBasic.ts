import { useSuspenseQuery } from '@tanstack/react-query';
import { categoryKeys } from '../categoryKeys.const';
import { GetResumeBasic, getResumeBasic } from '~/api/resume/details/getResumeBasic';

export const useGetResumeBasic = ({ resumeId }: GetResumeBasic) => {
  return useSuspenseQuery({
    queryKey: categoryKeys.basic(resumeId),
    queryFn: () => getResumeBasic({ resumeId }),
  });
};
