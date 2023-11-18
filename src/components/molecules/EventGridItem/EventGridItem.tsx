import { Text, Box, Image, HStack, Flex } from '@chakra-ui/react';
import { Avatar } from '~/components/atoms/Avatar';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Label } from '~/components/atoms/Label';

const DUMMY_DATA = {
  mentorInfo: {
    mentorId: 1,
    nickname: '큰돌',
    imageUrl: 'https://i.pinimg.com/736x/4a/d7/8f/4ad78f5e3407a9912fd0862be6a68a5b.jpg',
  },
  info: {
    id: 1,
    title: '프론트엔드, 백엔드 이력서 첨삭해드립니다.',
    content: '내용',
    positions: ['FRONT', 'BACK'],
    timeInfo: {
      openDateTime: '2023-10-11',
      closeDateTime: '2023-10-31',
      endDate: '2023-12-01',
    },
    status: 'OPEN',
  },
};

const EventGridItem = () => {
  const isOpen = DUMMY_DATA.info.status === 'OPEN';
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
        <Flex justifyContent={'space-between'}>
          <HStack>
            <Avatar
              src={DUMMY_DATA.mentorInfo.imageUrl}
              w={'2rem'}
              h={'2rem'}
            />
            <Text>{DUMMY_DATA.mentorInfo.nickname}</Text>
          </HStack>
          <Label bg={isOpen ? 'primary.900' : 'gray.300'}>{isOpen ? '모집 중' : '모집 마감'}</Label>
        </Flex>
      </BorderBox>
    </Box>
  );
};

export default EventGridItem;
