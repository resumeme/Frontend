import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { postResumeTraining } from '~/api/resume/create/postResumeTraining';
import { Activity } from '~/types/activity';

export const usePostResumeTraining = () => {
  const queryClient = useQueryClient();
  const TARGET_QUERY_KEY = 'getResumeTraining';
  return useMutation({
    mutationKey: ['postCareer'],
    mutationFn: postResumeTraining,
    onMutate: async (newProject) => {
      await queryClient.cancelQueries({ queryKey: [TARGET_QUERY_KEY] });
      const previousProjects = queryClient.getQueryData([TARGET_QUERY_KEY]);
      queryClient.setQueryData([TARGET_QUERY_KEY], (old: Activity[]) => [...old, newProject]);
      return { previousProjects };
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    onError: (err, newProject, context) => {
      queryClient.setQueryData([TARGET_QUERY_KEY], context?.previousProjects);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [TARGET_QUERY_KEY] });
    },
  });
};
