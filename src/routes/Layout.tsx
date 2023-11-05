import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Footer } from '~/components/organisms/Footer';
import { Header } from '~/components/organisms/Header';
import { ResumeBasicInput } from '~/components/organisms/ResumeBasicInput';
import { ResumeCategoryCareer } from '~/components/organisms/ResumeCategoryCareer';

const Layout = () => {
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
        w={'100%'}
        maxW={'992px'}
        mx={'auto'}
        py={'3rem'}
        px={'12px'}
      >
        <Outlet />
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
