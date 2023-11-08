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
      {eventStatus && (
        <Label
          fontSize={'0.875rem'}
          bg={'primary.900'}
          textAlign={'center'}
        >
          모집 중
        </Label>
      )}
    </Flex>
  );
};

export default EventTitle;
