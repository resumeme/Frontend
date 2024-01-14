import { ChevronRightIcon } from '@chakra-ui/icons';
import { Image, Divider, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import { RiNotionFill } from 'react-icons/ri';
import { BorderBox } from '~/components/atoms/BorderBox';
import { OAuthSignInButton } from '~/components/molecules/OAuthSignInButton';
import { assets } from '~/config/assets';
import CONSTANTS from '~/constants';

const TEXT = {
  welcomeMessage: '이력, 써에 가입하고 피드백을 받아보세요.',
  logo: 'resume.me',
  subMessage: '연동할 소셜 서비스 계정을 선택하세요.',
  findAccountMessage: '계정을 잊으셨나요?',
  copyright: 'ⓒ 아몬드빼빼로',
};

const SignInTemplate = () => {
  const handleKakaoClick = () => {
    window.location.href = CONSTANTS.KAKAO_SIGNIN_URL;
  };

  return (
    <BorderBox
      w={'27.75rem'}
      py={'2.5rem'}
    >
      <Flex
        justify={'center'}
        direction={'column'}
        gap={'2.2rem'}
      >
        <Logo />
        <Text
          fontSize={'1.125rem'}
          fontWeight={'semibold'}
        >
          {TEXT.welcomeMessage}
        </Text>
        <Divider borderColor={'gray.300'} />
        <Text color={'gray.700'}>{TEXT.subMessage}</Text>
        <OAuthSignInButton
          oAuthPlatform="kakao"
          onClick={handleKakaoClick}
        />
        <Link href={'#'}>
          <Text
            display={'flex'}
            alignItems={'center'}
          >
            {TEXT.findAccountMessage}
            <ChevronRightIcon />
          </Text>
        </Link>
        <Divider borderColor={'gray.300'} />
        <ReferenceLinks />
        <Text
          fontSize={'0.75rem'}
          color={'gray.400'}
        >
          {TEXT.copyright}
        </Text>
      </Flex>
    </BorderBox>
  );
};

const Logo = () => {
  return (
    <Flex align="center">
      <Image
        h={'24px'}
        minH={'24px'}
        src={assets.logoSvg}
        mr="0.7rem"
      />
      <Heading
        fontSize={'xl'}
        fontWeight={'black'}
        color={'gray.800'}
      >
        {TEXT.logo}
      </Heading>
    </Flex>
  );
};

const ReferenceLinks = () => {
  return (
    <Flex
      align={'center'}
      gap={'1.69rem'}
    >
      <Link
        href={'https://github.com/resumeme'}
        isExternal
      >
        <Flex
          alignItems={'center'}
          gap={'0.2rem'}
        >
          <Icon as={AiFillGithub} />
          <Text fontSize={'0.75rem'}>Github</Text>
        </Flex>
      </Link>
      <Link
        href={'https://www.notion.so/prgrms/cfa28ae58fe0496f87883f56f06c42e4?pvs=4'}
        isExternal
      >
        <Flex
          alignItems={'center'}
          gap={'0.2rem'}
        >
          <Icon as={RiNotionFill} />
          <Text fontSize={'0.75rem'}>이력,써</Text>
        </Flex>
      </Link>
    </Flex>
  );
};

export default SignInTemplate;
