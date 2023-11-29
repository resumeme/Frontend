import { useSuspenseQuery } from '@tanstack/react-query';
import { userKeys } from './userKeys';
import { GetIsAppliedEvent, getIsAppliedEvent } from '~/api/user/getIsAppliedEvent';

export const useGetIsAppliedEvent = ({ eventId }: GetIsAppliedEvent) => {
  return useSuspenseQuery({
    queryKey: userKeys.isAppliedEvent(eventId),
    queryFn: () => getIsAppliedEvent({ eventId }),
  });
};
