import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text,
  Tooltip,
  Icon,
  Divider,
} from '@chakra-ui/react';
import { FaRegBell } from 'react-icons/fa6';
import { FaBell } from 'react-icons/fa6';
import { v4 as uuidv4 } from 'uuid';
import CONSTANTS from './../../../constants/index';
import { Avatar } from '~/components/atoms/Avatar';
import { Badge } from '~/components/atoms/Badge';
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
import { Position } from '~/types/position';

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
  const isFullCount = currentApplicantCount >= maximumCount;

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
  const { mutate: postMentorFollow } = usePostMentorFollow();

  return (
    <>
      <Flex
        direction={'column'}
        gap={5}
        flex={1.5}
      >
        <Card role="group">
          <CardHeader>
            <Flex
              flex="1"
              gap="3"
              alignItems="center"
            >
              <Avatar
                name={nickname}
                src={imageUrl}
              />
              <Flex
                flex={1}
                direction={'column'}
                justify={'center'}
                align={'flex-start'}
                w={'100%'}
                gap={'.2rem'}
              >
                <Flex
                  align={'center'}
                  gap={2}
                >
                  <Heading
                    size="sm"
                    _groupHover={{ textDecoration: 'underline' }}
                  >
                    {nickname}
                  </Heading>
                </Flex>
                <Flex
                  align={'center'}
                  gap={2}
                >
                  <Badge
                    type="mentee"
                    py={0}
                  >
                    멘토
                  </Badge>
                  <Text
                    fontSize={'sm'}
                    color={'gray.500'}
                  >{`${careerYear}년차`}</Text>
                </Flex>
                <Flex mt={2}>
                  {experiencedPositions && <PositionLabels positions={experiencedPositions} />}
                </Flex>
              </Flex>
            </Flex>
          </CardHeader>
          {introduce && (
            <CardBody
              h={'fit-content'}
              pt={'.5rem'}
            >
              <Text
                fontSize={'sm'}
                color={'gray.700'}
                textAlign={'center'}
                noOfLines={3}
              >
                "{introduce}"
              </Text>
            </CardBody>
          )}
        </Card>
        {user?.role === 'mentee' && (
          <Flex
            mt={5}
            px={1}
            gap={3}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Tooltip
              hasArrow
              placement="right"
              bg={'white'}
              color={'gray.600'}
              label={followData?.id ? '이메일 알림 받는중' : '이메일 알림 받기'}
            >
              <Flex
                bg={'gray.100'}
                outline={'1px solid'}
                outlineColor={'gray.300'}
                boxSize={10}
                borderRadius={'lg'}
                alignItems={'center'}
                justifyContent={'center'}
                cursor={'pointer'}
                boxShadow={'base'}
                onClick={
                  followData?.id
                    ? () => deleteMentorFollow({ followId: Number(followData?.id) })
                    : () => postMentorFollow({ mentorId })
                }
                _hover={{
                  bg: 'gray.300',
                  transition: '.2s',
                }}
              >
                <Icon
                  display={'flex'}
                  boxSize={'1rem'}
                  alignItems={'center'}
                  w={'auto'}
                  h={'fit-content'}
                  bg={'inherit'}
                  as={followData?.id ? FaBell : FaRegBell}
                  aria-label="follow"
                  color={followData?.id ? 'primary.900' : 'gray.700'}
                />
              </Flex>
            </Tooltip>
            <Divider
              borderColor={'gray.400'}
              orientation="vertical"
              h={'90%'}
            />
            <Text
              fontSize={'xs'}
              fontWeight={500}
              color={'gray.500'}
              whiteSpace={'pre-line'}
              lineHeight={'1rem'}
            >
              {`이 멘토의 다음 이벤트를\n이메일 알림으로 받아보세요.`}
            </Text>
          </Flex>
        )}
        <Flex
          justify={'space-between'}
          px={2}
          mt={10}
        >
          <Text
            fontSize={'sm'}
            color={'gray.600'}
            fontWeight={'semibold'}
          >
            신청인원
          </Text>
          <Label
            py={0}
            px={1.5}
            maxH={'1.3rem'}
            fontSize={'sm'}
            fontWeight={'medium'}
            bg={status === 'OPEN' ? 'green.100' : 'gray.300'}
            color={'gray.700'}
            textDecoration={isFullCount ? 'line-through' : 'none'}
          >
            {currentApplicantCount} / {maximumCount}
          </Label>
        </Flex>
        <Box>
          {(!user || user?.role === 'mentee') && (
            <Button
              type="button"
              size={'full'}
              onClick={onApply}
              isDisabled={!(status === 'OPEN' || status === 'REOPEN') || isApplied}
              _disabled={{ _hover: { bg: 'primary.500' }, bg: 'primary.500', cursor: 'default' }}
              _hover={{
                opacity: '80%',
              }}
            >
              {getApplyButtonText(status)}
            </Button>
          )}
        </Box>
      </Flex>
    </>
  );
};

export default MentorProfile;

const PositionLabels = ({ positions }: { positions: Position[] }) => {
  const MAX_LABELS_TO_DISPLAY = 1;

  return (
    <Flex gap={'0.2rem'}>
      {positions.slice(0, MAX_LABELS_TO_DISPLAY).map((position) => (
        <Label
          key={uuidv4()}
          type={position}
          py={0}
        />
      ))}
      {positions.length > MAX_LABELS_TO_DISPLAY && (
        <Tooltip
          placement="top"
          bg={'white'}
          rounded={'xl'}
          hasArrow
          label={
            <Flex
              direction={'column'}
              align={'start'}
            >
              {positions.slice(MAX_LABELS_TO_DISPLAY).map((position) => (
                <Label
                  key={uuidv4()}
                  w={'fit-content'}
                  type={position}
                  py={0}
                />
              ))}
            </Flex>
          }
        >
          <Text
            ml={1}
            fontSize={'xs'}
            color={'gray.500'}
            fontWeight={'semibold'}
            cursor={'pointer'}
          >{`+${positions.length - MAX_LABELS_TO_DISPLAY}`}</Text>
        </Tooltip>
      )}
    </Flex>
  );
};
