import { Flex, Text } from '@chakra-ui/react';

type EventContent = {
  content: string;
};

const EventContent = ({ content }: EventContent) => {
  return (
    <Flex
      w={'100%'}
      direction={'column'}
      gap={'1.25rem'}
      p={5}
    >
      <Text
        color={'gray.900'}
        whiteSpace={'pre-wrap'}
        as="p"
        wordBreak={'break-word'}
        fontSize={'md'}
      >
        {content}
      </Text>
    </Flex>
  );
};

export default EventContent;
