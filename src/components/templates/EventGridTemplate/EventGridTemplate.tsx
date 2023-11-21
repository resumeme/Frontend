import { Text } from '@chakra-ui/react';
import { useState } from 'react';
import { Pagination } from '~/components/molecules/Pagination';
import { EventGrid } from '~/components/organisms/EventGrid';
import { useGetEventList } from '~/queries/event/useGetEventList';

const EventGridTemplate = () => {
  const [page, setPage] = useState(1);
  const size = 6;
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
      {data.events.length ? (
        <>
          <EventGrid events={data.events} />
          <Pagination
            size={size}
            page={page}
            setPage={setPage}
            total={data.pageData.totalElements}
          />
        </>
      ) : (
        <Text>진행 중인 이벤트가 없어요. ૮ ´• ﻌ ´• ა</Text>
      )}
    </>
  );
};

export default EventGridTemplate;
