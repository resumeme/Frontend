import { useToast } from '@chakra-ui/react';
import { MutationFunction, QueryKey, useMutation, useQueryClient } from '@tanstack/react-query';
import { ResumeCategoryVariables } from '~/types/api/resumeCategoryVariables';
import { Categories } from '~/types/resume/categories';

type UseOptimisticUpdate<T extends Categories> = {
  mutationFn: MutationFunction<T, ResumeCategoryVariables<T>>;
  TARGET_QUERY_KEY: QueryKey;
  onMutateSuccess?: () => void;
};
export const useOptimisticUpdateCategory = <T extends Categories>({
  mutationFn,
  TARGET_QUERY_KEY,
  onMutateSuccess,
}: UseOptimisticUpdate<T>) => {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation({
    mutationFn,
    onMutate: async (newCategoryBlock) => {
      await queryClient.cancelQueries({ queryKey: TARGET_QUERY_KEY });
      const previousProjects = queryClient.getQueryData(TARGET_QUERY_KEY);
      queryClient.setQueryData(TARGET_QUERY_KEY, (old: T[]) => [...old, newCategoryBlock]);
      return { previousProjects };
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    onError: (err, newCategoryBlock, context) => {
      queryClient.setQueryData(TARGET_QUERY_KEY, context?.previousProjects);
      toast({
        title: '서버에 문제가 생겼습니다.',
        description: '다시 시도해주세요.',
        status: 'error',
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: TARGET_QUERY_KEY });
    },
    onSuccess: () => {
      toast({
        status: 'success',
      });
      if (onMutateSuccess) {
        onMutateSuccess();
      }
    },
  });
};
