import { Box, Flex, VStack } from '@chakra-ui/react';
import EventContent from './EventContent';
import EventTime from './EventTime';
import EventTitle from './EventTitle';
import MentorCareerContent from './MentorCareerContent';
import MentorCareerTitle from './MentorCareerTitle';
import { BorderBox } from '~/components/atoms/BorderBox';
import { ReadEvent } from '~/types/event/event';
import { ReadMentor } from '~/types/mentor';

type EventDetailProps = {
  isEditable: boolean;
  mentor: ReadMentor;
  event: ReadEvent;
};

const EventDetail = ({
  isEditable,
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
        fontSize={'0.875rem'}
        w={'full'}
      >
        <EventTitle
          id={id}
          isEditable={isEditable}
          eventStatus={status}
          title={title}
        />
        <BorderBox
          borderRadius={'0.375rem'}
          p={'2rem 2.5rem'}
          w={'full'}
        >
          <Flex
            gap={'2rem'}
            direction={'column'}
          >
            <EventTime
              endDate={endDate}
              closeDateTime={closeDateTime}
              openDateTime={openDateTime}
            />

            <MentorCareerTitle experiencedPositions={positions} />

            <EventContent content={content} />

            <MentorCareerContent careerContent={mentor.careerContent} />
          </Flex>
        </BorderBox>
      </VStack>
    </Box>
  );
};

export default EventDetail;
