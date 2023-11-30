import { Flex, Heading, Text } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '~/components/atoms/Button';
import { Pagination } from '~/components/molecules/Pagination';
import { EventGrid } from '~/components/organisms/EventGrid';
import { appPaths } from '~/config/paths';
import CONSTANTS from '~/constants';
import useUser from '~/hooks/useUser';
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

  const { user } = useUser();

  return (
    <>
      <Flex
        justifyContent={'space-between'}
        mb={'2rem'}
      >
        <Heading
          fontSize={'1.5rem'}
          color={'gray.800'}
        >
          이벤트 목록
        </Heading>
        {user?.role === 'mentor' && (
          <Link to={appPaths.eventCreate()}>
            <Button size={'md'}>이벤트 생성</Button>
          </Link>
        )}
      </Flex>
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
        <Flex
          h={'10rem'}
          justify={'center'}
          align={'center'}
        >
          <Text
            color={'gray.400'}
            fontWeight={600}
          >
            {CONSTANTS.DESCRIBE_MESSAGE.NO_EVENTS}
          </Text>
        </Flex>
      )}
    </>
  );
};

export default EventGridTemplate;
