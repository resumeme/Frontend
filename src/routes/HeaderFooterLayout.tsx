import { Box } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Spinner } from '~/components/atoms/Spinner';
import { Footer } from '~/components/organisms/Footer';
import { Header } from '~/components/organisms/Header';

const HeaderFooterLayout = () => {
  return (
    <Box
      w={'full'}
      minH={'100vh'}
      display={'flex'}
      flexDirection={'column'}
      overflowX={'hidden'}
    >
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
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
      <Box
        flexGrow={0}
        flexShrink={0}
      >
        <Footer />
      </Box>
    </Box>
  );
};

export default HeaderFooterLayout;
