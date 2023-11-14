import { Spinner as ChakraSpinner, SpinnerProps as ChakraSpinnerProps } from '@chakra-ui/react';

const Spinner = ({ ...props }: ChakraSpinnerProps) => {
  return (
    <ChakraSpinner
      color="primary.900"
      thickness="4px"
      size={'xl'}
      {...props}
    />
  );
};

export default Spinner;
