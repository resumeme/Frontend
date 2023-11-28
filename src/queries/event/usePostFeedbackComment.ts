import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { feedbackKeys } from '../resume/feedback/feedbackKeys.const';
import { postFeedbackComment } from '~/api/resume/feedback/postFeedbackComment';
import CONSTANTS from '~/constants';
import { ResumeMeErrorResponse } from '~/types/errorResponse';

const usePostFeedbackComment = (resumeId: string, eventId: string) => {
  const queryClient = useQueryClient();
  const TARGET_QUERY_KEY = feedbackKeys.resumeFeedbacks(resumeId, eventId);
  const toast = useToast({ duration: 2000, position: 'top' });

  return useMutation({
    mutationFn: postFeedbackComment,
    onSuccess: async () => {
      toast({
        description: '저장되었어요 :)',
        status: 'success',
      });
      queryClient.refetchQueries({ queryKey: TARGET_QUERY_KEY, type: 'active' });
    },
    onError: (err) => {
      if (isAxiosError<ResumeMeErrorResponse>(err)) {
        if (err.response) {
          const errorCode = err.response.data.code;
          toast({
            description: CONSTANTS.ERROR_MESSAGES[errorCode],
            status: 'error',
          });
        }
      }
      toast({
        title: '서버에 문제가 생겼습니다.',
        description: '다시 시도해주세요.',
        status: 'error',
      });
    },
  });
};

export default usePostFeedbackComment;
