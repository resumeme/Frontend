import { BellIcon } from '@chakra-ui/icons';
import { Box, Flex, Button, Stack, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

type NavItem = {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
};

const TEXT_CONTENTS = {
  LOGO: 'resume.me',
  SIGN: '회원가입 / 로그인',
};

const NAV_ITEMS: Array<NavItem> = [
  {
    label: '이력서',
    href: '/mypage/mentee',
  },
  {
    label: '피드백',
    href: '/event/view',
  },
  {
    label: '커뮤니티',
    href: '#',
  },
];

const Navigation = () => {
  const linkColor = 'gray.800';
  const linkHoverColor = 'gray.600';

  return (
    <Stack
      direction={'row'}
      spacing={'70px'}
    >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Box
            as="a"
            p={2}
            href={navItem.href ?? '#'}
            fontSize={'sm'}
            fontWeight={600}
            color={linkColor}
            _hover={{
              color: linkHoverColor,
            }}
          >
            {navItem.label}
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

const Header = () => {
  return (
    <Box
      className="box"
      bg="white"
      borderBottom={1}
      borderStyle={'solid'}
      borderColor="gray.300"
      display="flex"
      justifyContent="center"
    >
      <Flex
        className="flex"
        bg={'white'}
        color={'gray.700'}
        minH={'65px'}
        w={'992px'}
        maxW={'992px'}
        px="12px"
        justify={'center'}
        align={'center'}
      >
        <Flex
          flex={1}
          justify={'start'}
        >
          <Link to="/">
            {/* NOTE LOGO */}
            <Flex align="center">
              <Box
                bg="gray.800"
                w="24px"
                h="24px"
                borderRadius="md"
                mr="12px"
              />
              <Heading
                fontSize={'xl'}
                fontWeight={'black'}
                color={'gray.800'}
              >
                {TEXT_CONTENTS.LOGO}
              </Heading>
            </Flex>
          </Link>
          <Flex
            display="flex"
            ml={10}
          >
            <Navigation />
          </Flex>
        </Flex>

        {/* NOTE LOGIN, NOTIFICATION */}
        <Stack
          direction={'row'}
          spacing={2}
        >
          <Button
            w={'144px'}
            h={'40px'}
            fontSize={'sm'}
            fontWeight={600}
            color={'primary.900'}
            bg={'transparent'}
            border={'1px'}
            borderColor={'gray.300'}
            _hover={{
              bg: 'gray.200',
            }}
          >
            {TEXT_CONTENTS.SIGN}
          </Button>
          <Button
            w={'30px'}
            h={'40px'}
            fontSize={'sm'}
            fontWeight={600}
            bg={'transparent'}
            color="gray.800"
            _hover={{
              bg: 'gray.200',
              color: 'primary.900',
            }}
          >
            <BellIcon fontSize={'1.2rem'} />
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Header;
