import {
  FormControl as ChakraFormControl,
  Flex,
  FormControlProps as ChakraFormControlProps,
} from '@chakra-ui/react';

type FormControlProps = {
  direction?: 'row' | 'column';
  spacing?: string;
} & ChakraFormControlProps;

const FormControl = ({
  spacing = '1.63rem',
  direction = 'row',
  children,
  ...props
}: FormControlProps) => {
  return (
    <ChakraFormControl {...props}>
      <Flex
        direction={direction}
        gap={spacing}
      >
        {children}
      </Flex>
    </ChakraFormControl>
  );
};

export default FormControl;
