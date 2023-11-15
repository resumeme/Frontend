import { Box, Flex, Icon, Spacer, Text } from '@chakra-ui/react';
import { MdOutlineArticle } from 'react-icons/md';
import { EventResume } from '~/types/event';

type ResumeListProps = {
  resume: EventResume;
};

const ResumeList = ({ resume }: ResumeListProps) => {
  return (
    <Flex gap={'0.75rem'}>
      <Box
        flexGrow={1}
        borderRadius={'0.3125rem'}
        fontSize={'0.875rem'}
        bg={'gray.200'}
        p={'0.63rem 0.87rem'}
      >
        <Flex
          gap={'0.88rem'}
          alignItems={'center'}
        >
          <Icon
            color={'primary.900'}
            as={MdOutlineArticle}
            w={'auto'}
          />
          <Text
            w={'5rem'}
            borderRight={'1px'}
            borderColor={'gray.300'}
            color={'gray.900'}
            as="span"
          >
            {resume.menteeName}
          </Text>
          <Text
            color={'gray.700'}
            as="span"
          >
            {resume.resumeTitle}
          </Text>
          <Spacer />
          <Text
            color={'gray.500'}
            as="span"
          >
            {resume.resumeId}
          </Text>
        </Flex>
      </Box>
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        w={'3.375rem'}
        borderRadius={'0.3125rem'}
        fontSize={'0.75rem'}
        bg={'primary.700'}
        h={'2.5rem'}
      >
        <Text
          as="span"
          color={'white'}
        >
          진행 중{/* {resume.progressStatus} */}
        </Text>
      </Flex>
    </Flex>
  );
};

export default ResumeList;
