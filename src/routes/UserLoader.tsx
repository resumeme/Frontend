// import { useToast } from '@chakra-ui/react';
// import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
// import { appPaths } from '~/config/paths';
import useUser from '~/hooks/useUser';

export type CheckUser = {
  role?: 'mentee' | 'mentor' | 'pending';
};

const useUserCheck = ({ role }: CheckUser) => {
  const { user } = useUser();

  // const toast = useToast();

  if (!user) {
    //   toast.closeAll();
    //   toast({
    //     description: '로그인이 필요해요.',
    //     status: 'info',
    //   });
    //   return (
    //     <Navigate
    //       to={appPaths.signIn()}
    //       replace
    //     />
    //   );
    /*TODO - 유저 mock 작성 후 수정 */
    return <Outlet />;
  }

  if (role && user.role !== role) {
    //   toast.closeAll();
    //   toast({
    //     description: `${role === 'mentee' ? '멘티' : '멘토'}로 로그인해야 확인할 수 있어요.`,
    //     status: 'info',
    //   });
    //   return <Navigate to={appPaths.main()} />;
  }

  return <Outlet />;
};

const UserLoader = () => {
  return useUserCheck({});
};

const MentorLoader = () => {
  return useUserCheck({ role: 'mentor' });
};

const MenteeLoader = () => {
  return useUserCheck({ role: 'mentee' });
};

export { UserLoader, MentorLoader, MenteeLoader };
