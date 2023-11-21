import { useQuery } from '@tanstack/react-query';
import { categoryKeys } from '../categoryKeys.const';
import { GetResumeDetails, getResumeDetails } from '~/api/resume/details/getResumeDetails';

export const useGetResumeDetails = ({ resumeId }: GetResumeDetails) => {
  return useQuery({
    queryKey: categoryKeys.all,
    queryFn: () => getResumeDetails({ resumeId }),
    enabled: !!resumeId,
  });
};
