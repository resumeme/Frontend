import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { categoryKeys } from '../categoryKeys.const';
import { postResumeActivity } from '~/api/resume/create/postResumeActivity';
import { Activity } from '~/types/activity';

export const usePostResumeActivity = (resumeId: string) => {
  const queryClient = useQueryClient();
  const TARGET_QUERY_KEY = categoryKeys.activity(resumeId);
  return useMutation({
    mutationKey: ['postActivity'],
    mutationFn: postResumeActivity,
    onMutate: async ({ resumeActivity: newActivity }) => {
      await queryClient.cancelQueries({ queryKey: TARGET_QUERY_KEY });
      const previousActivities = queryClient.getQueryData(TARGET_QUERY_KEY);
      queryClient.setQueryData(TARGET_QUERY_KEY, (old: Activity[]) => [...old, newActivity]);
      return { previousActivities };
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    onError: (err, newActivity, context) => {
      queryClient.setQueryData(TARGET_QUERY_KEY, context?.previousActivities);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: TARGET_QUERY_KEY });
    },
  });
};
