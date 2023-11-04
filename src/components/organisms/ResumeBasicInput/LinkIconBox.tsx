import { Box, Text, Link, Flex, Icon, IconProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { AiFillGithub } from 'react-icons/ai';
import { HiLink, HiHome, HiOutlineMinusCircle, HiOutlineX } from 'react-icons/hi';

export type LinkIconBoxProps = {
  type?: 'default' | 'github' | 'blog';
  url?: string;
  onRemove: (url: string) => void;
};

const ICON_TYPE = {
  default: HiLink,
  github: AiFillGithub,
  blog: HiHome,
  remove: HiOutlineX,
  remove2: HiOutlineMinusCircle,
};

const LinkIconBox = ({ url, type = 'github', onRemove }: LinkIconBoxProps) => {
  const handleRemove = () => {
    if (url) {
      onRemove(url);
    }
  };

  const renderIcon = (icon: IconType, props?: IconProps) => {
    return (
      <Icon
        as={icon}
        fontSize={'lg'}
        color={'gray.800'}
        {...props}
      />
    );
  };

  return (
    <Flex
      gap={1}
      align={'center'}
      role="group"
    >
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
            {renderIcon(ICON_TYPE[type], {
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
      <Box
        as="button"
        ml={1}
        p={0}
        onClick={handleRemove}
        fontSize="xs"
        display="none"
        role="group"
        fill="red"
        _groupHover={{
          display: 'block',
        }}
      >
        {renderIcon(ICON_TYPE.remove, {
          color: 'red.500',
        })}
      </Box>
    </Flex>
  );
};

export default LinkIconBox;
