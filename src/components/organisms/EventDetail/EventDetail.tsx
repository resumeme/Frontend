import { Box, VStack } from '@chakra-ui/react';
import EventContent from './EventContent';
import EventTime from './EventTime';
import EventTitle from './EventTitle';
import MentorCareerContent from './MentorCareerContent';
import MentorCareerTitle from './MentorCareerTitle';
import { ReadEvent } from '~/types/event/event';
import { ReadMentor } from '~/types/mentor';

type EventDetailProps = {
  isAuthorizedMentor: boolean;
  mentor: ReadMentor;
  event: ReadEvent;
};

const EventDetail = ({
  isAuthorizedMentor,
  mentor,
  event: {
    id,
    content,
    status,
    timeInfo: { closeDateTime, endDate, openDateTime },
    title,
    positions,
  },
}: EventDetailProps) => {
  return (
    <Box w={'73%'}>
      <VStack
        gap={'1.56rem'}
        w={'full'}
      >
        <EventTitle
          id={id}
          isAuthorizedMentor={isAuthorizedMentor}
          eventStatus={status}
          title={title}
        />
        <EventTime
          endDate={endDate}
          closeDateTime={closeDateTime}
          openDateTime={openDateTime}
        />
        <MentorCareerTitle experiencedPositions={positions} />
        <EventContent content={content} />
        <MentorCareerContent careerContent={mentor.careerContent} />
      </VStack>
    </Box>
  );
};

export default EventDetail;
