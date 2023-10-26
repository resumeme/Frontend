import { Badge as ChakraBadge, BadgeProps as ChakraBadgeProps } from '@chakra-ui/react';

type BadgeProps = ChakraBadgeProps & {
  label: string;
};

const Badge = ({ label, color, bg, ...props }: BadgeProps) => {
  return (
    <ChakraBadge
      fontSize="1rem"
      color={color}
      borderRadius="md"
      px={1}
      py={1}
      bg={bg}
      {...props}
    >
      {label}
    </ChakraBadge>
  );
};

export default Badge;
