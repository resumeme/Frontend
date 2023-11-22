import { useSuspenseQuery } from '@tanstack/react-query';

import { feedbackKeys } from './feedbackKeys.const';
import { getResumeFeedbacks, GetResumeFeedbacks } from '~/api/resume/feedback/getResumeFeedbacks';

export const useGetResumeFeedbacks = ({ resumeId, eventId }: GetResumeFeedbacks) => {
  return useSuspenseQuery({
    queryKey: feedbackKeys.resumeFeedbacks(resumeId, eventId),
    queryFn: () => getResumeFeedbacks({ resumeId, eventId }),
  });
};
