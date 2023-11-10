import { Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import { appPaths } from '~/config/paths';

const SignUpMenteeCompleteTemplate = () => {
  const TEXT = {
    MAIN: '가입이 완료되었습니다.',
    /**FIXME - 로그인 후 이름 api에서 받아와 OOO 대체하기 */
    SUB: `이력, 써에 오신 것을 환영합니다. OOO님!\n이력서를 관리하고 자유롭게 피드백을 주고 받아보세요.`,
  };
  const navigate = useNavigate();
  return (
    <BorderBox
      hasShadow
      w={'31.25rem'}
    >
      <VStack
        p={'3rem 3rem 2rem'}
        spacing={'2.5rem'}
      >
        <Text
          color={'gray.900'}
          fontWeight={'bold'}
          fontSize={'1.5rem'}
        >
          {TEXT.MAIN}
        </Text>
        <Text
          whiteSpace={'pre-line'}
          textAlign={'center'}
        >
          {TEXT.SUB}
        </Text>
        <Button onClick={() => navigate(appPaths.main)}>홈으로 이동하기</Button>
      </VStack>
    </BorderBox>
  );
};

export default SignUpMenteeCompleteTemplate;
