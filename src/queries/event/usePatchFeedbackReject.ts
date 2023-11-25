import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { patchFeedbackReject } from '~/api/resume/feedback/patchFeedbackReject';
import { appPaths } from '~/config/paths';
import useUser from '~/hooks/useUser';

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
  });
};

export default usePatchFeedbackReject;
