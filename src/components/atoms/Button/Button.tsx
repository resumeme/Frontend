import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

type ButtonProps = ChakraButtonProps & {
  variant?: 'default' | 'cancel';
  size?: 'lg' | 'md' | 'sm' | 'xs' | 'full';
  children: string;
};

const Button = ({ size = 'full', variant = 'default', children, ...props }: ButtonProps) => {
  return (
    <ChakraButton
      variant={variant}
      size={size}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
