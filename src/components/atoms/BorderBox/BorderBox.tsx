import { Box, BoxProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

export type BorderBoxProps = BoxProps & {
  children?: ReactNode;
  hasShadow?: boolean;
};

const BOX_SHADOW_VALUE = '0px 0px 4px rgba(0, 0, 0, 0.25)';

const BorderBox = ({
  children,
  borderWidth = '1px',
  borderRadius = '1.06rem',
  borderColor = 'gray.300',
  px = '4',
  py = '4',
  bg = 'gray.100',
  color = 'gray.700',
  hasShadow = false,
  ...props
}: BorderBoxProps) => {
  return (
    <Box
      borderWidth={borderWidth}
      borderRadius={borderRadius}
      borderColor={borderColor}
      px={px}
      py={py}
      bg={bg}
      color={color}
      {...props}
      boxShadow={hasShadow ? BOX_SHADOW_VALUE : 'none'}
    >
      {children}
    </Box>
  );
};

export default BorderBox;
