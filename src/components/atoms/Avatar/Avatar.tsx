import { AvatarProps as ChakraAvatarProps, Avatar as ChakraAvatar } from '@chakra-ui/react';

type AvatarProps = {
  size?: 'sm' | 'md' | 'lg' | 'full';
} & Omit<ChakraAvatarProps, 'size'>;

const Avatar = ({ size = 'md', ...props }: AvatarProps) => {
  return (
    <ChakraAvatar
      size={size}
      {...props}
    />
  );
};

export default Avatar;
