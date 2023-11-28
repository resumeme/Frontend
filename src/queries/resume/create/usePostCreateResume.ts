import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { postCreateResume } from '~/api/resume/create/postCreateResume';
import { appPaths } from '~/config/paths';
import { ResumeMeErrorResponse } from '~/types/errorResponse';

export const usePostCreateResume = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ['postResume'],
    mutationFn: postCreateResume,
    onSuccess: ({ id }) => {
      navigate(appPaths.resumeEdit(id));
    },
    onError: (error: Error) => {
      if (isAxiosError<ResumeMeErrorResponse>(error) && error.response) {
        navigate(appPaths.signIn());
      }
    },
  });
};
