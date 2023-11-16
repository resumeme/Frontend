import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { categoryKeys } from '../categoryKeys.const';
import { postResumeAward } from '~/api/resume/create/postResumeAward';
import { Award } from '~/types/award';

export const usePostResumeAward = (resumeId: string) => {
  const queryClient = useQueryClient();
  const TARGET_QUERY_KEY = categoryKeys.award(resumeId);
  return useMutation({
    mutationKey: ['postAward'],
    mutationFn: postResumeAward,
    onMutate: async ({ resumeAward: newAward }) => {
      await queryClient.cancelQueries({ queryKey: TARGET_QUERY_KEY });
      const previousAwards = queryClient.getQueryData(TARGET_QUERY_KEY);
      queryClient.setQueryData(TARGET_QUERY_KEY, (old: Award[]) => [...old, newAward]);
      return { previousAwards };
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    onError: (err, newAward, context) => {
      queryClient.setQueryData(TARGET_QUERY_KEY, context?.previousAwards);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: TARGET_QUERY_KEY });
    },
  });
};
