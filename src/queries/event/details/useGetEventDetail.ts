import { useSuspenseQuery } from '@tanstack/react-query';
import { eventKeys } from '../eventKeys.const';
import { GetEventDetail, getEventDetail } from '~/api/event/details/getEventDetail';

export const useGetEventDetail = ({ eventId }: GetEventDetail) => {
  return useSuspenseQuery({
    queryKey: eventKeys.getEventDetail(eventId),
    queryFn: () => getEventDetail({ eventId }),
  });
};
