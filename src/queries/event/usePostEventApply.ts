import { useMutation } from '@tanstack/react-query';
import postEventApply from '~/api/event/postEventApply';

const usePostEventApply = () => {
  return useMutation({
    mutationFn: postEventApply,
  });
};

export default usePostEventApply;
