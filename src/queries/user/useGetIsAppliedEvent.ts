import { useQuery } from '@tanstack/react-query';
import { userKeys } from './userKeys';
import { GetIsAppliedEvent, getIsAppliedEvent } from '~/api/user/getIsAppliedEvent';
import { UserRole } from '~/types/user';

export const useGetIsAppliedEvent = ({
  eventId,
  role,
}: GetIsAppliedEvent & { role?: UserRole }) => {
  return useQuery({
    queryKey: userKeys.isAppliedEvent(eventId),
    queryFn: () => getIsAppliedEvent({ eventId }),
    enabled: !!(role === 'mentee'),
  });
};
