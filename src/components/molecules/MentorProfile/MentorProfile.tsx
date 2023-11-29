import { Flex, HStack, Heading, Spacer, Text, VStack } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import CONSTANTS from './../../../constants/index';
import { Avatar } from '~/components/atoms/Avatar';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import { Label } from '~/components/atoms/Label';
import useUser from '~/hooks/useUser';
import { useGetIsAppliedEvent } from '~/queries/user/useGetIsAppliedEvent';
import { ReadEvent } from '~/types/event/event';
import { EventStatus } from '~/types/eventStatus';
import { ReadMentor } from '~/types/mentor';

type MentorProfileProps = {
  mentor: ReadMentor;
  event: ReadEvent;
  onApply: () => void;
};

const MentorProfile = ({
  mentor,
  event: { id, currentApplicantCount, maximumCount, status },
  onApply,
}: MentorProfileProps) => {
  const { user } = useUser();

  const { nickname, introduce, imageUrl, careerYear, experiencedPositions } = mentor;

  const { data: isApplied } = useGetIsAppliedEvent({ eventId: id.toString() });

  const getApplyButtonText = (status: EventStatus) => {
    if (status === 'OPEN' || status === 'REOPEN') {
      if (isApplied) {
        return '신청 완료';
      }
      return '신청하기';
    }
    return CONSTANTS.EVENT_STATUS[status];
  };

  return (
    <VStack
      flexShrink={0}
      w="14.25rem"
      gap={'1.56rem'}
    >
      <Avatar
        size="lg"
        name={nickname}
        src={imageUrl}
      />
      <Heading
        textAlign={'center'}
        fontSize={'20px'}
        color={'gray.800'}
      >
        {nickname}
      </Heading>
      <Flex
        w={'100%'}
        minH={'12.44rem'}
        direction={'column'}
      >
        {(introduce || careerYear) && (
          <BorderBox>
            <Flex
              fontSize={'0.875rem'}
              direction={'column'}
              gap={'0.5rem'}
            >
              {careerYear && (
                <HStack
                  w={'100%'}
                  gap={'1.5rem'}
                >
                  <Text as="span">경력</Text>
                  <Text
                    fontWeight={500}
                    as="span"
                    color={'gray.900'}
                  >{`${careerYear}년`}</Text>
                </HStack>
              )}

              {experiencedPositions && (
                <Flex
                  w={'100%'}
                  gap={'1.5rem'}
                >
                  <Text
                    flexShrink={0}
                    as="span"
                  >
                    직무
                  </Text>
                  <HStack flexWrap={'wrap'}>
                    {experiencedPositions.map((position) => (
                      <Label
                        py={'0.05rem'}
                        fontWeight={500}
                        alignSelf={'center'}
                        fontSize={'0.875rem'}
                        key={uuidv4()}
                        type={position}
                      />
                    ))}
                  </HStack>
                </Flex>
              )}
              {introduce && (
                <Flex
                  direction={'column'}
                  gap={'0.5rem'}
                >
                  <Text
                    flexShrink={0}
                    as="span"
                  >
                    자기소개
                  </Text>
                  <Text
                    noOfLines={6}
                    overflow={'hidden'}
                    color={'gray.700'}
                    fontWeight={500}
                  >
                    {introduce}
                  </Text>
                </Flex>
              )}
            </Flex>
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
      {(!user || user?.role === 'mentee') && (
        <Button
          type="button"
          size={'full'}
          onClick={onApply}
          isDisabled={!(status === 'OPEN' || status === 'REOPEN') || isApplied}
          _disabled={{ _hover: { bg: 'primary.500' }, bg: 'primary.500', cursor: 'default' }}
        >
          {getApplyButtonText(status)}
        </Button>
      )}
    </VStack>
  );
};

export default MentorProfile;
