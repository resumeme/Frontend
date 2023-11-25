import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { patchFeedbackComplete } from '~/api/resume/feedback/patchFeedbackComplete';
import { appPaths } from '~/config/paths';
import useUser from '~/hooks/useUser';

const usePatchFeedbackComplete = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { user } = useUser();

  return useMutation({
    mutationFn: patchFeedbackComplete,
    onSuccess: () => {
      toast({
        description: '성공적으로 첨삭되었습니다 :)',
        status: 'success',
      });

      if (user) {
        navigate(appPaths.myPage(user.id));
      } else {
        navigate(appPaths.main());
      }
    },
  });
};

export default usePatchFeedbackComplete;
