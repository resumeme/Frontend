import { Box } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Spinner } from '~/components/atoms/Spinner';
import { Footer } from '~/components/organisms/Footer';
import { Header } from '~/components/organisms/Header';

const FeedbackLayout = () => {
  return (
    <Box
      minH={'100vh'}
      display={'flex'}
      flexDirection={'column'}
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
      <Box
        flexGrow={1}
        mt={'66px'}
        maxW={'100vw'}
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

export default FeedbackLayout;
