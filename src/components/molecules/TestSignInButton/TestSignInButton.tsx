import { Box, Image, Text } from '@chakra-ui/react';
import { BorderBox } from '~/components/atoms/BorderBox';
import { assets } from '~/config/assets';

type TestSignInButtonProps = {
  logo: 'mentee' | 'mentor';
  onClick: VoidFunction;
};

const TestSignInButton = ({ logo, onClick }: TestSignInButtonProps) => {
  const LOGOS = {
    mentee: {
      svg: assets.menteeSvg,
      text: '멘티',
    },
    mentor: {
      svg: assets.mentorSvg,
      text: '멘토',
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
        position={'relative'}
      >
        <Box
          w={'auto'}
          h={'1.2rem'}
          zIndex={1}
          bgColor={'gray.900'}
          position="absolute"
          top={'0'}
          right={'-3'}
          borderLeftRadius={'0.2rem'}
          paddingLeft={'0.4rem'}
          paddingRight={'0.6rem'}
        >
          <Text
            fontWeight={'bold'}
            fontSize={'xs'}
            color={'lightgreen'}
          >
            TEST
          </Text>
        </Box>
        <Image
          src={LOGOS[logo].svg}
          alt={LOGOS[logo].text}
        />
        <Box as="span">{LOGOS[logo].text}</Box>
      </BorderBox>
    </button>
  );
};

export default TestSignInButton;
