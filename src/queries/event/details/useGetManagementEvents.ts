import { useQuery } from '@tanstack/react-query';
import {
  getManagementEvents,
  getManagementEventsProps,
} from '~/api/event/details/getManagementEvents';

type useGetManagementEventsProps = {
  role?: 'mentee' | 'mentor';
} & getManagementEventsProps;

export const eventsKeys = {
  all: ['events'] as const,
  events: ({ userId }: useGetManagementEventsProps) => [...eventsKeys.all, userId] as const,
};

export const useGetManagementEvents = ({ userId, role }: useGetManagementEventsProps) => {
  return useQuery({
    queryKey: [eventsKeys.events({ userId })],
    queryFn: () => getManagementEvents({ userId }),
    enabled: role === 'mentor',
    retry: 0,
  });
};
