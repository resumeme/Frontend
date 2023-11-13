import { Flex, Heading, Text } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { Badge } from '~/components/atoms/Badge';
import { Label } from '~/components/atoms/Label';
import CheckboxStyled from '~/components/molecules/LabelCheckboxGroup/CheckboxStyled';
import { Position } from '~/types/position';

type UserDetailProps = {
  nickname: string;
  role: 'mentee' | 'mentor';
  experiencedPositions?: Position[];
  interestedPositions?: Position[];
  phoneNumber: string;
  introduce: string;
  interestedFields: string[];
  careerContent?: string;
};

type LabelTypes = 'default' | 'frontend' | 'fullstack' | 'mobile' | 'backend' | 'devops' | 'ai';

const UserDetail = ({
  experiencedPositions,
  interestedPositions,
  nickname,
  role,
  careerContent,
  interestedFields,
  introduce,
  phoneNumber,
}: UserDetailProps) => {
  const POSITIONS = {
    BACK: 'backend',
    FRONT: 'frontend',
    MOBILE: 'mobile',
    DEVOPS: 'devops',
    ML_AI: 'ai',
    FULLSTACK: 'fullstack',
  };

  return (
    <Flex
      direction={'column'}
      gap={'1.31rem'}
    >
      <Flex gap={'1rem'}>
        {nickname && (
          <Heading
            fontSize={'1.5rem'}
            color={'gray.800'}
          >
            {nickname}
          </Heading>
        )}
        {role && (
          <Badge
            type={role}
            fontSize={'1rem'}
          >
            {role === 'mentee' ? '멘티' : '멘토'}
          </Badge>
        )}
        <Flex gap={'0.25rem'}>
          {experiencedPositions?.map((position) => (
            <Label
              alignSelf={'center'}
              fontSize={'0.875rem'}
              key={uuidv4()}
              type={POSITIONS[position as keyof typeof POSITIONS] as LabelTypes}
            />
          ))}

          {interestedPositions?.map((position) => (
            <Label
              alignSelf={'center'}
              fontSize={'0.875rem'}
              key={uuidv4()}
              type={POSITIONS[position as keyof typeof POSITIONS] as LabelTypes}
            />
          ))}
        </Flex>
      </Flex>
      {phoneNumber && <Text as={'span'}>{phoneNumber}</Text>}
      {introduce && <Text>{introduce}</Text>}
      {interestedFields && (
        <Flex>
          {interestedFields.map((field) => (
            <CheckboxStyled key={uuidv4()}>{field}</CheckboxStyled>
          ))}
        </Flex>
      )}
      {careerContent && <Text>{careerContent}</Text>}
    </Flex>
  );
};

export default UserDetail;
