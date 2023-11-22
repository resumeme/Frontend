import { Text, Box, Image, HStack, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Avatar } from '~/components/atoms/Avatar';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Label } from '~/components/atoms/Label';
import { appPaths } from '~/config/paths';
import CONSTANTS from '~/constants';
import { EventListItem } from '~/types/event/eventList';
import { EventStatus } from '~/types/eventStatus';
import { Position } from '~/types/position';

const EventGridItem = ({ event: { info, mentorInfo } }: { event: EventListItem }) => {
  const openDate = new Date(info.timeInfo.openDateTime).toLocaleDateString();
  const closeDate = new Date(info.timeInfo.closeDateTime).toLocaleDateString();
  return (
    <Link to={appPaths.eventDetail(info.id)}>
      <Box
        w={'full'}
        aspectRatio={3 / 4.5}
      >
        <Image
          src="https://i.pinimg.com/564x/97/7c/ad/977cad5f391fe80dc7aa4a8194c30e9e.jpg"
          alt="썸네일 이미지"
          borderTopRadius={'1rem'}
          height={'45%'}
          w={'full'}
        />
        <BorderBox
          borderTop={'none'}
          borderTopRadius={0}
          h={'55%'}
        >
          <Flex
            direction={'column'}
            justifyContent={'space-between'}
            h={'full'}
            gap={'0.5rem'}
            flex={1}
          >
            <AvatarAndStatus
              status={info.status}
              imageUrl={mentorInfo.imageUrl}
              nickname={mentorInfo.nickname}
            />
            <Text
              // flex={1}
              h={'30%'}
              noOfLines={2}
              color={'gray.800'}
            >
              {info.title}
            </Text>
            <PositionLabels positions={info.positions} />
            <Flex
              justifyContent={'space-between'}
              flexWrap={'wrap'}
            >
              <Text fontSize={'0.875rem'}>
                {openDate} ~ {closeDate}
              </Text>
              <Text
                fontSize={'0.875rem'}
              >{`인원 ${info.currentApplicantCount}/${info.maximumCount}`}</Text>
            </Flex>
          </Flex>
        </BorderBox>
      </Box>
    </Link>
  );
};

export default EventGridItem;

const AvatarAndStatus = ({
  status,
  imageUrl,
  nickname,
}: {
  status: EventStatus;
  imageUrl: string;
  nickname: string;
}) => {
  const isActive = status === 'OPEN' || status === 'REOPEN';
  return (
    <Flex justifyContent={'space-between'}>
      <HStack>
        <Avatar
          src={imageUrl}
          w={'2rem'}
          h={'2rem'}
        />
        <Text color={'gray.900'}>{nickname}</Text>
      </HStack>
      <Label bg={isActive ? 'primary.900' : 'gray.400'}>{CONSTANTS.EVENT_STATUS[status]}</Label>
    </Flex>
  );
};

const PositionLabels = ({ positions }: { positions: Position[] }) => {
  return (
    <Flex
      flexWrap={'wrap'}
      gap={'0.2rem'}
    >
      {positions.map((position) => (
        <Label
          key={uuidv4()}
          type={position}
        />
      ))}
    </Flex>
  );
};
