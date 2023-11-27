import { HStack, Text } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { Label } from '~/components/atoms/Label';
import { Position } from '~/types/position';

type MentorCareerTitle = {
  experiencedPositions: Position[];
};

const MentorCareerTitle = ({ experiencedPositions }: MentorCareerTitle) => {
  return (
    <>
      <HStack
        w={'100%'}
        gap={'1.5rem'}
      >
        <Text
          w={'15%'}
          as="span"
          fontWeight={700}
        >
          모집 직무
        </Text>
        <Text
          flexGrow={0}
          w={'42%'}
          as="span"
          color={'gray.900'}
        >
          <HStack flexWrap={'wrap'}>
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
          </HStack>
        </Text>
      </HStack>
    </>
  );
};

export default MentorCareerTitle;
