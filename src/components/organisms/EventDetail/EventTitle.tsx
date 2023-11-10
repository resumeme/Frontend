import { Flex, Heading } from '@chakra-ui/react';
import { Label } from '~/components/atoms/Label';

type EventTitle = {
  title: string;
  eventStatus: boolean;
};

const EventTitle = ({ title, eventStatus }: EventTitle) => {
  return (
    <Flex
      p={'1rem'}
      w={'full'}
      justifyContent={'space-between'}
    >
      <Heading fontSize={'1.5rem'}>{title}</Heading>
      <Label
        fontSize={'0.875rem'}
        bg={eventStatus ? 'primary.900' : 'gray.500'}
        textAlign={'center'}
      >
        {eventStatus ? '모집 중' : '모집 마감'}
      </Label>
    </Flex>
  );
};

export default EventTitle;
