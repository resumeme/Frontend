import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const variantOutline = defineStyle(() => {
  return {
    _placeholder: { color: 'gray.400' },
    _focusVisible: {
      boxShadow: '0',
      _invalid: { borderColor: 'red', boxShadow: '0' },
    },
    boxShadow: '0',
    border: '1px solid',
    borderColor: 'gray.300',
    h: '3.125rem',
  };
});

const variants = {
  outline: variantOutline,
};

const Textarea = defineStyleConfig({
  variants,
});

export { Textarea };
