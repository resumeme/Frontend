import { Divider, HStack, Text } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import CONSTANTS from './../../../constants/index';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Position } from '~/types/position';

type MentorCareerTitle = {
  experiencedPositions: Position[];
  careerYear: number;
};

const MentorCareerTitle = ({ experiencedPositions, careerYear }: MentorCareerTitle) => {
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
          직무
        </Text>
        <Text
          flexGrow={0}
          w={'42%'}
          as="span"
          color={'gray.900'}
        >
          <HStack>
            {experiencedPositions.map((position) => (
              <Text
                key={uuidv4()}
                as={'span'}
              >
                {CONSTANTS.POSITION[position]}
              </Text>
            ))}
          </HStack>
        </Text>
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
          경력
        </Text>
        <Text
          textAlign={'center'}
          w={'20%'}
          as="span"
          color={'gray.900'}
        >{`${careerYear}년`}</Text>
      </HStack>
    </BorderBox>
  );
};

export default MentorCareerTitle;
