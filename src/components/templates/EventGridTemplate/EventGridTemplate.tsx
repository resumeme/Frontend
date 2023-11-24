import { Text } from '@chakra-ui/react';
import { useState } from 'react';
import { Pagination } from '~/components/molecules/Pagination';
import { EventGrid } from '~/components/organisms/EventGrid';
import { useGetEventList } from '~/queries/event/useGetEventList';

const EventGridTemplate = () => {
  const [page, setPage] = useState(1);
  const size = 6;
  const { data } = useGetEventList({ page, size });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handlePageChange = (newPage: number) => {
    if (newPage !== page) {
      setPage(newPage);
    }
    scrollToTop();
  };

  return (
    <>
      <Text
        color={'gray.800'}
        fontSize={'1.5rem'}
        fontWeight={'semibold'}
        mb={'2rem'}
      >
        진행 중인 피드백
      </Text>
      {data.events.length ? (
        <>
          <EventGrid events={data.events} />
          <Pagination
            size={size}
            page={page}
            setPage={handlePageChange}
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
