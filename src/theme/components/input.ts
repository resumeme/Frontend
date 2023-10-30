import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  inputAnatomy.keys,
);

const inputBaseStyle = definePartsStyle({
  field: { _placeholder: { color: 'gray.400' } },
});
const inputVariantOutline = definePartsStyle(() => {
  return {
    field: {
      _focusVisible: {
        boxShadow: 0,
        borderColor: 'primary.900',
      },
    },
  };
});

const inputVariants = {
  outline: inputVariantOutline,
};

const Input = defineMultiStyleConfig({
  baseStyle: inputBaseStyle,
  variants: inputVariants,
});

export { Input };
