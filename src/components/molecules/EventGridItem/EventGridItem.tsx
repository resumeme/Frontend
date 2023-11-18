import { Text, Box, Image, HStack, Flex } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { Avatar } from '~/components/atoms/Avatar';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Label } from '~/components/atoms/Label';
import { Position } from '~/types/position';

//FIXME - 데이터 타입 정의하기
const EventGridItem = ({ eventInfo, mentorInfo }: { eventInfo: any; mentorInfo: any }) => {
  const openDate = new Date(eventInfo.timeInfo.openDateTime).toLocaleDateString();
  const closeDate = new Date(eventInfo.timeInfo.closeDateTime).toLocaleDateString();
  return (
    <Box
      w={'18.75rem'}
      h={'28.5rem'}
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
          gap={'1.5rem'}
          h={'full'}
        >
          <AvatarAndStatus
            status={eventInfo.status}
            imageUrl={mentorInfo.imageUrl}
            nickname={mentorInfo.nickname}
          />
          <Text
            noOfLines={2}
            color={'gray.800'}
          >
            {eventInfo.title}
          </Text>
          <PositionLabels positions={eventInfo.positions} />
          <Flex
            justifyContent={'space-between'}
            marginTop={'auto'}
          >
            <Text fontSize={'0.875rem'}>
              {openDate} ~ {closeDate}
            </Text>
            <Text
              fontSize={'0.875rem'}
            >{`인원 ${eventInfo.currentApplicantCount}/${eventInfo.maximumCount}`}</Text>
          </Flex>
        </Flex>
      </BorderBox>
    </Box>
  );
};

export default EventGridItem;

const AvatarAndStatus = ({
  status,
  imageUrl,
  nickname,
}: {
  status: string;
  imageUrl: string;
  nickname: string;
}) => {
  const isOpen = status === 'OPEN';
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
      <Label bg={isOpen ? 'primary.900' : 'gray.300'}>{isOpen ? '모집 중' : '모집 마감'}</Label>
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
