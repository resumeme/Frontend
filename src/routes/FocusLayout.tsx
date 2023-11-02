import { Box, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const FocusLayout = () => {
  return (
    <Flex
      minH={'100vh'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Box maxW={'992px'}>
        <Outlet />
      </Box>
    </Flex>
  );
};

export default FocusLayout;
