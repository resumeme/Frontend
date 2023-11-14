import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import EventItem from './EventItem';
import { BorderBox } from '~/components/atoms/BorderBox';
import { ReadEvent } from '~/types/event';

type EventProfile = {
  events: ReadEvent[];
};

const EventProfile = ({ events }: EventProfile) => {
  return (
    <>
      {events.map(({ info: { currentApplicantCount, maximumCount, timeInfo, title }, resumes }) => (
        <React.Fragment key={uuidv4()}>
          <Heading
            fontSize={'1.25rem'}
            color={'gray.700'}
            fontWeight={700}
          >
            진행중인 이벤트
          </Heading>
          <Flex
            mt={'2.31rem'}
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
                {`총 ${events.length}건`}
              </Text>
            </BorderBox>
            <EventItem
              currentApplicantCount={currentApplicantCount}
              maximumCount={maximumCount}
              resumes={resumes}
              timeInfo={timeInfo}
              title={title}
            />
          </Flex>
        </React.Fragment>
      ))}
    </>
  );
};
export default EventProfile;
