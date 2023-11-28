import { createStandaloneToast } from '@chakra-ui/react';
import { redirect } from 'react-router-dom';
import CONSTANTS from '~/constants';
import theme from '~/theme';
import { getCookie } from '~/utils/cookie';

const { toast } = createStandaloneToast({ theme });

const userCheck = async () => {
  const user = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  if (user) {
    toast({ description: '이미 로그인 되어 있어요.', status: 'info' });
    return redirect('/');
  }

  return null;
};

const UnUserLoader = () => {
  return userCheck();
};

export default UnUserLoader;
