import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import patchEventDetail from '~/api/event/create/patchEventDetail';
import { appPaths } from '~/config/paths';

export const usePatchEventDetail = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: patchEventDetail,
    onSuccess: ({ id }) => {
      navigate(appPaths.eventDetail(id), { replace: true });
    },
  });
};
