import { Flex, Heading, Text } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import EventItem from './EventItem';
import { BorderBox } from '~/components/atoms/BorderBox';
import { ReadManagementEvent } from '~/types/event/event';

type EventProfile = {
  events: ReadManagementEvent[];
};

const EventProfile = ({ events }: EventProfile) => {
  return (
    <>
      <Heading
        mt={'2.5rem'}
        fontSize={'1.25rem'}
        color={'gray.700'}
        fontWeight={700}
      >
        이벤트 목록
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
            fontWeight={700}
          >
            {`총 ${events.length}건`}
          </Text>
        </BorderBox>
        {events.map(
          (
            { info: { currentApplicantCount, maximumCount, timeInfo, title, id, status }, resumes },
            index,
          ) => (
            <BorderBox
              key={uuidv4()}
              borderTop={0}
              borderTopRadius={0}
              borderRadius={index !== events.length - 1 ? 0 : undefined}
              p={'2.75rem 1.69rem'}
            >
              <EventItem
                eventId={id}
                currentApplicantCount={currentApplicantCount}
                maximumCount={maximumCount}
                resumes={resumes}
                timeInfo={timeInfo}
                status={status}
                title={title}
              />
            </BorderBox>
          ),
        )}
      </Flex>
    </>
  );
};
export default EventProfile;
