import { Box, Divider, Flex } from '@chakra-ui/react';
import EventContent from './EventContent';
import EventTime from './EventTime';
import MentorCareerContent from './MentorCareerContent';
import MentorCareerTitle from './MentorCareerTitle';
import { ReadEvent } from '~/types/event/event';
import { ReadMentor } from '~/types/mentor';

type EventDetailProps = {
  isEditable: boolean;
  mentor: ReadMentor;
  event: ReadEvent;
};

const EventDetail = ({
  mentor,
  event: {
    content,
    timeInfo: { closeDateTime, endDate, openDateTime },
    positions,
  },
}: EventDetailProps) => {
  return (
    <Box flex={3.75}>
      <Flex
        justify={'center'}
        direction={'column'}
        gap={2}
        w={'full'}
      >
        <Box
          borderRadius={'0.375rem'}
          p={'2rem 2rem'}
          w={'full'}
          bg={'white'}
          flex={0}
          minH={'25rem'}
          border={'1px solid'}
          borderColor={'gray.300'}
          boxShadow={'sm'}
        >
          <Flex
            gap={'1rem'}
            direction={'column'}
          >
            <MentorCareerTitle experiencedPositions={positions} />
            <Divider
              borderColor={'gray.300'}
              mb={5}
            />
            <EventContent content={content} />
            <Divider
              borderColor={'gray.300'}
              my={8}
            />
            <EventTime
              openDateTime={openDateTime}
              closeDateTime={closeDateTime}
              endDate={endDate}
            />
            <MentorCareerContent careerContent={mentor.careerContent} />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default EventDetail;
