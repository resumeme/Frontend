export const userKeys = {
  all: ['user'] as const,
  user: () => [...userKeys.all, 'getUser'] as const,
  isAppliedEvent: (eventId: string) => [...userKeys.all, 'getIsAppliedEvent', { eventId }] as const,
};
