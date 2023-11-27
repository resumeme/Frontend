import { useSuspenseQuery } from '@tanstack/react-query';
import { feedbackKeys } from './feedbackKeys.const';
import { getFeedbacksSnapshot } from '~/api/resume/feedback/getFeedbacksSnapshot';

export const useGetFeedbacksSnapshot = ({ resumeId }: { resumeId: string }) => {
  return useSuspenseQuery({
    queryKey: feedbackKeys.feedbacksSnapshot(resumeId),
    queryFn: () => getFeedbacksSnapshot({ resumeId }),
  });
};
