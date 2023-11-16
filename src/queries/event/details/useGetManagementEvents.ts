import { useSuspenseQuery } from '@tanstack/react-query';
import { getManagementEvents } from '~/api/event/details/getManagementEvents';

export const events = {
  all: ['events'] as const,
};

export const useGetManagementEvents = () => {
  return useSuspenseQuery({
    queryKey: [events.all],
    queryFn: getManagementEvents,
  });
};
