import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import postCreateEvent from '~/api/event/postCreateEvent';
import { appPaths } from '~/config/paths';

export const usePostCreateEvent = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: postCreateEvent,
    onSuccess: ({ id }) => {
      navigate(appPaths.eventDetail(id), { replace: true });
    },
  });
};
