import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import postCreateEvent from '~/api/event/postCreateEvent';

export const usePostCreateEvent = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: postCreateEvent,
    onSuccess: ({ id }) => {
      navigate(`/event/view/${id}`, { replace: true });
    },
  });
};
