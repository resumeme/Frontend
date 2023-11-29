import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { MdOutlineArticle } from 'react-icons/md';

type MemoBoxProps = {
  onOpen?: () => void;
  memo?: string;
};

const MemoBox = ({ onOpen, memo }: MemoBoxProps) => {
  return (
    <Box
      cursor={'pointer'}
      onClick={onOpen}
    >
      <Flex
        mt={'1rem'}
        borderRadius={'0.3125rem'}
        p={'0.5rem 0.75rem'}
        bg={'gray.200'}
        alignItems={'center'}
        w={'full'}
        gap={'0.69rem'}
      >
        <Icon
          as={MdOutlineArticle}
          color={'gray.500'}
          w={'1.25rem'}
        />
        <Text
          isTruncated
          flexShrink={1}
          h={'min-content'}
          p={0}
          m={0}
          border={0}
          color={'gray.500'}
          fontSize={'sm'}
        >
          {memo
            ? memo
            : '이력서에 대한 간단한 메모를 남겨보세요. ex. 12월 25일 제출 전까지 피드백 받기'}
        </Text>
      </Flex>
    </Box>
  );
};

export default MemoBox;
