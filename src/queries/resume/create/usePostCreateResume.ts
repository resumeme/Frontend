import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { postCreateResume } from '~/api/resume/create/postCreateResume';
import { appPaths } from '~/config/paths';

export const usePostCreateResume = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ['postResume'],
    mutationFn: postCreateResume,
    onSuccess: ({ id }) => {
      navigate(appPaths.resumeEdit(id));
    },
  });
};
