import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { postFeedbackComment } from '~/api/resume/feedback/postFeedbackComment';
import CONSTANTS from '~/constants';
import { ResumeMeErrorResponse } from '~/types/errorResponse';

const usePostFeedbackComment = () => {
  const toast = useToast();
  return useMutation({
    mutationFn: postFeedbackComment,
    onSuccess: () => {
      toast({
        description: '저장되었어요 :)',
        status: 'success',
      });
    },
    /**TODO - queryClient에 공통 에러 처리 (onError) 설정해주기 */
    onError: (error) => {
      if (isAxiosError<ResumeMeErrorResponse>(error)) {
        if (error.response) {
          const errorCode = error.response.data.code;
          toast({
            description: CONSTANTS.ERROR_MESSAGES[errorCode],
            status: 'error',
          });
        }
      }
    },
  });
};

export default usePostFeedbackComment;
