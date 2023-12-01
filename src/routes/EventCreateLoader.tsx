import { useToast } from '@chakra-ui/react';
import { Navigate, Outlet } from 'react-router-dom';
import { appPaths } from '~/config/paths';
import useUser from '~/hooks/useUser';
import { useGetManagementEvents } from '~/queries/event/details/useGetManagementEvents';

const EventCreateLoader = () => {
  const toast = useToast();
  const { user } = useUser();
  const { data: myEvents } = useGetManagementEvents({ userId: Number(user?.id), role: user?.role });

  const hasOpenedEvent = myEvents?.find(
    (event) => event.info.status !== 'FINISH' && event.info.status !== 'CLOSE',
  );

  if (hasOpenedEvent) {
    toast({ description: '한 번에 하나의 이벤트만 진행할 수 있어요.', status: 'info' });
    return <Navigate to={appPaths.main()} />;
  }

  return <Outlet />;
};

export { EventCreateLoader };
