import { Flex, Heading, Spacer, Text } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import ResumeItem from '../../organisms/ResumeManagementItem/ResumeItem';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import { usePostCreateResume } from '~/queries/resume/create/usePostCreateResume';
import { ResumeWithEvents } from '~/types/event';
type ResumeManagementTemplateProps = {
  resumes: ResumeWithEvents[];
};

const ResumeManagementTemplate = ({ resumes }: ResumeManagementTemplateProps) => {
  const { mutate: createResume } = usePostCreateResume();

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
          내 이력서
        </Heading>
        <Spacer />
        {/* <Flex
          alignItems={'center'}
          gap={'0.25rem'}
        >
          <Icon
            as={MdAdd}
            color={'gray.500'}
          /> */}
        <Button
          p={0}
          w={'min-content'}
          h={'min-content'}
          bg={'gray.200'}
          size={'md'}
          color={'gray.500'}
          onClick={() => createResume()}
        >
          새 이력서 작성
        </Button>
      </Flex>
      {/* </Flex> */}
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
