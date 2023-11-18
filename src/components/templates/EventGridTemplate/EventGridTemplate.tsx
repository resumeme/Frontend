import { Text } from '@chakra-ui/react';
import { EventGrid } from '~/components/organisms/EventGrid';
import { DUMMY_DATA } from '~/components/organisms/EventGrid/dummy';

const EventGridTemplate = () => {
  return (
    <>
      <Text
        color={'gray.900'}
        fontSize={'1.5rem'}
        mb={'2rem'}
      >
        진행 중인 첨삭 이벤트
      </Text>
      <EventGrid events={DUMMY_DATA} />
    </>
  );
};

export default EventGridTemplate;
