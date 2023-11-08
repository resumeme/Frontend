import { Flex, Text } from '@chakra-ui/react';
import { BorderBox } from '~/components/atoms/BorderBox';

type MentorCareerContent = {
  careerContent: string;
};

const MentorCareerContent = ({ careerContent }: MentorCareerContent) => {
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
        <Text
          as="span"
          color={'gray.700'}
        >
          수상 경력
        </Text>
        <Text
          color={'gray.900'}
          whiteSpace={'pre-line'}
          as="p"
        >
          {careerContent}
        </Text>
      </Flex>
    </BorderBox>
  );
};

export default MentorCareerContent;
