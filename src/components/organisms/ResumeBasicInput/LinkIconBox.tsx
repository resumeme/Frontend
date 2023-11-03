import { LinkIcon } from '@chakra-ui/icons';
import { Box, Text, Link, Flex, Icon } from '@chakra-ui/react';
import { DiGithubAlt } from 'react-icons/di';

type LinkIconBoxProps = {
  variant?: 'default' | 'github';
  url?: string;
};

const LinkIconBox = ({ url, variant = 'github' }: LinkIconBoxProps) => {
  return (
    <Link href={url}>
      <Flex
        gap={2}
        align={'center'}
        role="group"
      >
        <Box
          rounded={'full'}
          w={'28px'}
          h={'28px'}
          bg={'gray.100'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          role="group"
          _groupHover={{
            bg: 'gray.200',
            fontColor: 'primary.700',
            transform: 'translateY(-1px)',
            transitionDuration: '0.25s',
            transitionTimingFunction: 'ease-in-out',
          }}
        >
          {variant === 'default' ? (
            <LinkIcon
              fontSize={'sm'}
              color={'gray.800'}
              _groupHover={{
                color: 'primary.900',
              }}
            />
          ) : (
            <Icon
              as={DiGithubAlt}
              fontSize={'xl'}
              color={'gray.800'}
              _groupHover={{
                color: 'primary.900',
              }}
            />
          )}
        </Box>
        <Box color={'gray.700'}>
          <Text fontSize={'sm'}>{url}</Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default LinkIconBox;
