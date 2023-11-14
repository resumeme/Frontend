import { Flex, Heading, Text } from '@chakra-ui/react';
import EventItem from './EventItem';
import { BorderBox } from '~/components/atoms/BorderBox';

const EventProfile = () => {
  return (
    <>
      <Heading
        fontSize={'1.25rem'}
        color={'gray.700'}
        fontWeight={700}
      >
        진행중인 이벤트
      </Heading>
      <Flex
        mt={'2.31rem'}
        direction={'column'}
      >
        <BorderBox
          borderBottomRadius={0}
          p={'1.88rem 1.69rem'}
        >
          <Text
            fontSize={'0.85rem'}
            color={'gray.700'}
          >
            총 3건
          </Text>
        </BorderBox>
        <EventItem />
      </Flex>
    </>
  );
};
export default EventProfile;
