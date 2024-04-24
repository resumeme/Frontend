import { Box, Image, Text } from '@chakra-ui/react';
import { BorderBox } from '~/components/atoms/BorderBox';
import { assets } from '~/config/assets';

type TestSignInButtonProps = {
  logo: 'mentee' | 'mentor';
  onClick: VoidFunction;
};

const TestSignInButton = ({ logo, onClick }: TestSignInButtonProps) => {
  const PLATFORMS = {
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
          bgColor={'primary.900'}
          borderTopRightRadius={'0.5rem'}
          borderBottomLeftRadius={'0.5rem'}
          borderBottomRightRadius={'2rem'}
          w={'auto'}
          h={'1.5rem'}
          paddingX={'0.5rem'}
          pr={'0.7rem'}
          textColor={'white'}
          borderColor={'primary.900'}
          position="absolute"
          top={'-0.3'}
          right={'-2'}
          zIndex={1}
          gap={0}
        >
          <Text
            textAlign={'center'}
            fontWeight={'black'}
            fontSize={'sm'}
            color={'gray.100'}
          >
            TEST
          </Text>
        </Box>
        <Image
          src={PLATFORMS[logo].svg}
          alt={PLATFORMS[logo].text}
        />
        <Box as="span">{PLATFORMS[logo].text}</Box>
      </BorderBox>
    </button>
  );
};

export default TestSignInButton;
