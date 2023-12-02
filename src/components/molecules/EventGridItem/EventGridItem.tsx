import {
  Text,
  Box,
  Image,
  HStack,
  Flex,
  Card,
  CardBody,
  Divider,
  CardFooter,
  Tooltip,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Avatar } from '~/components/atoms/Avatar';
import { Badge } from '~/components/atoms/Badge';
import { Label } from '~/components/atoms/Label';
import { assets } from '~/config/assets';
import { appPaths } from '~/config/paths';
import CONSTANTS from '~/constants';
import { EventListItem } from '~/types/event/eventList';
import { EventStatus } from '~/types/eventStatus';
import { Position } from '~/types/position';

const THUMBNAILS = assets.thumbnail;

const EventGridItem = ({ event: { info, mentorInfo } }: { event: EventListItem }) => {
  const openDate = new Date(info.timeInfo.openDateTime).toLocaleDateString();
  const closeDate = new Date(info.timeInfo.closeDateTime).toLocaleDateString();
  const isFullCount = info.currentApplicantCount === info.maximumCount;
  const srcKey = info.positions[0] || 'FRONT';
  const thumbnailSrc = THUMBNAILS[srcKey as keyof typeof THUMBNAILS];

  return (
    <Link to={appPaths.eventDetail(info.id)}>
      <Card
        overflow={'hidden'}
        role="group"
        position={'relative'}
        _hover={{
          boxShadow: '1px 2px 5px 0 rgba(0, 0, 0, 0.2)',
          transition: '.5s',
        }}
      >
        <Box
          overflow={'hidden'}
          borderTopRadius={'lg'}
          h={'35%'}
        >
          <Image
            src={thumbnailSrc}
            aspectRatio={3 / 2}
            objectFit={'cover'}
            _groupHover={{
              transform: 'scale(120%)',
              transition: '.5s',
            }}
          />
        </Box>
        <CardBody>
          <Flex
            direction={'column'}
            gap={2}
          >
            <Tooltip
              label={info.title}
              placement="top-start"
              fontSize={'xs'}
              fontWeight={'normal'}
              openDelay={500}
              bg={'white'}
              color={'gray.700'}
              hasArrow
            >
              <Text
                size="md"
                noOfLines={1}
                fontWeight={'bold'}
                color={'gray.700'}
              >
                {info.title}
              </Text>
            </Tooltip>
            <MentorInfo
              imageUrl={mentorInfo.imageUrl}
              nickname={mentorInfo.nickname}
            />
          </Flex>
        </CardBody>
        <Divider
          borderColor={'gray.300'}
          mx={'auto'}
          w={'95%'}
        />
        <CardFooter>
          <Flex
            justify={'space-between'}
            w={'full'}
          >
            {/* FIXME 이벤트 대표 직무 1개로 변경하기 */}
            <PositionLabels positions={info.positions} />
            <Label
              py={0}
              px={1.5}
              maxH={'1.3rem'}
              fontSize={'xs'}
              fontWeight={'medium'}
              bg={'gray.200'}
              color={'gray.500'}
              textDecoration={isFullCount ? 'line-through' : 'none'}
            >
              {info.currentApplicantCount} / {info.maximumCount}
            </Label>
          </Flex>
        </CardFooter>

        <Tooltip
          label={`${openDate} ~ ${closeDate}`}
          placement="top"
          fontSize={'sm'}
          fontWeight={'normal'}
          bg={'white'}
          color={'gray.700'}
          hasArrow
        >
          <Box
            position={'absolute'}
            top={'3%'}
            right={'3%'}
            zIndex={'docked'}
          >
            <StatusBadge status={info.status} />
          </Box>
        </Tooltip>
      </Card>
    </Link>
  );
};

export default EventGridItem;

const StatusBadge = ({ status }: { status: EventStatus }) => {
  const isActive = status === 'OPEN' || status === 'REOPEN';

  return (
    <Label
      bg={isActive ? 'green.500' : 'gray.300'}
      py={'0.1rem'}
      h={'fit-content'}
      color={isActive ? 'white' : 'gray.600'}
      fontWeight={'semibold'}
    >
      {CONSTANTS.EVENT_STATUS[status]}
    </Label>
  );
};

const MentorInfo = ({ imageUrl, nickname }: { imageUrl: string; nickname: string }) => {
  return (
    <Flex justifyContent={'space-between'}>
      <HStack>
        <Avatar
          src={imageUrl}
          w={'1.5rem'}
          h={'1.5rem'}
        />
        <Text
          color={'gray.700'}
          fontSize={'sm'}
          fontWeight={'semibold'}
          noOfLines={1}
        >
          {nickname}
        </Text>
        <Badge
          type="mentee"
          fontSize={'xs'}
          fontWeight={'medium'}
          py={0}
        >
          멘토
        </Badge>
      </HStack>
    </Flex>
  );
};

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
          >{`+${positions.length - MAX_LABELS_TO_DISPLAY}`}</Text>
        </Tooltip>
      )}
    </Flex>
  );
};
