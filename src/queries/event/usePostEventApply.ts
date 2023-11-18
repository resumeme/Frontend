import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import postEventApply from '~/api/event/postEventApply';
import { ResumeMeErrorResponse } from '~/types/errorResponse';

const usePostEventApply = () => {
  const toast = useToast();
  return useMutation({
    mutationFn: postEventApply,
    onSuccess: () => {
      toast({
        description: '이벤트 신청에 성공했습니다.',
      });
    },
    onError: (error) => {
      if (isAxiosError<ResumeMeErrorResponse>(error)) {
        toast({
          description: error.response?.data.message,
        });
      }
    },
  });
};

export default usePostEventApply;
