import { Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import { appPaths } from '~/config/paths';
import { SignUpRole } from '~/types/signUp';
import { User } from '~/types/user';

const SignUpCompleteTemplate = ({ role, user }: { role: SignUpRole; user?: User | null }) => {
  const TEXT = {
    pending: {
      MAIN: '멘토 가입 신청이 완료되었습니다.',
      /**TODO - 멘트 점검: 가입 검토 소요 시간, 알람 기능 되는지 */
      SUB: `멘토 가입 검토는 최소 5분에서 최대 3일까지 소요됩니다.\n검토가 끝난 경우, 연동한 소셜 서비스로 알람을 보내드려요.`,
    },
    mentee: {
      MAIN: '가입이 완료되었습니다.',
      SUB: `이력, 써에 오신 것을 환영합니다. ${user?.realName}님!\n이력서를 관리하고 자유롭게 피드백을 주고 받아보세요.`,
    },
  } as const;
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
          {TEXT[role]['MAIN']}
        </Text>
        <Text
          whiteSpace={'pre-line'}
          textAlign={'center'}
        >
          {TEXT[role]['SUB']}
        </Text>
        <Button onClick={() => navigate(appPaths.main())}>홈으로 이동하기</Button>
      </VStack>
    </BorderBox>
  );
};

export default SignUpCompleteTemplate;
