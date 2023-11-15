import { useQuery } from '@tanstack/react-query';
import { categoryKeys } from '../categoryKeys.const';
import { GetResumeTraining, getResumeTraining } from '~/api/resume/details/getResumeTraining';

export const useGetResumeTraining = ({ resumeId }: GetResumeTraining) => {
  return useQuery({
    queryKey: categoryKeys.training,
    queryFn: () => getResumeTraining({ resumeId }),
    enabled: !!resumeId,
  });
};
