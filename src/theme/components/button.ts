import { defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: '0.625rem',
  },
  sizes: {
    lg: {
      w: '25.25rem',
      h: '2.69rem',
      fontSize: '1rem',
    },
    md: {
      w: '10rem',
      h: '2.69rem',
      fontSize: '1rem',
    },
    sm: {
      w: '5.125rem',
      h: '2.69rem',
      fontSize: '1rem',
    },
    xs: {
      w: '3.16rem',
      h: '2rem',
      fontSize: '0.875rem',
    },
    full: {
      w: '100%',
      h: '2.69rem',
    },
  },
  variants: {
    cancel: {
      border: '1px solid',
      borderColor: 'gray.300',
      color: 'gray.400',
      bg: 'gray.100',
    },
    default: {
      color: 'gray.100',
      bg: 'primary.900',
    },
  },
});
export { Button };
