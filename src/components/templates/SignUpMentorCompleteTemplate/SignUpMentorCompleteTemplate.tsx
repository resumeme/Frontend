import { Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import { appPaths } from '~/config/paths';

const SignUpMentorCompleteTemplate = () => {
  const TEXT = {
    MAIN: '멘토 가입 신청이 완료되었습니다.',
    /**TODO - 멘트 점검: 가입 검토 소요 시간, 알람 기능 되는지 */
    SUB: `멘토 가입 검토는 최소 5분에서 최대 3일까지 소요됩니다.\n검토가 끝난 경우, 연동한 소셜 서비스로 알람을 보내드려요.`,
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

export default SignUpMentorCompleteTemplate;
