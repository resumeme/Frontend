import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import postEventApply from '~/api/event/postEventApply';

const usePostEventApply = () => {
  const toast = useToast();
  return useMutation({
    mutationFn: postEventApply,
    onSuccess: () => {
      toast({
        status: 'success',
        description: '이벤트 신청에 성공했습니다 :)',
        duration: 2000,
        position: 'top',
      });
    },
  });
};

export default usePostEventApply;
