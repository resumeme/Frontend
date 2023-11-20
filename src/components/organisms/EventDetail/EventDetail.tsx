import { Box, VStack } from '@chakra-ui/react';
import EventContent from './EventContent';
import EventTime from './EventTime';
import EventTitle from './EventTitle';
import MentorCareerContent from './MentorCareerContent';
import MentorCareerTitle from './MentorCareerTitle';
import { ReadEvent } from '~/types/event/event';
import { ReadMentor } from '~/types/mentor';

type EventDetailProps = {
  mentor: ReadMentor;
  event: ReadEvent;
};

const EventDetail = ({
  mentor,
  event: {
    content,
    status,
    timeInfo: { closeDateTime, endDate, openDateTime },
    title,
  },
}: EventDetailProps) => {
  return (
    <Box w={'full'}>
      <VStack
        gap={'1.56rem'}
        w={'full'}
      >
        <EventTitle
          eventStatus={status}
          title={title}
        />
        <EventTime
          closeDateTime={closeDateTime}
          endDate={endDate}
          openDateTime={openDateTime}
        />
        <MentorCareerTitle
          careerYear={mentor.careerYear}
          experiencedPositions={mentor.experiencedPositions}
        />
        <EventContent content={content} />
        <MentorCareerContent careerContent={mentor.careerContent} />
      </VStack>
    </Box>
  );
};

export default EventDetail;
