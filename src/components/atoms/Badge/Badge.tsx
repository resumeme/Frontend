import { Badge as ChakraBadge, BadgeProps as ChakraBadgeProps, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { UserRole } from '~/types/user';

type BadgeProps = ChakraBadgeProps & {
  children: ReactNode;
  type?: UserRole | 'default';
};

const Badge = ({
  children,
  px = '1.5',
  py = '1',
  bg = 'gray.300',
  color = 'gray.800',
  type = 'default',
  ...props
}: BadgeProps) => {
  const BADGE_TYPE_COLOR = {
    default: {
      color,
      bg,
    },
    mentor: {
      color: 'gray.100',
      bg: 'highlight.500',
    },
    mentee: {
      color: 'primary.800',
      bg: 'primary.100',
    },
    pending: {
      color: 'gray.100',
      bg: 'highlight.500',
    },
  };
  return (
    <ChakraBadge
      bg={BADGE_TYPE_COLOR[type].bg}
      px={px}
      py={py}
      borderRadius={'base'}
      {...props}
    >
      <Text color={BADGE_TYPE_COLOR[type].color}>{children}</Text>
    </ChakraBadge>
  );
};

export default Badge;
