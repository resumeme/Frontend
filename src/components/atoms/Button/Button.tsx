import { Button as ChakraButton } from '@chakra-ui/react';

type ButtonProps = {
  variant?: 'default' | 'cancel';
  size?: 'lg' | 'md' | 'sm' | 'xs' | 'full';

  children: string;
};

const Button = ({ size = 'full', variant = 'default', children }: ButtonProps) => {
  return (
    <ChakraButton
      variant={variant}
      size={size}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
