import {
  Spinner as ChakraSpinner,
  SpinnerProps as ChakraSpinnerProps,
  Flex,
} from '@chakra-ui/react';

const Spinner = ({ ...props }: ChakraSpinnerProps) => {
  return (
    <Flex
      w={'full'}
      h={'full'}
      justify={'center'}
      align={'center'}
    >
      <ChakraSpinner
        color="primary.900"
        thickness="4px"
        size={'xl'}
        m={'0 auto'}
        {...props}
      />
    </Flex>
  );
};

export default Spinner;
