import { useSuspenseQuery } from '@tanstack/react-query';
import { GetEventDetail, getEventDetail } from '~/api/event/details/getEventDetail';

export const useGetEventDetail = ({ eventId }: GetEventDetail) => {
  return useSuspenseQuery({
    queryKey: ['getEventDetail', eventId],
    queryFn: () => getEventDetail({ eventId }),
  });
};
