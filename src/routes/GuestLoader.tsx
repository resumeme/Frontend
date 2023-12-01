import { createStandaloneToast } from '@chakra-ui/react';
import { Navigate, Outlet } from 'react-router-dom';
import { appPaths } from '~/config/paths';
import useUser from '~/hooks/useUser';
import theme from '~/theme';

const { toast } = createStandaloneToast({ theme });

const useUserCheck = () => {
  const { user } = useUser();

  if (user) {
    toast.closeAll();
    toast({
      duration: 2000,
      position: 'top',
      description: '이미 로그인 되어 있어요.',
      status: 'info',
    });
    return (
      <Navigate
        to={appPaths.main()}
        replace
      />
    );
  }

  return <Outlet />;
};

const GuestLoader = () => {
  return useUserCheck();
};

export default GuestLoader;
