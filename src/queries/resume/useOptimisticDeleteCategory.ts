import { useToast } from '@chakra-ui/react';
import { QueryKey, useMutation, useQueryClient } from '@tanstack/react-query';
import { DeleteResumeCategory } from '~/types/api/deleteResumeCategory';
import { Categories, ReadCategories } from '~/types/resume/categories';

type UseOptimisticDelete<T extends Categories> = {
  mutationFn: DeleteResumeCategory<T>;
  TARGET_QUERY_KEY: QueryKey;
  onMutateSuccess?: () => void;
};
export const useOptimisticDeleteCategory = <T extends Categories, U extends ReadCategories>({
  mutationFn,
  TARGET_QUERY_KEY,
  onMutateSuccess,
}: UseOptimisticDelete<T>) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn,
    onMutate: async ({ blockId: targetBlockId }) => {
      await queryClient.cancelQueries({ queryKey: TARGET_QUERY_KEY });
      const previousCategoryData = queryClient.getQueryData(TARGET_QUERY_KEY);
      queryClient.setQueryData(TARGET_QUERY_KEY, (old: U[]) => {
        return old.filter((blockData: U) => blockData.componentId !== targetBlockId);
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
        description: '삭제 완료',
      });
      if (onMutateSuccess) {
        onMutateSuccess();
      }
    },
  });
};
