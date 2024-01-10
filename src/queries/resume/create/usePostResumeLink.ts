import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { resumeDetailKeys } from '../details/resumeDetailKeys.const';
import { postResumeLink } from '~/api/resume/create/postResumeLink';
import { ReadReferenceLink } from '~/types/referenceLink';

export const usePostResumeLink = (resumeId: string) => {
  const queryClient = useQueryClient();
  const TARGET_QUERY_KEY = resumeDetailKeys.referenceLinks(resumeId);
  const toast = useToast();

  return useMutation({
    mutationFn: postResumeLink,
    onMutate: async (newReferenceLinks) => {
      await queryClient.cancelQueries({ queryKey: TARGET_QUERY_KEY });
      const previousReferenceLinks = queryClient.getQueryData(TARGET_QUERY_KEY);
      queryClient.setQueryData(TARGET_QUERY_KEY, (old: ReadReferenceLink[]) => {
        return [...old, newReferenceLinks];
      });
      return { previousReferenceLinks };
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    onError: (err, newReferenceLinks, context) => {
      toast({
        title: '서버에 문제가 생겼습니다.',
        description: '다시 시도해주세요.',
        status: 'error',
      });
      queryClient.setQueryData(TARGET_QUERY_KEY, context?.previousReferenceLinks);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: TARGET_QUERY_KEY });
    },
  });
};
