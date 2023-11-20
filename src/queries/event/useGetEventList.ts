import { useSuspenseQuery } from '@tanstack/react-query';
import { getEventList } from '~/api/event/getEventList';
import { eventKeys } from '~/queries/event/eventKeys.const';
import { Pagination } from '~/types/pagination';

export const useGetEventList = ({ page, size }: Pagination) => {
  return useSuspenseQuery({
    queryKey: eventKeys.getPaginatedEvents(page, size),
    queryFn: () => getEventList({ page, size }),
  });
};
