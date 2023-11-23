import { PhoneIcon } from '@chakra-ui/icons';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { Badge } from '~/components/atoms/Badge';
import { Label } from '~/components/atoms/Label';
import CONSTANTS from '~/constants';
import { Fields } from '~/types/fields';
import { Position } from '~/types/position';
import { UserRole } from '~/types/user';
import { formatPhoneNumber } from '~/utils/formatPhoneNumber';

type UserDetailProps = {
  nickname: string;
  role: UserRole;
  experiencedPositions?: Position[];
  interestedPositions?: Position[];
  phoneNumber: string;
  introduce: string;
  interestedFields: Fields[];
  careerContent?: string;
};

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
            display={'flex'}
            py={0}
            alignItems={'center'}
            type={role}
            fontSize={'1rem'}
          >
            {role === 'mentee' ? '멘티' : '멘토'}
          </Badge>
        )}
        <Flex gap={'0.25rem'}>
          {experiencedPositions?.map((position) => (
            <Label
              fontWeight={500}
              alignSelf={'center'}
              fontSize={'0.875rem'}
              key={uuidv4()}
              type={position}
            />
          ))}

          {interestedPositions?.map((position) => (
            <Label
              fontWeight={500}
              alignSelf={'center'}
              fontSize={'0.875rem'}
              key={uuidv4()}
              type={position}
            />
          ))}
        </Flex>
      </Flex>
      {phoneNumber && (
        <Flex
          align={'center'}
          gap={'1rem'}
        >
          <PhoneIcon />
          <Text as={'span'}>{formatPhoneNumber(phoneNumber)}</Text>
        </Flex>
      )}
      {introduce && <Text whiteSpace={'pre-line'}>{introduce}</Text>}
      {interestedFields && (
        <Flex
          wrap={'wrap'}
          gap={'0.75rem'}
        >
          {interestedFields.map((field) => (
            <Badge
              display="flex"
              alignItems="center"
              h={'2.25rem'}
              border={'1px'}
              borderColor={'gray.300'}
              borderRadius={'0.75rem'}
              color={'gray.400'}
              bg={'white'}
              key={uuidv4()}
            >
              {CONSTANTS.FIELD[field]}
            </Badge>
          ))}
        </Flex>
      )}
      {careerContent && <Text whiteSpace={'pre-line'}>{careerContent}</Text>}
    </Flex>
  );
};

export default UserDetail;
