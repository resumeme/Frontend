import useUser from './useUser';
import { useGetManagementEvents } from '~/queries/event/details/useGetManagementEvents';

const useCheckOpenedEvent = () => {
  const { user } = useUser();

  const { data: events, refetch } = useGetManagementEvents({
    role: user?.role,
    userId: Number(user?.id),
  });

  const hasOpenedEvent = () => {
    refetch();
    return !!(
      events &&
      events.find((event) => event.info.status !== 'FINISH' && event.info.status !== 'CLOSE')
    );
  };

  return hasOpenedEvent;
};

export { useCheckOpenedEvent };
