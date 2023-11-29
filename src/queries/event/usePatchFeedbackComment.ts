import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { feedbackKeys } from '../resume/feedback/feedbackKeys.const';
import { patchFeedbackComment } from '~/api/resume/feedback/patchFeedbackComment';

const usePatchFeedbackComment = (resumeId: string, eventId: string) => {
  const toast = useToast();
  const queryClient = useQueryClient();
  const TARGET_QUERY_KEY = feedbackKeys.resumeFeedbacks(resumeId, eventId);

  return useMutation({
    mutationFn: patchFeedbackComment,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: TARGET_QUERY_KEY, type: 'active' });
      toast({
        description: '성공적으로 수정되었습니다 :)',
        status: 'success',
      });
    },
  });
};

export default usePatchFeedbackComment;
