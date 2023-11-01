import {
  FormControl as ChakraFormControl,
  Stack,
  FormControlProps as ChakraFormControlProps,
} from '@chakra-ui/react';

type FormControlProps = {
  direction?: 'row' | 'column';
  spacing?: string;
} & ChakraFormControlProps;

const FormControl = ({
  spacing = '0',
  direction = 'row',
  children,
  ...props
}: FormControlProps) => {
  return (
    <ChakraFormControl {...props}>
      <Stack
        direction={direction}
        spacing={spacing}
      >
        {children}
      </Stack>
    </ChakraFormControl>
  );
};

export default FormControl;
