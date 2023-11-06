import { useQuery } from '@tanstack/react-query';
import { GetResumeActivities, getResumeActivities } from '~/api/resume/details/getResumeActivities';

export const useGetResumeActivities = ({ resumeId }: GetResumeActivities) => {
  return useQuery({
    queryKey: ['getResumeActivities'],
    queryFn: () => getResumeActivities({ resumeId }),
    enabled: !!resumeId,
  });
};
