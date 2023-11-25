import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { resumesKeys } from '../useGetMyResumes';
import { patchResumeMemo } from '~/api/resume/create/patchResumeMemo';

export const usePatchResumeMemo = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['patchResumeMemo'],
    mutationFn: patchResumeMemo,
    onSuccess: () => {
      toast({
        description: '메모가 저장되었어요 :)',
        status: 'success',
      });
      queryClient.refetchQueries({ queryKey: resumesKeys.my() });
    },
    onError: (error) => {
      toast({
        description: error.message,
        status: 'error',
      });
    },
  });
};
