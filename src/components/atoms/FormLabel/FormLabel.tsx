import {
  Box,
  FormLabel as ChakraFormLabel,
  FormLabelProps as ChakraFormLabelProps,
  Flex,
  Text,
} from '@chakra-ui/react';

export type FormLabelProps = {
  isRequired?: boolean;
  subText?: string;
  subTextDirection?: 'row' | 'column';
} & ChakraFormLabelProps;

const FormLabel = ({
  w = '6.9375rem',
  children,
  isRequired = false,
  subText,
  subTextDirection = 'row',
  ...props
}: FormLabelProps) => {
  return (
    <ChakraFormLabel
      flexShrink={0}
      fontWeight={600}
      lineHeight={'normal'}
      fontSize={'1.125rem'}
      w={w}
      mx={0}
      mt={'0.87rem'}
      color={'gray.700'}
      p={0}
      display={subText ? 'flex' : 'block'}
      flexDirection={subTextDirection}
      {...props}
    >
      <Flex gap={'2px'}>
        {children}
        {isRequired && (
          <Box
            as="span"
            color="primary.900"
            flexDirection={'row'}
          >
            *
          </Box>
        )}
      </Flex>
      {subText && (
        <Text
          color={'gray.500'}
          fontWeight={'light'}
        >
          {subText}
        </Text>
      )}
    </ChakraFormLabel>
  );
};

export default FormLabel;
