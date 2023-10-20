import { Heading } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Heading>예를 들어 Header가 들어갈 공간, Outlet에는 경로가 "/"일 때 null 값이 들어감</Heading>
      <Outlet />
    </>
  );
};

export default Layout;
