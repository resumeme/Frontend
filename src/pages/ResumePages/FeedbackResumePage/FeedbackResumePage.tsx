import { Box, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import RemoteControlPannel from '~/components/organisms/RemoteControlPannel/RemoteControlPannel';
import { FeedbackResumeTemplate } from '~/components/templates/FeedbackResumeTemplate';

const FeedbackResumePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
