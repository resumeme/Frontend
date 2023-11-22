import { Flex, Heading, Spacer, Text, VStack } from '@chakra-ui/react';
import { Avatar } from '~/components/atoms/Avatar';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import { ReadEvent } from '~/types/event/event';
import { ReadMentor } from '~/types/mentor';

type MentorProfileProps = {
  mentor: ReadMentor;
  event: ReadEvent;
  onApply: () => void;
};

const MentorProfile = ({
  mentor,
  event: { currentApplicantCount, maximumCount, status },
  onApply,
}: MentorProfileProps) => {
  const { nickname, introduce, imageUrl } = mentor;
  return (
    <VStack
      w={'full'}
      maxW="14.25rem"
      gap={'1.56rem'}
    >
      <Avatar
        size="lg"
        name={nickname}
        src={imageUrl}
      />
      <Flex
        w={'100%'}
        justifyContent={'space-between'}
      >
        <Heading
          fontSize={'20px'}
          color={'gray.800'}
        >
          {nickname}
        </Heading>
      </Flex>
      <Flex
        w={'100%'}
        minH={'12.44rem'}
        direction={'column'}
      >
        {introduce && (
          <BorderBox>
            <Text
              textAlign={'center'}
              noOfLines={6}
              overflow={'hidden'}
              color={'gray.700'}
            >
              {introduce}
            </Text>
          </BorderBox>
        )}
        <Spacer />
        <Flex
          w={'100%'}
          justifyContent={'space-between'}
          mt={'1.56rem'}
        >
          <Text
            as={'span'}
            color={'gray.800'}
          >
            인원
          </Text>
          <Text
            as={'span'}
            color={'gray.800'}
          >
            {currentApplicantCount}/{maximumCount}
          </Text>
        </Flex>
      </Flex>
      <Button
        type="button"
        size={'full'}
        onClick={onApply}
        isDisabled={!(status === 'OPEN')}
        _disabled={{ _hover: { bg: 'primary.500' }, bg: 'primary.500', cursor: 'default' }}
      >
        {status === 'OPEN' || status === 'REOPEN' ? '신청하기' : '신청 마감'}
      </Button>
    </VStack>
  );
};

export default MentorProfile;
