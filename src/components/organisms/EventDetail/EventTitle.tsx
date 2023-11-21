import { Flex, Heading } from '@chakra-ui/react';
import { Label } from '~/components/atoms/Label';
import CONSTANTS from '~/constants';
import { EventStatus } from '~/types/eventStatus';

type EventTitle = {
  title: string;
  eventStatus: EventStatus;
};

const EventTitle = ({ title, eventStatus }: EventTitle) => {
  const isActive = eventStatus === 'OPEN' || eventStatus === 'REOPEN';
  return (
    <Flex
      p={'1rem'}
      w={'full'}
      justifyContent={'space-between'}
    >
      <Heading fontSize={'1.5rem'}>{title}</Heading>
      <Label
        fontSize={'0.875rem'}
        bg={isActive ? 'primary.900' : 'gray.400'}
        textAlign={'center'}
      >
        {CONSTANTS.EVENT_STATUS[eventStatus]}
      </Label>
    </Flex>
  );
};

export default EventTitle;
