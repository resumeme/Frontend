import { Flex, Text } from '@chakra-ui/react';

type MentorCareerContent = {
  careerContent: string;
};

const MentorCareerContent = ({ careerContent }: MentorCareerContent) => {
  return (
    <Flex
      w={'100%'}
      direction={'column'}
      gap={'1.25rem'}
    >
      <Text
        fontWeight={700}
        as="span"
        color={'gray.700'}
      >
        경력 사항
      </Text>
      <Text
        color={'gray.900'}
        whiteSpace={'pre-line'}
        as="p"
        wordBreak={'break-word'}
      >
        {careerContent}
      </Text>
    </Flex>
  );
};

export default MentorCareerContent;
