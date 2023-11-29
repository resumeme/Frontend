export const userKeys = {
  all: ['user'] as const,
  isAppliedEvent: (eventId: string) => [...userKeys.all, 'getIsAppliedEvent', { eventId }] as const,
};
