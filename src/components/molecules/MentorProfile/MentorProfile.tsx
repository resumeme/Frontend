import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { Avatar } from '~/components/atoms/Avatar';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import { ReadEvent } from '~/types/event';
import { ReadMentor } from '~/types/mentor';

type MentorProfileProps = {
  mentor: ReadMentor;
  event: ReadEvent;
};

const MentorProfile = ({ mentor, event }: MentorProfileProps) => {
  const { nickname, introduce, imageUrl } = mentor;

  return (
    <Box maxW="14.25rem">
      <VStack gap={'1.56rem'}>
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
          minH={'12.44rem'}
          direction={'column'}
          justifyContent={'space-between'}
        >
          <BorderBox>
            <Text
              noOfLines={6}
              overflow={'hidden'}
              color={'gray.700'}
            >
              {introduce}
            </Text>
          </BorderBox>
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
              {event.info.currentApplicantCount}/{event.info.maximumCount}
            </Text>
          </Flex>
        </Flex>
        <Button size={'full'}>신청하기</Button>
      </VStack>
    </Box>
  );
};

export default MentorProfile;