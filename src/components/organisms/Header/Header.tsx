import { Box, Flex, Button, Stack, Image } from '@chakra-ui/react';
import { IoCaretDownOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar } from '~/components/atoms/Avatar';
import { OptionsButton } from '~/components/molecules/OptionsButton';
import { Option } from '~/components/molecules/OptionsButton/OptionsButton';
import { assets } from '~/config/assets';
import { appPaths } from '~/config/paths';
import useUser from '~/hooks/useUser';
import { usePostSignOut } from '~/queries/usePostSignOut';
import { User, UserRole } from '~/types/user';

const TEXT_CONTENTS = {
  LOGO: 'resume.me',
  SIGN: '회원가입 / 로그인',
  SIGN_OUT: '로그아웃',
  MY_PAGE: '마이페이지',
  RESUME: '이력서 관리',
  EDIT_PROFILE: '회원정보 수정',
  CREATE_EVENT: '이벤트 생성',
};

const USER_NAV_ITEMS: Record<UserRole | 'common', Record<string, string>[]> = {
  mentee: [
    {
      label: '이력서',
      href: appPaths.managementResume(),
    },
    {
      label: '피드백',
      href: appPaths.viewEvent(),
    },
  ],
  mentor: [
    {
      label: '피드백',
      href: appPaths.viewEvent(),
    },
  ],
  pending: [
    {
      label: '피드백',
      href: appPaths.viewEvent(),
    },
  ],
  common: [
    {
      label: '이력서',
      href: appPaths.signIn(),
    },
    {
      label: '피드백',
      href: appPaths.viewEvent(),
    },
  ],
};

const ASSETS = {
  LOGO: {
    svg: assets.logoSvg,
    text: '로고',
  },
  TEXT: {
    svg: assets.logoText,
    text: '이력써',
  },
};

const Navigation = ({ user }: { user: User | null }) => {
  const linkColor = 'gray.800';
  const linkHoverColor = 'gray.600';

  const NAV_ITEMS = user ? USER_NAV_ITEMS[user.role] : USER_NAV_ITEMS.common;

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
  const { user } = useUser();
  const { mutate: signOut } = usePostSignOut();

  const navigate = useNavigate();

  const mentorOptions: Option[] = [
    { text: TEXT_CONTENTS.MY_PAGE, onClick: () => navigate(appPaths.myPage(user?.id)) },
    { text: TEXT_CONTENTS.CREATE_EVENT, onClick: () => navigate(appPaths.eventCreate()) },
    { text: TEXT_CONTENTS.EDIT_PROFILE, onClick: () => navigate(appPaths.userEditInfo()) },
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
              <Image
                h={'26px'}
                minH={'26px'}
                src={assets.logoLight}
                alt={ASSETS.LOGO.text}
                borderRadius={'md'}
                mr="0.7rem"
              />
              {/* <Image
                h={'26px'}
                minH={'26px'}
                src={ASSETS.LOGO.svg}
                alt={ASSETS.LOGO.text}
                borderRadius={'md'}
                mr="0.7rem"
              /> */}
              <Image
                h={'18px'}
                src={ASSETS.TEXT.svg}
                alt={ASSETS.TEXT.text}
              />
              {/* <Heading
                fontSize={'xl'}
                fontWeight={'black'}
                color={'gray.800'}
              >
                {TEXT_CONTENTS.LOGO}
              </Heading> */}
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
              gap={3}
            >
              <Link to={appPaths.myPage(user.id)}>
                <Avatar
                  w="30px"
                  h="30px"
                  src={user.imageUrl}
                  outline={'2px solid'}
                  outlineColor={'gray.300'}
                  _hover={{
                    outline: '5px solid',
                    outlineColor: 'gray.300',
                    transition: 'ease-in-out 0.2s',
                  }}
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
