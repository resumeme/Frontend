import { Flex, Text } from '@chakra-ui/react';
import { BorderBox } from '~/components/atoms/BorderBox';

type EventContent = {
  content: string;
};

const EventContent = ({ content }: EventContent) => {
  return (
    <BorderBox
      borderRadius={'0.375rem'}
      w={'full'}
    >
      <Flex
        pl={'1.5rem'}
        w={'100%'}
        direction={'column'}
        gap={'1.25rem'}
      >
        <Text as="span">이벤트 내용</Text>
        <Text
          color={'gray.900'}
          whiteSpace={'pre-wrap'}
          as="p"
          wordBreak={'break-word'}
        >
          {content}
        </Text>
      </Flex>
    </BorderBox>
  );
};

export default EventContent;
