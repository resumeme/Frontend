import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  inputAnatomy.keys,
);

const inputBaseStyle = definePartsStyle({
  field: {},
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

const inputTheme = defineMultiStyleConfig({
  baseStyle: inputBaseStyle,
  variants: inputVariants,
});

export { inputTheme };
