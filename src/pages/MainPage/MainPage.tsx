import { Text } from '@chakra-ui/react';
import { Button } from '~/components/atoms/Button';
import useUser from '~/hooks/useUser';
import { usePostCreateResume } from '~/queries/resume/create/usePostCreateResume';

const MainPage = () => {
  const resumeCreateMutation = usePostCreateResume();
  const { user } = useUser();

  const handleResumeCreate = () => {
    resumeCreateMutation.mutate();
  };

  return (
    <>
      {/**FIXME - 아래는 임시 이력서 작성 버튼, 추후 대체할 것 */}
      <Button
        size={'md'}
        onClick={handleResumeCreate}
      >
        새 이력서 작성
      </Button>
      <Text>{user?.careerContent}</Text>
      <Text>{user?.careerYear}</Text>
      <Text>{user?.realName}</Text>
      <Text>{user?.nickname}</Text>
    </>
  );
};

export default MainPage;
