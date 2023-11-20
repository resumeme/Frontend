import { Text } from '@chakra-ui/react';
import { useState } from 'react';
import { Pagination } from '~/components/molecules/Pagination';
import { EventGrid } from '~/components/organisms/EventGrid';
import { useGetEventList } from '~/queries/event/useGetEventList';

const EventGridTemplate = () => {
  const [page, setPage] = useState(1);
  const size = 10;
  const { data } = useGetEventList({ page, size });
  return (
    <>
      <Text
        color={'gray.900'}
        fontSize={'1.5rem'}
        mb={'2rem'}
      >
        진행 중인 첨삭 이벤트
      </Text>
      <EventGrid events={data.events} />
      <Pagination
        size={size}
        page={page}
        setPage={setPage}
        total={data.pageData.pageData.totalElements}
      />
    </>
  );
};

export default EventGridTemplate;
