import { Badge as ChakraBadge, BadgeProps as ChakraBadgeProps, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

type LabelProps = ChakraBadgeProps & {
  children?: ReactNode;
  type?: 'default' | 'frontend' | 'fullstack' | 'mobile' | 'backend' | 'devops' | 'ai';
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
  const LABEL_TYPE_CONTENTS = {
    default: {
      bg,
      text: children,
    },
    frontend: {
      bg: 'cyan.700',
      text: '프론트엔드',
    },
    fullstack: {
      bg: 'gray.800',
      text: '웹 풀스택',
    },
    backend: {
      bg: 'orange.500',
      text: '서버/백엔드',
    },
    mobile: {
      bg: 'green.600',
      text: '모바일',
    },
    devops: {
      bg: 'pink.600',
      text: '데브옵스/시스템',
    },
    ai: {
      bg: 'purple.700',
      text: '인공지능/머신러닝',
    },
  };
  return (
    <ChakraBadge
      bg={LABEL_TYPE_CONTENTS[type].bg}
      px={px}
      py={py}
      borderRadius={'full'}
      {...props}
    >
      <Text color={color}>{LABEL_TYPE_CONTENTS[type].text}</Text>
    </ChakraBadge>
  );
};

export default Label;
