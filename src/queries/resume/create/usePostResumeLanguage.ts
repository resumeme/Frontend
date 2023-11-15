import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { categoryKeys } from '../categoryKeys.const';
import { postResumeLanguage } from '~/api/resume/create/postResumeLanguage';
import { Language } from '~/types/language';

export const usePostResumeLanguage = (resumeId: string) => {
  const queryClient = useQueryClient();
  const TARGET_QUERY_KEY = categoryKeys.language(resumeId);
  return useMutation({
    mutationKey: ['postLanguage'],
    mutationFn: postResumeLanguage,
    onMutate: async (newLanguage) => {
      await queryClient.cancelQueries({ queryKey: TARGET_QUERY_KEY });
      const previousLanguages = queryClient.getQueryData(TARGET_QUERY_KEY);
      queryClient.setQueryData(TARGET_QUERY_KEY, (old: Language[]) => [...old, newLanguage]);
      return { previousLanguages };
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    onError: (err, newLanguage, context) => {
      queryClient.setQueryData(TARGET_QUERY_KEY, context?.previousLanguages);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: TARGET_QUERY_KEY });
    },
  });
};
