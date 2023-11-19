import { Flex, Heading, Spacer, Text } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { BorderBox } from '~/components/atoms/BorderBox';
// import { Button } from '~/components/atoms/Button';
// import { usePostCreateResume } from '~/queries/resume/create/usePostCreateResume';
import { FeedbackManagementItem } from '~/components/organisms/FeedbackManagementItem';
import { FeedbackResume } from '~/types/resume/resumeListItem';

type FeedbackManagementTemplateProps = {
  resumes: FeedbackResume[];
};

const FeedbackManagementTemplate = ({ resumes }: FeedbackManagementTemplateProps) => {
  // const { mutate: createResume } = usePostCreateResume();

  return (
    <>
      <Flex
        mt={'2.5rem'}
        alignItems={'end'}
      >
        <Heading
          fontSize={'1.25rem'}
          color={'gray.700'}
          fontWeight={700}
        >
          첨삭 신청 내역
        </Heading>
        <Spacer />
        {/* //TODO - 네비게이션 작업 후 이전 */}
        {/* <Button
          p={0}
          w={'min-content'}
          h={'min-content'}
          bg={'gray.200'}
          size={'md'}
          color={'gray.500'}
          onClick={() => createResume()}
        >
          새 이력서 작성
        </Button> */}
      </Flex>
      <Flex
        mt={'1.25rem'}
        direction={'column'}
      >
        <BorderBox
          borderBottomRadius={0}
          p={'1.88rem 1.69rem'}
        >
          <Text
            fontSize={'0.85rem'}
            color={'gray.700'}
          >
            {`총 ${resumes.length}건`}
          </Text>
        </BorderBox>
        {resumes.map((resume, index) => (
          <BorderBox
            key={uuidv4()}
            borderTop={0}
            borderTopRadius={0}
            borderRadius={index !== resumes.length - 1 ? 0 : undefined}
            p={'1.75rem 1.5rem'}
          >
            <FeedbackManagementItem resume={resume} />
          </BorderBox>
        ))}
      </Flex>
    </>
  );
};

export default FeedbackManagementTemplate;
