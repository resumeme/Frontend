import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { categoryKeys } from '../categoryKeys.const';
import { postResumeCareer } from '~/api/resume/create/postResumeCareer';
import Career from '~/types/career';

export const usePostResumeCareer = (resumeId: string) => {
  const queryClient = useQueryClient();
  const TARGET_QUERY_KEY = categoryKeys.career(resumeId);
  return useMutation({
    mutationKey: ['postCareer'],
    mutationFn: postResumeCareer,
    onMutate: async (newCareer) => {
      await queryClient.cancelQueries({ queryKey: TARGET_QUERY_KEY });
      const previousCareers = queryClient.getQueryData(TARGET_QUERY_KEY);
      queryClient.setQueryData(TARGET_QUERY_KEY, (old: Career[]) => [...old, newCareer]);
      return { previousCareers };
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    onError: (err, newCareer, context) => {
      queryClient.setQueryData(TARGET_QUERY_KEY, context?.previousCareers);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: TARGET_QUERY_KEY });
    },
  });
};
