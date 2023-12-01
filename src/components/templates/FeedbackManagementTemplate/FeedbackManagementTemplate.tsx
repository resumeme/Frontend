import { Flex, Heading, Text } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { BorderBox } from '~/components/atoms/BorderBox';
import { FeedbackManagementItem } from '~/components/organisms/FeedbackManagementItem';
import { FeedbackResume } from '~/types/resume/resumeListItem';

type FeedbackManagementTemplateProps = {
  resumes: FeedbackResume[];
};

const FeedbackManagementTemplate = ({ resumes }: FeedbackManagementTemplateProps) => {
  return (
    <>
      <Heading
        mt={'2.5rem'}
        fontSize={'1.25rem'}
        color={'gray.700'}
        fontWeight={700}
      >
        피드백 신청 내역
      </Heading>
      <Flex
        mt={'1.25rem'}
        direction={'column'}
      >
        <BorderBox
          borderBottomRadius={resumes.length > 0 ? 0 : undefined}
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
