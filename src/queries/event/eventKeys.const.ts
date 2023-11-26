export const eventKeys = {
  all: ['events'] as const,
  getPaginatedEvents: (page: number, size: number) => [
    ...eventKeys.all,
    'getPaginatedEvents',
    { page },
    { size },
  ],
  getEventDetail: (eventId: string) => [...eventKeys.all, 'getEventDetail', eventId],
};
