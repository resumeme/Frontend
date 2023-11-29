import {
  Box,
  Flex,
  HStack,
  Heading,
  IconButton,
  Spacer,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/react';
import { FaRegBell } from 'react-icons/fa6';
import { FaBell } from 'react-icons/fa6';
import { v4 as uuidv4 } from 'uuid';
import CONSTANTS from './../../../constants/index';
import { Avatar } from '~/components/atoms/Avatar';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import { Label } from '~/components/atoms/Label';
import useUser from '~/hooks/useUser';
import { usePostMentorFollow } from '~/queries/follow/create/usePostMentorFollow';
import { useDeleteMentorFollow } from '~/queries/follow/delete/useDeleteMentorFollow';
import { useGetMentorFollow } from '~/queries/follow/details/useGetMentorFollow';
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
  event: { id, currentApplicantCount, maximumCount, status, mentorId },
  onApply,
}: MentorProfileProps) => {
  const { user } = useUser();

  const { nickname, introduce, imageUrl, careerYear, experiencedPositions } = mentor;

  const { data: isApplied } = useGetIsAppliedEvent({ eventId: id.toString(), role: user?.role });

  const getApplyButtonText = (status: EventStatus) => {
    if (status === 'OPEN' || status === 'REOPEN') {
      if (isApplied) {
        return '신청 완료';
      }
      return '신청하기';
    }
    return CONSTANTS.EVENT_STATUS[status];
  };
  const { data: followData } = useGetMentorFollow({ mentorId, role: user?.role });
  const { mutate: deleteMentorFollow } = useDeleteMentorFollow();
  const { mutate: mentorFollow } = usePostMentorFollow();

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
      <Flex align={'center'}>
        <Heading
          textAlign={'center'}
          fontSize={'20px'}
          color={'gray.800'}
        >
          {nickname}
        </Heading>

        {user?.role === 'mentee' && (
          <>
            <Tooltip
              hasArrow
              placement="right"
              bg={'gray.300'}
              color={'gray.600'}
              label={followData?.id ? '이메일 알림 수신 중' : '이메일 알림 차단 중'}
            >
              <Box>
                <IconButton
                  display={'flex'}
                  alignItems={'center'}
                  boxSize={'1'}
                  w={'auto'}
                  h={'fit-content'}
                  bg={'inherit'}
                  icon={followData?.id ? <FaBell size="1rem" /> : <FaRegBell size="1rem" />}
                  onClick={
                    followData?.id
                      ? () => deleteMentorFollow({ followId: Number(followData?.id) })
                      : () => mentorFollow({ mentorId })
                  }
                  aria-label="follow"
                  color={followData?.id ? 'primary.900' : 'gray.700'}
                />
              </Box>
            </Tooltip>
          </>
        )}
      </Flex>
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
