import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  forwardRef,
} from '@chakra-ui/react';

export type ButtonProps = ChakraButtonProps & {
  variant?: 'default' | 'cancel';
  size?: 'lg' | 'md' | 'sm' | 'xs' | 'full';
};

const Button = forwardRef<ButtonProps, 'button'>(
  ({ size = 'full', variant = 'default', children, ...props }, ref) => (
    <ChakraButton
      variant={variant}
      size={size}
      {...props}
      ref={ref}
    >
      {children}
    </ChakraButton>
  ),
);

export default Button;
