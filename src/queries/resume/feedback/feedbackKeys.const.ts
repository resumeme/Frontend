export const feedbackKeys = {
  all: ['feedback'] as const,
  resumeFeedbacks: (resumeId: string, eventId: string) =>
    [...feedbackKeys.all, 'getResumeFeedbacks', { resumeId }, { eventId }] as const,
  feedbacksSnapshot: (resumeId: string) =>
    [...feedbackKeys.all, 'getFeedbacksSnapshot', { resumeId }] as const,
};
