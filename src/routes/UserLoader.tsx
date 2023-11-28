import { createStandaloneToast } from '@chakra-ui/react';
import { redirect } from 'react-router-dom';
import { appPaths } from '~/config/paths';
import theme from '~/theme';
import { getCookie } from '~/utils/cookie';

const { toast } = createStandaloneToast({ theme });

export type CheckUser = {
  role?: 'mentee' | 'mentor' | 'pending';
};

const userCheck = async ({ role }: CheckUser) => {
  const userRole = getCookie('role');

  if (!userRole) {
    toast({ description: '로그인이 필요해요.', status: 'info' });
    return redirect(appPaths.signIn());
  }

  if (role && userRole !== role) {
    toast({ description: '멘티로 로그인해야 확인할 수 있어요.', status: 'info' });
    return redirect('/');
  }

  return null;
};

const UserLoader = async () => {
  return userCheck({});
};

const MentorLoader = async () => {
  return userCheck({ role: 'mentor' });
};

const MenteeLoader = async () => {
  return userCheck({ role: 'mentee' });
};

export { UserLoader, MentorLoader, MenteeLoader };
