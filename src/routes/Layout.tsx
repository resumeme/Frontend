import { Box } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollRestoration } from 'react-router-dom';
import { LAYOUT_SIZE } from './layoutSize.const';
import { Spinner } from '~/components/atoms/Spinner';
import { Footer } from '~/components/organisms/Footer';
import { Header } from '~/components/organisms/Header';

const Layout = () => {
  return (
    <Box
      w={'full'}
      minH={'100vh'}
      display={'flex'}
      flexDirection={'column'}
      overflowX={'hidden'}
    >
      <ScrollRestoration />
      <Box
        position={'fixed'}
        zIndex={'sticky'}
        w={'full'}
        top={0}
        left={'50%'}
        transform="translate(-50%, 0)"
        flexGrow={0}
        flexShrink={0}
      >
        <Header />
      </Box>
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
      <Box
        flexGrow={0}
        flexShrink={0}
      >
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
