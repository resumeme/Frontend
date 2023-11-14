import { Flex, Text } from '@chakra-ui/react';
import { AccordionToggle } from '~/components/atoms/AccordionToggle';
import { BorderBox } from '~/components/atoms/BorderBox';

const EventItem = () => {
  return (
    <BorderBox
      borderTop={0}
      borderRadius={0}
      p={'2.75rem 1.69rem'}
    >
      <Flex
        alignItems={'end'}
        fontSize={'0.875rem'}
        color={'gray.500'}
        justifyContent={'space-between'}
      >
        <Text
          fontSize={'1.5rem'}
          fontWeight={600}
          color={'gray.800'}
        >
          이벤트 제목
        </Text>
        <Flex direction={'column'}>
          <Flex gap={'1.5rem'}>
            <Text>첨삭 종료일</Text>
            <Text>2023.12.25</Text>
          </Flex>
          <Flex justifyContent={'space-between'}>
            <Text>신청 인원</Text>
            <Text>3 / 5</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        color={'gray.800'}
        fontSize={'0.875rem'}
        mt={'2.37rem'}
        justifyContent={'space-between'}
      >
        <AccordionToggle text="신청이력서 3건">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum itaque veniam, ratione
          illo eveniet maxime odio voluptates blanditiis culpa fugiat molestiae aliquid suscipit
          explicabo hic tempore ipsa doloremque ab cupiditate!
        </AccordionToggle>
      </Flex>
    </BorderBox>
  );
};

export default EventItem;
