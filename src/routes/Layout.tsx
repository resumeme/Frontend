import { Box } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LAYOUT_SIZE } from './layoutSize.const';
import { Spinner } from '~/components/atoms/Spinner';

const Layout = () => {
  return (
    <Box
      flexGrow={1}
      mt={LAYOUT_SIZE.HEADER_HEIGHT}
      w={'100%'}
      maxW={'992px'}
      mx={'auto'}
      py={'3rem'}
      px={'12px'}
    >
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Layout;
