import { Flex, Heading } from '@chakra-ui/react';
import { Label } from '~/components/atoms/Label';

type EventTitle = {
  title: string;
  //TODO - 상태 수정
  eventStatus: string;
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
        bg={eventStatus === 'OPEN' ? 'primary.900' : 'gray.500'}
        textAlign={'center'}
      >
        {eventStatus === 'OPEN' ? '모집 중' : '모집 마감'}
      </Label>
    </Flex>
  );
};

export default EventTitle;
