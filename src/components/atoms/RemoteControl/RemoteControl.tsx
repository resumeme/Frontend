import { Box } from '@chakra-ui/react';
import { BorderBoxProps } from '~/components/atoms/BorderBox/BorderBox';

type RemoteControlProps = {
  top?: string;
  w?: string;
  children: React.ReactNode;
} & BorderBoxProps;

const RemoteControl = ({
  children,
  top = '10.6rem',
  w = '15rem',
  ...props
}: RemoteControlProps) => {
  return (
    <Box
      position="sticky"
      zIndex={'1'}
      top={top}
      w={w}
      py={3}
      px={3}
      minH={'17rem'}
      h={'fit-content'}
      bg={'white'}
      border={'1px solid'}
      borderColor={'gray.300'}
      borderRadius={'2xl'}
      boxShadow={'0px 0px 2px rgba(0, 0, 0, 0.25)'}
      {...props}
    >
      {children}
    </Box>
  );
};

export default RemoteControl;
