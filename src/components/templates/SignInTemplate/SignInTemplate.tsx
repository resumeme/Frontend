import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Divider, Flex, HStack, Heading, Icon, Text, VStack } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import { RiNotionFill } from 'react-icons/ri';
import { BorderBox } from '~/components/atoms/BorderBox';
import { OAuthSignInButton } from '~/components/molecules/OAuthSignInButton';
import { environments } from '~/config/environments';

const TEXT = {
  welcomeMessage: '이력, 써에 가입하고 피드백을 받아보세요.',
  logo: 'resume.me',
  subMessage: '연동할 소셜 서비스 계정을 선택하세요.',
  findAccountMessage: '계정을 잊으셨나요?',
  copyright: 'ⓒ 아몬드빼빼로',
};

const SignInTemplate = () => {
  const kakaoSignInUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${environments.kakaoRestApiKeyEnv()}&redirect_uri=${environments.kakaoRedirectUriEnv()}&response_type=code`;
  const handleKakaoClick = () => {
    window.location.href = kakaoSignInUrl;
  };

  return (
    <BorderBox
      w={'27.75rem'}
      py={'2.5rem'}
    >
      <VStack spacing={'2.2rem'}>
        <Logo />
        <Text
          color={'gray.900'}
          fontSize={'xl'}
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
      </VStack>
    </BorderBox>
  );
};

const Logo = () => {
  return (
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
        {TEXT.logo}
      </Heading>
    </Flex>
  );
};

const ReferenceLinks = () => {
  return (
    <HStack spacing={'1.69rem'}>
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
    </HStack>
  );
};

export default SignInTemplate;
