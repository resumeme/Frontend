import { useSuspenseQuery } from '@tanstack/react-query';
import { categoryKeys } from '../categoryKeys.const';
import { GetResumeActivities, getResumeActivities } from '~/api/resume/details/getResumeActivities';

export const useGetResumeActivities = ({ resumeId }: GetResumeActivities) => {
  return useSuspenseQuery({
    queryKey: categoryKeys.activity(resumeId),
    queryFn: () => getResumeActivities({ resumeId }),
  });
};
