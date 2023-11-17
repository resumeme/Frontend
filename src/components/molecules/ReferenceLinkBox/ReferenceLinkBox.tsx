import { Box, Flex, Icon, IconProps, Link, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { AiFillGithub } from 'react-icons/ai';
import { HiLink, HiHome, HiOutlineMinusCircle, HiOutlineX } from 'react-icons/hi';

type ReferenceLinkBoxProps = {
  linkType?: string;
  url?: string;
};

export const LINK_ICON_TYPES: Record<string, IconType> = {
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

const ReferenceLinkBox = ({ url, linkType = 'default' }: ReferenceLinkBoxProps) => {
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
          w={'1.75rem'}
          h={'1.75rem'}
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
          {renderIcon(LINK_ICON_TYPES[linkType], 'lg', {
            _groupHover: {
              color: 'primary.900',
            },
          })}
        </Box>
        <Text
          color={'gray.700'}
          fontSize={'sm'}
          maxWidth={'16rem'}
          textOverflow={'ellipsis'}
          noOfLines={1}
        >
          {url}
        </Text>
      </Link>
    </Flex>
  );
};

export default ReferenceLinkBox;
