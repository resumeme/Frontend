import { useMutation } from '@tanstack/react-query';
import { patchFeedbackReflectComplete } from '~/api/resume/feedback/patchFeedbackReflectComplete';

export const usePatchFeedbackReflectComplete = () => {
  return useMutation({
    mutationFn: patchFeedbackReflectComplete,
  });
};
