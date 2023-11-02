import { Box, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const FocusLayout = () => {
  return (
    <Flex
      minH={'100vh'}
      direction={'column'}
    >
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
    </Flex>
  );
};

export default FocusLayout;
