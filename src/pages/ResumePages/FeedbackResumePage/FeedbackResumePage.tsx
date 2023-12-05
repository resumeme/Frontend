import { Box, Flex } from '@chakra-ui/react';
import RemoteControlPannel from '~/components/organisms/RemoteControlPannel/RemoteControlPannel';
import { FeedbackResumeTemplate } from '~/components/templates/FeedbackResumeTemplate';

const FeedbackResumePage = () => {
  return (
    <Flex w={'full'}>
      <Box w={'900px'}>
        <FeedbackResumeTemplate />
      </Box>
      <RemoteControlPannel />
    </Flex>
  );
};

export default FeedbackResumePage;
