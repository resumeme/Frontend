import { HStack, Text } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Label } from '~/components/atoms/Label';
import { Position } from '~/types/position';

type MentorCareerTitle = {
  experiencedPositions: Position[];
};

const MentorCareerTitle = ({ experiencedPositions }: MentorCareerTitle) => {
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
    </BorderBox>
  );
};

export default MentorCareerTitle;
