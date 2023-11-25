import { Text } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pagination } from '~/components/molecules/Pagination';
import { EventGrid } from '~/components/organisms/EventGrid';
import { useGetEventList } from '~/queries/event/useGetEventList';

const EventGridTemplate = () => {
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(window.location.search);
  const pageParamValue = parseInt(queryParams.get('page') || '1', 10);

  const [page, setPage] = useState(pageParamValue);
  const size = 6;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handlePageChange = useCallback(
    (newPage: number) => {
      navigate(`?page=${newPage}`);
      scrollToTop();
    },
    [navigate],
  );

  useEffect(() => {
    handlePageChange(pageParamValue);
    setPage(pageParamValue);
  }, [handlePageChange, pageParamValue]);

  const { data } = useGetEventList({ page: pageParamValue, size });

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
