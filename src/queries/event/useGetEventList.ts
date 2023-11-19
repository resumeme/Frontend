import { useSuspenseQuery } from '@tanstack/react-query';
import { getEventList } from '~/api/event/getEventList';

export const useGetEventList = () => {
  return useSuspenseQuery({
    queryKey: ['getEventList'],
    queryFn: getEventList,
  });
};
