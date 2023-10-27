import { defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
  sizes: {
    lg: {
      w: '25.25rem',
    },
    md: {
      w: '10rem',
    },
    sm: {
      w: '5.125rem',
    },
    xs: {
      w: '3.16rem',
    },
    full: {
      w: '100%',
    },
  },
  variants: {
    cancel: {
      borderColor: 'gray.300',
      color: 'gray.400',
      bg: 'gray.100',
    },
    default: {
      color: 'gray.100',
      bg: 'primary.900',
    },
  },
  defaultProps: {},
});
export { Button };
