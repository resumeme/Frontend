import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { resumesKeys } from '../useGetMyResumes';
import { deleteResume } from '~/api/resume/delete/deleteResume';
import { MyResume } from '~/types/resume/resumeListItem';

export const deleteResumeKeys = {
  all: ['resume'] as const,
};

export const useDeleteResume = () => {
  const queryClient = useQueryClient();
  const TARGET_QUERY_KEY = resumesKeys.my();
  const toast = useToast();
  return useMutation({
    mutationKey: deleteResumeKeys.all,
    mutationFn: deleteResume,
    onMutate: async ({ resumeId }) => {
      await queryClient.cancelQueries({ queryKey: TARGET_QUERY_KEY });
      const previousResumes = queryClient.getQueryData(TARGET_QUERY_KEY);
      queryClient.setQueryData(TARGET_QUERY_KEY, (old: MyResume[]) => {
        return old.filter((resume) => resume.id !== parseInt(resumeId));
      });
      return { previousResumes };
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    onError: (err, newReferenceLinks, context) => {
      toast({
        title: '서버에 문제가 생겼습니다.',
        description: '다시 시도해주세요.',
        status: 'error',
      });
      queryClient.setQueryData(TARGET_QUERY_KEY, context?.previousResumes);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: TARGET_QUERY_KEY });
    },
  });
};
