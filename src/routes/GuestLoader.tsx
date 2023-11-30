import { createStandaloneToast } from '@chakra-ui/react';
import { redirect } from 'react-router-dom';
import { getUser } from '~/hooks/useUser';
import theme from '~/theme';

const { toast } = createStandaloneToast({ theme });

const userCheck = async () => {
  const user = await getUser();

  if (user) {
    toast({
      duration: 2000,
      position: 'top',
      description: '이미 로그인 되어 있어요.',
      status: 'info',
    });
    return redirect('/');
  }

  return null;
};

const GuestLoader = () => {
  return userCheck();
};

export default GuestLoader;
