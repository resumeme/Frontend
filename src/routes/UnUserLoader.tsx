import { redirect } from 'react-router-dom';
import CONSTANTS from '~/constants';
import { getCookie } from '~/utils/cookie';

const userCheck = async () => {
  const user = getCookie(CONSTANTS.ACCESS_TOKEN_HEADER);

  if (user) {
    redirect('/');
    return false;
  }

  return null;
};

const UnUserLoader = () => {
  return userCheck();
};

export default UnUserLoader;
