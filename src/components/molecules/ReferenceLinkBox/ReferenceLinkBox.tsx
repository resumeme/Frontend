import { Box, Flex, Icon, IconProps, Link, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { AiFillGithub } from 'react-icons/ai';
import { HiLink, HiHome, HiOutlineMinusCircle, HiOutlineX } from 'react-icons/hi';

type ReferenceLinkBoxProps = {
  type: 'default' | 'github' | 'blog';
  url?: string;
};

export const LINK_ICON_TYPES = {
  default: HiLink,
  github: AiFillGithub,
  blog: HiHome,
  remove: HiOutlineX,
  remove2: HiOutlineMinusCircle,
};

export const renderIcon = (icon: IconType, size: string, props?: IconProps) => {
  return (
    <Icon
      as={icon}
      fontSize={size}
      color={'gray.800'}
      {...props}
    />
  );
};

const ReferenceLinkBox = ({ url, type = 'default' }: ReferenceLinkBoxProps) => {
  return (
    <Flex>
      <Link
        href={url}
        isExternal
        display={'flex'}
        alignItems={'center'}
        gap={2}
      >
        <Box
          rounded={'full'}
          w={'28px'}
          h={'28px'}
          bg={'gray.100'}
          display={'flex'}
          border="1px solid"
          borderColor="gray.300"
          justifyContent={'center'}
          alignItems={'center'}
          role="group"
          _groupHover={{
            bg: 'gray.200',
            transform: 'translateY(-1px)',
            transitionDuration: '0.25s',
            transitionTimingFunction: 'ease-in-out',
          }}
        >
          {renderIcon(LINK_ICON_TYPES[type], 'lg', {
            _groupHover: {
              color: 'primary.900',
            },
          })}
        </Box>
        <Text
          color="gray.700"
          fontSize={'sm'}
          maxWidth="320px"
          textOverflow="ellipsis"
          noOfLines={1}
        >
          {url}
        </Text>
      </Link>
    </Flex>
  );
};

export default ReferenceLinkBox;
