import { Text, Box, Image, HStack, Flex } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { Avatar } from '~/components/atoms/Avatar';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Label } from '~/components/atoms/Label';
import { Position } from '~/types/position';

const DUMMY_DATA = {
  mentorInfo: {
    mentorId: 1,
    nickname: '큰돌',
    imageUrl: 'https://i.pinimg.com/736x/4a/d7/8f/4ad78f5e3407a9912fd0862be6a68a5b.jpg',
  },
  info: {
    id: 1,
    title:
      '프론트엔드, 백엔드 이력서 첨삭해드립니다. 이게 길어지면요. 어떻게 되냐면요. 이렇게 됩니다.',
    content: '내용',
    maximumCount: 3,
    currentApplicantCount: 0,
    positions: ['FRONT', 'BACK'] as Position[],
    timeInfo: {
      openDateTime: '2023-10-11T17:27:13.040Z',
      closeDateTime: '2023-10-31T17:27:13.040Z',
      endDate: '2023-12-01',
    },
    status: 'OPEN',
  },
};

const EventGridItem = () => {
  const openDate = new Date(DUMMY_DATA.info.timeInfo.openDateTime).toLocaleDateString();
  const closeDate = new Date(DUMMY_DATA.info.timeInfo.closeDateTime).toLocaleDateString();
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
            status={DUMMY_DATA.info.status}
            imageUrl={DUMMY_DATA.mentorInfo.imageUrl}
            nickname={DUMMY_DATA.mentorInfo.nickname}
          />
          <Text
            noOfLines={2}
            color={'gray.800'}
          >
            {DUMMY_DATA.info.title}
          </Text>
          <PositionLabels positions={DUMMY_DATA.info.positions} />
          <Flex
            justifyContent={'space-between'}
            marginTop={'auto'}
          >
            <Text fontSize={'0.875rem'}>
              {openDate} ~ {closeDate}
            </Text>
            <Text
              fontSize={'0.875rem'}
            >{`인원 ${DUMMY_DATA.info.currentApplicantCount}/${DUMMY_DATA.info.maximumCount}`}</Text>
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
