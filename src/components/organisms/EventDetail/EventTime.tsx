import { Flex, Text } from '@chakra-ui/react';
import { formatDate } from '~/utils/formatDate';

type EventTime = {
  openDateTime: string;
  closeDateTime: string;
  endDate: string;
};

const EventTime = ({ openDateTime, closeDateTime, endDate }: EventTime) => {
  return (
    <>
      <Flex
        gap={'1.5rem'}
        w={'100%'}
      >
        <Text
          w={'15%'}
          fontWeight={700}
          as="span"
        >
          모집 기간
        </Text>

        <Flex
          flexGrow={1}
          gap={'1rem'}
        >
          <Text as="span">{`${new Date(openDateTime).toLocaleString()}`}</Text>
          <Text as="span"> ~ </Text>
          <Text as="span">{`${new Date(closeDateTime).toLocaleString()}`}</Text>
        </Flex>
      </Flex>

      <Flex
        w={'100%'}
        gap={'1.5rem'}
      >
        <Text
          fontWeight={700}
          w={'15%'}
          as="span"
        >
          첨삭 종료일
        </Text>
        <Text as="span">{formatDate(endDate)}</Text>
      </Flex>
    </>
  );
};

export default EventTime;
