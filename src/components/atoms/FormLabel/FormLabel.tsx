import {
  Box,
  FormLabel as ChakraFormLabel,
  FormLabelProps as ChakraFormLabelProps,
} from '@chakra-ui/react';

export type FormLabelProps = {
  isRequired?: boolean;
} & ChakraFormLabelProps;

const FormLabel = ({ w = '6.9375rem', children, isRequired = false, ...props }: FormLabelProps) => {
  return (
    <ChakraFormLabel
      fontWeight={600}
      lineHeight={'normal'}
      fontSize={'1.125rem'}
      w={w}
      mx={0}
      mt={'0.87rem'}
      color={'gray.700'}
      p={0}
      {...props}
    >
      {children}
      {isRequired && (
        <Box
          as="span"
          color="primary.900"
        >
          {' '}
          *
        </Box>
      )}
    </ChakraFormLabel>
  );
};

export default FormLabel;
