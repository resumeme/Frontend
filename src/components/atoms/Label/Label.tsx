import {
  Badge as ChakraBadge,
  BadgeProps as ChakraBadgeProps,
  ResponsiveValue,
  Text,
  ThemeTypings,
} from '@chakra-ui/react';
import * as CSS from 'csstype';
import { ReactNode } from 'react';
import CONSTANTS from '~/constants';
import { Position } from '~/types/position';

type LabelType = 'default' | Position;
type LabelProps = ChakraBadgeProps & {
  children?: ReactNode;
  type?: LabelType;
};

const Label = ({
  children = '기본값',
  px = '2.5',
  py = '1',
  bg = 'gray.800',
  color = 'gray.100',
  type = 'default',
  ...props
}: LabelProps) => {
  // TODO 라벨 색상들 테마에 추가하기 (색상 이름에 지정 라벨명 붙여서)
  const LABEL_TYPE_CONTENTS: Record<
    LabelType,
    { bg: ResponsiveValue<CSS.Property.Color | ThemeTypings['colors']> }
  > = {
    default: {
      bg,
    },
    FRONT: {
      bg: 'cyan.700',
    },
    FULLSTACK: {
      bg: 'gray.800',
    },
    BACK: {
      bg: 'orange.500',
    },
    MOBILE: {
      bg: 'green.600',
    },
    DEVOPS: {
      bg: 'pink.600',
    },
    ML_AI: {
      bg: 'purple.700',
    },
  };
  return (
    <ChakraBadge
      bg={LABEL_TYPE_CONTENTS[type].bg}
      px={px}
      py={py}
      borderRadius={'full'}
      display={'flex'}
      alignItems={'center'}
      {...props}
    >
      <Text color={color}>{type === 'default' ? children : CONSTANTS.POSITION[type]}</Text>
    </ChakraBadge>
  );
};

export default Label;
