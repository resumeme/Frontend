import { useToast } from '@chakra-ui/react';
import { QueryKey, useMutation, useQueryClient } from '@tanstack/react-query';
import { PostResumeCategory } from '~/types/api/postResumeCategory';
import { Categories } from '~/types/resume/categories';

type UseOptimisticPost<T extends Categories> = {
  mutationFn: PostResumeCategory<T>;
  TARGET_QUERY_KEY: QueryKey;
  onMutateSuccess?: () => void;
};
export const useOptimisticPostCategory = <T extends Categories>({
  mutationFn,
  TARGET_QUERY_KEY,
  onMutateSuccess,
}: UseOptimisticPost<T>) => {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation({
    mutationFn,
    onMutate: async (newCategoryBlock) => {
      await queryClient.cancelQueries({ queryKey: TARGET_QUERY_KEY });
      const previousCategoryData = queryClient.getQueryData(TARGET_QUERY_KEY);
      queryClient.setQueryData(TARGET_QUERY_KEY, (old: T[]) => {
        return [...old, newCategoryBlock];
      });
      return { previousCategoryData };
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    onError: (err, newCategoryBlock, context) => {
      toast({
        title: '서버에 문제가 생겼습니다.',
        description: '다시 시도해주세요.',
        status: 'error',
      });
      queryClient.setQueryData(TARGET_QUERY_KEY, context?.previousCategoryData);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: TARGET_QUERY_KEY });
    },
    onSuccess: () => {
      toast({
        status: 'success',
        description: '저장 완료',
      });
      if (onMutateSuccess) {
        onMutateSuccess();
      }
    },
  });
};
