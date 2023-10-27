import { Button as ChakraButton } from '@chakra-ui/react';

type ButtonProps = {
  type?: 'default' | 'cancel';
  size: 'lg' | 'md' | 'sm' | 'xs';
  children: string;
};

const Button = ({ size, type = 'default', children }: ButtonProps) => {
  const buttonStyle = {
    default: {
      backgroundColor: 'primary.900',
      color: 'gray.100',
      variant: 'solid',
    },
    cancel: {
      backgroundColor: 'gray.100',
      color: 'gray.400',
      variant: 'outline',
    },
  };
  return (
    <ChakraButton
      backgroundColor={buttonStyle[type]['backgroundColor']}
      color={buttonStyle[type]['color']}
      variant={buttonStyle[type]['variant']}
      height={'2.69rem'}
      size={size}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
