import { useMutation } from '@tanstack/react-query';
import postCreateEvent from '~/api/event/postCreateEvent';
// import { resumeMeAxios } from '~/api/axios';

export const usePostCreateEvent = () => {
  return useMutation({ mutationFn: postCreateEvent });
};
