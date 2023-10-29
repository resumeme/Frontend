import { avatarAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, cssVar } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const $size = cssVar('avatar-size');

const getSize = (size: string | number) => {
  return definePartsStyle({
    container: {
      [$size.variable]: size,
    },
  });
};

const sizes = {
  sm: getSize('1.375rem'),
  md: getSize('6rem'),
  lg: getSize('10rem'),
  full: getSize('100%'),
};

const Avatar = defineMultiStyleConfig({
  sizes,
});

export { Avatar };
