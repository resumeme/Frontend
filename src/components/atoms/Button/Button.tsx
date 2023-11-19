import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import { forwardRef } from 'react';

export type ButtonProps = ChakraButtonProps & {
  variant?: 'default' | 'cancel';
  size?: 'lg' | 'md' | 'sm' | 'xs' | 'full';
  children: string;
};

const Button = forwardRef(
  ({ size = 'full', variant = 'default', children, ...props }: ButtonProps) => {
    return (
      <ChakraButton
        variant={variant}
        size={size}
        {...props}
      >
        {children}
      </ChakraButton>
    );
  },
);

Button.displayName = 'Button';

export default Button;
