import { Divider, HStack, Text } from '@chakra-ui/react';
import { BorderBox } from '~/components/atoms/BorderBox';
import { formatDate } from '~/utils/formatDate';

type EventTime = {
  openDateTime: string;
  closeDateTime: string;
  endDate: string;
};

const EventTime = ({ openDateTime, closeDateTime, endDate }: EventTime) => {
  return (
    <BorderBox
      borderRadius={'0.375rem'}
      w={'full'}
    >
      <HStack
        pl={'1.5rem'}
        w={'100%'}
      >
        <Text
          w={'18%'}
          as="span"
        >
          모집 기간
        </Text>
        <Text
          w={'42%'}
          as="span"
          color={'gray.900'}
        >{`${formatDate(openDateTime)} ~ ${formatDate(closeDateTime)}`}</Text>
        <Divider
          orientation="vertical"
          w={'0.625rem'}
          h={'1.375rem'}
          borderColor={'gray.400'}
        />
        <Text
          textAlign={'center'}
          w={'20%'}
          as="span"
        >
          첨삭 종료일
        </Text>
        <Text
          textAlign={'center'}
          w={'20%'}
          as="span"
          color={'gray.900'}
        >
          {replaceDate(endDate)}
        </Text>
      </HStack>
    </BorderBox>
  );
};

export default EventTime;
