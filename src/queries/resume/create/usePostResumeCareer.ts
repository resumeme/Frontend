import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { postResumeCareer } from '~/api/resume/create/postResumeCareer';
import Career from '~/types/career';

export const usePostResumeCareer = () => {
  const queryClient = useQueryClient();
  const TARGET_QUERY_KEY = 'getResumeCareer';
  return useMutation({
    mutationKey: ['postCareer'],
    mutationFn: postResumeCareer,
    onMutate: async (newCareer) => {
      await queryClient.cancelQueries({ queryKey: [TARGET_QUERY_KEY] });
      const previousCareers = queryClient.getQueryData([TARGET_QUERY_KEY]);
      queryClient.setQueryData([TARGET_QUERY_KEY], (old: Career[]) => [...old, newCareer]);
      return { previousCareers };
    },
    onError: (err, newCareer, context) => {
      queryClient.setQueryData([TARGET_QUERY_KEY], context?.previousCareers);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [TARGET_QUERY_KEY] });
    },
  });
};
