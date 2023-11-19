import { useSuspenseQuery } from '@tanstack/react-query';
import { resumesKeys } from './useGetMyResumes';
import { GetFeedbackResumesProps, getFeedbackResumes } from '~/api/resume/getFeedbackResumes';

export const useGetFeedbackResumes = ({ menteeId }: GetFeedbackResumesProps) => {
  return useSuspenseQuery({
    queryKey: resumesKeys.feedback(menteeId),
    queryFn: () => getFeedbackResumes({ menteeId }),
  });
};
