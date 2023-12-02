import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  checkboxAnatomy.keys,
);

const baseStyle = definePartsStyle({
  control: {
    _checked: {
      bg: 'primary.700',
      borderColor: 'primary.700',
      _hover: {
        bg: 'primary.900',
        borderColor: 'primary.900',
      },
    },
  },
});

const Checkbox = defineMultiStyleConfig({ baseStyle });

export { Checkbox };
