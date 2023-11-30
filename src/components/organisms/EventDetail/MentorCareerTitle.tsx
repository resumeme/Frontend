import { Box, Flex } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { Label } from '~/components/atoms/Label';
import { Position } from '~/types/position';

type MentorCareerTitle = {
  experiencedPositions: Position[];
};

const MentorCareerTitle = ({ experiencedPositions }: MentorCareerTitle) => {
  return (
    <Flex
      w={'100%'}
      gap={'.5rem'}
      alignItems={'center'}
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
          피드백 대상
        </Label>
      </Box>
      <Flex
        flexWrap={'wrap'}
        gap={'0.2rem'}
      >
        {experiencedPositions.map((position) => (
          <Label
            py={'0.1rem'}
            fontWeight={500}
            alignSelf={'center'}
            fontSize={'0.875rem'}
            key={uuidv4()}
            type={position}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default MentorCareerTitle;
