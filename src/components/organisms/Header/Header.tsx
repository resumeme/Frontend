import { Box, Flex, Button, Stack, Heading } from '@chakra-ui/react';
import { IoCaretDownOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar } from '~/components/atoms/Avatar';
import { OptionsButton } from '~/components/molecules/OptionsButton';
import { Option } from '~/components/molecules/OptionsButton/OptionsButton';
import { appPaths } from '~/config/paths';
import useUser from '~/hooks/useUser';
import { usePostSignOut } from '~/queries/usePostSignOut';
import { User } from '~/types/user';
type NavItem = {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
};

const TEXT_CONTENTS = {
  LOGO: 'resume.me',
  SIGN: '회원가입 / 로그인',
  SIGN_OUT: '로그아웃',
  MY_PAGE: '마이페이지',
  RESUME: '이력서 관리',
  EDIT_PROFILE: '회원정보 수정',
  CREATE_EVENT: '이벤트 생성',
};

const MENTEE_NAV_ITEMS: Array<NavItem> = [
  {
    label: '이력서',
    href: appPaths.managementResume(),
  },
  {
    label: '피드백',
    href: appPaths.viewEvent(),
  },
  //TODO - 커뮤니티 기능 생기면 추가
  // {
  //   label: '커뮤니티',
  //   href: '#',
  // },
];

const MENTOR_NAV_ITEMS: Array<NavItem> = [
  {
    label: '피드백',
    href: appPaths.viewEvent,
  },
  //TODO - 커뮤니티 기능 생기면 추가
  // {
  //   label: '커뮤니티',
  //   href: '#',
  // },
];

const COMMON_NAV_ITEMS = [
  {
    label: '이력서',
    href: appPaths.managementResume,
  },
  {
    label: '피드백',
    href: appPaths.viewEvent,
  },
  //TODO - 커뮤니티 기능 생기면 추가
  // {
  //   label: '커뮤니티',
  //   href: '#',
  // },
];

const Navigation = ({ user }: { user: User | null }) => {
  const linkColor = 'gray.800';
  const linkHoverColor = 'gray.600';

  const NAV_ITEMS = user
    ? user.role === 'mentor'
      ? MENTOR_NAV_ITEMS
      : MENTEE_NAV_ITEMS
    : COMMON_NAV_ITEMS;

  return (
    <Stack
      direction={'row'}
      spacing={'70px'}
    >
      {NAV_ITEMS.map((navItem) => (
        <>
          {user?.role === 'mentor'}
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
        </>
      ))}
    </Stack>
  );
};

const Header = () => {
  const { user } = useUser();
  const { mutate: signOut } = usePostSignOut();

  const navigate = useNavigate();

  const mentorOptions: Option[] = [
    { text: TEXT_CONTENTS.MY_PAGE, onClick: () => navigate(appPaths.myPage(user?.id)) },
    { text: TEXT_CONTENTS.CREATE_EVENT, onClick: () => navigate(appPaths.eventCreate()) },
    { text: TEXT_CONTENTS.EDIT_PROFILE, onClick: () => navigate(appPaths.userEditInfo) },
    { text: TEXT_CONTENTS.SIGN_OUT, onClick: signOut },
  ];

  const menteeOptions: Option[] = [
    { text: TEXT_CONTENTS.MY_PAGE, onClick: () => navigate(appPaths.myPage(user?.id)) },
    { text: TEXT_CONTENTS.RESUME, onClick: () => navigate(appPaths.managementResume()) },
    { text: TEXT_CONTENTS.EDIT_PROFILE, onClick: () => navigate(appPaths.userEditInfo()) },
    { text: TEXT_CONTENTS.SIGN_OUT, onClick: signOut },
  ];
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
            <Navigation user={user} />
          </Flex>
        </Flex>

        {/* NOTE LOGIN, NOTIFICATION */}
        <Stack
          direction={'row'}
          spacing={2}
        >
          {user ? (
            <Flex
              align={'center'}
              gap={'1rem'}
            >
              <Link to={appPaths.myPage(user.id)}>
                <Avatar
                  size="sm"
                  src={user.imageUrl}
                />
              </Link>
              <OptionsButton
                label={user.nickname}
                options={user.role === 'mentee' ? menteeOptions : mentorOptions}
                icon={IoCaretDownOutline}
              />
            </Flex>
          ) : (
            <Link to={appPaths.signIn()}>
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
            </Link>
          )}
        </Stack>
      </Flex>
    </Box>
  );
};

export default Header;
