import { QueryKey, useMutation, useQueryClient } from '@tanstack/react-query';
import { PatchResumeCategory } from '~/types/api/patchResumeCategory';
import { Categories } from '~/types/resume/categories';

export const usePatchCategoryBlock = <T extends Categories>(
  mutationFn: PatchResumeCategory<T>,
  TARGET_QUERY_KEY: QueryKey,
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn,
    onMutate: async (newProject) => {
      await queryClient.cancelQueries({ queryKey: TARGET_QUERY_KEY });
      const previousProjects = queryClient.getQueryData(TARGET_QUERY_KEY);
      queryClient.setQueryData(TARGET_QUERY_KEY, (old: T[]) => [...old, newProject]);
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
