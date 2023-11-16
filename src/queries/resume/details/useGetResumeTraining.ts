import { useSuspenseQuery } from '@tanstack/react-query';
import { categoryKeys } from '../categoryKeys.const';
import { GetResumeTraining, getResumeTraining } from '~/api/resume/details/getResumeTraining';

export const useGetResumeTraining = ({ resumeId }: GetResumeTraining) => {
  return useSuspenseQuery({
    queryKey: categoryKeys.training(resumeId),
    queryFn: () => getResumeTraining({ resumeId }),
  });
};
