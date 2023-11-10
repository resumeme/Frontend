import { Box, Image } from '@chakra-ui/react';
import { BorderBox } from '~/components/atoms/BorderBox';
import { assets } from '~/config/assets';

type OAuthSignInButtonProps = {
  oAuthPlatform: 'kakao';
  onClick: () => void;
};

const OAuthSignInButton = ({ oAuthPlatform, onClick }: OAuthSignInButtonProps) => {
  const PLATFORMS = {
    kakao: {
      svg: assets.kakaoLogoSvg,
      text: '카카오',
    },
  };

  return (
    <button onClick={onClick}>
      <BorderBox
        w={'5.8rem'}
        h={'8rem'}
        display={'flex'}
        flexDirection="column"
        gap={'0.7rem'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Image
          src={PLATFORMS[oAuthPlatform].svg}
          alt={PLATFORMS[oAuthPlatform].text}
        />
        <Box as="span">{PLATFORMS[oAuthPlatform].text}</Box>
      </BorderBox>
    </button>
  );
};

export default OAuthSignInButton;
