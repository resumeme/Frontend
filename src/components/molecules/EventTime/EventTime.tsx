import { Box, Flex, Text } from '@chakra-ui/react';
import { Label } from '~/components/atoms/Label';
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
        <Box w="15%">
          <Label
            fontWeight={800}
            bg={'gray.200'}
            w={'fit-content'}
            color={'gray.800'}
            fontSize={'sm'}
            as="span"
            py={0}
          >
            신청 기간
          </Label>
        </Box>
        <Flex
          flexGrow={1}
          gap={'1rem'}
        >
          <Text
            color={'gray.700'}
            fontSize={'sm'}
            fontWeight={500}
          >{`${new Date(openDateTime).toLocaleString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          })}`}</Text>
          <Text as="span">~</Text>
          <Text
            color={'gray.700'}
            fontWeight={500}
            fontSize={'sm'}
          >{`${new Date(closeDateTime).toLocaleString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          })}`}</Text>
          <Text as="span"></Text>
        </Flex>
      </Flex>
      <Flex
        w={'100%'}
        gap={'1.5rem'}
      >
        <Box w="15%">
          <Label
            fontWeight={800}
            bg={'gray.200'}
            w={'fit-content'}
            color={'gray.800'}
            fontSize={'sm'}
            as="span"
            py={0}
          >
            피드백 일정
          </Label>
        </Box>
        <Flex
          align={'center'}
          gap={1}
        >
          <Text
            w={'fit-content'}
            color={'gray.800'}
            fontWeight={700}
            fontSize={'sm'}
          >
            {formatDate(endDate)}
          </Text>
          <Text
            color={'gray.700'}
            fontWeight={500}
            fontSize={'sm'}
          >
            {' '}
            이전까지 완료 예정
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default EventTime;
