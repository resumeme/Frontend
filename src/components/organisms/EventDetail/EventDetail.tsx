import { Box, VStack } from '@chakra-ui/react';
import EventContent from './EventContent';
import EventTime from './EventTime';
import EventTitle from './EventTitle';
import MentorCareerContent from './MentorCareerContent';
import MentorCareerTitle from './MentorCareerTitle';
import { ReadEvent } from '~/types/event';
import { ReadMentor } from '~/types/mentor';

type EventDetailProps = {
  mentor: ReadMentor;
  event: ReadEvent;
};

const EventDetail = ({ mentor, event }: EventDetailProps) => {
  const eventStatus =
    event.info.maximumCount > event.info.currentApplicantCount ||
    new Date().toISOString() < event.info.timeInfo.closeDateTime;

  return (
    <Box w={'full'}>
      <VStack
        gap={'1.56rem'}
        w={'full'}
      >
        <EventTitle
          eventStatus={eventStatus}
          title={event.info.title}
        />
        <EventTime
          closeDateTime={event.info.timeInfo.closeDateTime}
          endDate={event.info.timeInfo.endDate}
          openDateTime={event.info.timeInfo.openDateTime}
        />
        <MentorCareerTitle
          careerYear={mentor.careerYear}
          experiencedPositions={mentor.experiencedPositions}
        />
        <EventContent content={event.info.content} />
        <MentorCareerContent careerContent={mentor.careerContent} />
      </VStack>
    </Box>
  );
};

export default EventDetail;
