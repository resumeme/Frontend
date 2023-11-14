import { Flex, Text } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { AccordionToggle } from '~/components/atoms/AccordionToggle';
import { BorderBox } from '~/components/atoms/BorderBox';
import { EventResume, EventTime } from '~/types/event';
import { formatDate } from '~/utils/formatDate';

type EventItemProps = {
  title: string;
  maximumCount: number;
  currentApplicantCount: number;
  timeInfo: Omit<EventTime, 'now'>;
  resumes: EventResume[];
};

const EventItem = ({
  currentApplicantCount,
  maximumCount,
  resumes,
  timeInfo,
  title,
}: EventItemProps) => {
  return (
    <BorderBox
      borderTop={0}
      borderRadius={0}
      p={'2.75rem 1.69rem'}
    >
      <Flex
        alignItems={'end'}
        fontSize={'0.875rem'}
        color={'gray.500'}
        justifyContent={'space-between'}
      >
        <Text
          fontSize={'1.5rem'}
          fontWeight={600}
          color={'gray.800'}
        >
          {title}
        </Text>
        <Flex direction={'column'}>
          <Flex gap={'1.5rem'}>
            <Text>첨삭 종료일</Text>
            <Text>{formatDate(timeInfo.endDate)}</Text>
          </Flex>
          <Flex justifyContent={'space-between'}>
            <Text>신청 인원</Text>
            <Text>{`${currentApplicantCount} / ${maximumCount}`}</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        color={'gray.800'}
        fontSize={'0.875rem'}
        mt={'2.37rem'}
        justifyContent={'space-between'}
      >
        <AccordionToggle text="신청이력서 3건">
          {/* //TODO: 다른 이력서 정보로 진행 */}
          {resumes.map((resume) => (
            <Text key={uuidv4()}>{resume.resumeId}</Text>
          ))}
        </AccordionToggle>
      </Flex>
    </BorderBox>
  );
};

export default EventItem;
