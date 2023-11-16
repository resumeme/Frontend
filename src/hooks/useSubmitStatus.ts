import { useToast } from '@chakra-ui/react';
import { useEffect } from 'react';

type UseSubmitStatus = {
  isPostSuccess?: boolean;
  isPatchSuccess?: boolean;
  isPostError?: boolean;
  isPatchError?: boolean;
  onPostSuccess?: () => void;
  onPatchSuccess?: () => void;
};

export const useSubmitStatus = ({
  isPostSuccess,
  isPatchSuccess,
  isPostError,
  isPatchError,
  onPostSuccess,
  onPatchSuccess,
}: UseSubmitStatus) => {
  const toast = useToast();
  useEffect(() => {
    if (isPostSuccess) {
      toast({
        description: '성공적으로 저장되었습니다.',
        status: 'success',
      });
      if (onPostSuccess) {
        onPostSuccess();
      }
    }
    if (isPatchSuccess) {
      toast({
        description: '성공적으로 저장되었습니다.',
        status: 'success',
      });
      if (onPatchSuccess) {
        onPatchSuccess();
      }
    }
    if (isPostError || isPatchError) {
      toast({
        title: '서버에 문제가 생겼습니다.',
        description: '다시 시도해주세요.',
        status: 'error',
      });
    }
  }, [isPostSuccess, isPatchSuccess, isPostError, isPatchError]);
};
