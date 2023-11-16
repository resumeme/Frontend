import { useQuery } from '@tanstack/react-query';
import { categoryKeys } from '../categoryKeys.const';
import { GetResumeActivities, getResumeActivities } from '~/api/resume/details/getResumeActivities';

export const useGetResumeActivities = ({ resumeId }: GetResumeActivities) => {
  return useQuery({
    queryKey: categoryKeys.activity(resumeId),
    queryFn: () => getResumeActivities({ resumeId }),
    enabled: !!resumeId,
  });
};
