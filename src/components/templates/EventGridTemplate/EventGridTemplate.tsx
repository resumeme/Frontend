import { Text } from '@chakra-ui/react';
import { EventGrid } from '~/components/organisms/EventGrid';
import { useGetEventList } from '~/queries/event/useGetEventList';

const EventGridTemplate = () => {
  const { data } = useGetEventList();
  return (
    <>
      <Text
        color={'gray.900'}
        fontSize={'1.5rem'}
        mb={'2rem'}
      >
        진행 중인 첨삭 이벤트
      </Text>
      <EventGrid events={data} />
    </>
  );
};

export default EventGridTemplate;
