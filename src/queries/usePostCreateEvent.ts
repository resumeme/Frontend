import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import CONSTANTS from './../constants/index';
import postCreateEvent from '~/api/event/postCreateEvent';
import { ErrorMessage } from '~/types/errorResponse';

export const usePostCreateEvent = () => {
  const navigate = useNavigate();

  const toast = useToast();

  return useMutation({
    mutationFn: postCreateEvent,
    onSuccess: ({ id }) => {
      navigate(`/event/view/${id}`, { replace: true });
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast({
          description: CONSTANTS.ERROR_MESSAGES[error.code as ErrorMessage],
        });
      }
    },
  });
};
