import { Box, Flex, Text } from '@chakra-ui/react';
import { Label } from '~/components/atoms/Label';

type MentorCareerContent = {
  careerContent: string;
};

const MentorCareerContent = ({ careerContent }: MentorCareerContent) => {
  return (
    <Flex
      w={'100%'}
      gap={'1.25rem'}
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
          멘토경력
        </Label>
      </Box>
      <Text
        color={'gray.900'}
        whiteSpace={'pre-line'}
        as="p"
        fontSize={'sm'}
        wordBreak={'break-word'}
      >
        {careerContent}
      </Text>
    </Flex>
  );
};

export default MentorCareerContent;
