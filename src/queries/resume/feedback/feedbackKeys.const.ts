export const feedbackKeys = {
  all: ['feedback'] as const,
  resumeFeedbacks: (resumeId: string, eventId: string) =>
    [...feedbackKeys.all, 'getResumeFeedbacks', { resumeId }, { eventId }] as const,
};
