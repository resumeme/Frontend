import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { patchFeedbackReject } from '~/api/resume/feedback/patchFeedbackReject';
import { appPaths } from '~/config/paths';
import CONSTANTS from '~/constants';
import useUser from '~/hooks/useUser';
import { ResumeMeErrorResponse } from '~/types/errorResponse';

const usePatchFeedbackReject = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { user } = useUser();

  return useMutation({
    mutationFn: patchFeedbackReject,
    onSuccess: () => {
      toast({
        description: '성공적으로 반려되었습니다 :)',
        status: 'success',
      });

      if (user) {
        navigate(appPaths.myPage(user.id));
      } else {
        navigate(appPaths.main());
      }
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

export default usePatchFeedbackReject;
