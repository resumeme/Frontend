import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { categoryKeys } from '../categoryKeys.const';
import { postResumeProject } from '~/api/resume/create/postResumeProject';
import { Project } from '~/types/project';

export const usePostResumeProject = (resumeId: string) => {
  const queryClient = useQueryClient();
  const TARGET_QUERY_KEY = categoryKeys.project(resumeId);
  return useMutation({
    mutationKey: ['postProject'],
    mutationFn: postResumeProject,
    onMutate: async ({ resumeProject: newProject }) => {
      await queryClient.cancelQueries({ queryKey: TARGET_QUERY_KEY });
      const previousProjects = queryClient.getQueryData(TARGET_QUERY_KEY);
      queryClient.setQueryData(TARGET_QUERY_KEY, (old: Project[]) => [...old, newProject]);
      return { previousProjects };
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    onError: (err, newProject, context) => {
      queryClient.setQueryData(TARGET_QUERY_KEY, context?.previousProjects);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: TARGET_QUERY_KEY });
    },
  });
};
