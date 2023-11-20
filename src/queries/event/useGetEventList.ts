import { useSuspenseQuery } from '@tanstack/react-query';
import { getEventList } from '~/api/event/getEventList';
import { Pagination } from '~/types/pagination';

export const useGetEventList = ({ page, size }: Pagination) => {
  return useSuspenseQuery({
    queryKey: ['getEventList'],
    queryFn: () => getEventList({ page, size }),
  });
};
