import { Flex, Heading, Text } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import ResumeItem from '../../organisms/ResumeManagementItem/ResumeItem';
import { BorderBox } from '~/components/atoms/BorderBox';
import { ResumeWithEvents } from '~/types/event';

type ResumeManagementTemplateProps = {
  resumes: ResumeWithEvents[];
};

const ResumeManagementTemplate = ({ resumes }: ResumeManagementTemplateProps) => {
  return (
    <>
      <Heading
        fontSize={'1.75rem'}
        color={'gray.800'}
        fontWeight={700}
      >
        이력서 관리
      </Heading>
      <Heading
        mt={'2.5rem'}
        fontSize={'1.25rem'}
        color={'gray.700'}
        fontWeight={700}
      >
        내 이력서
      </Heading>
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
            <ResumeItem resume={resume} />
          </BorderBox>
        ))}
      </Flex>
    </>
  );
};

export default ResumeManagementTemplate;
