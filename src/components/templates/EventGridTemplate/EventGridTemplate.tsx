import { Box, Flex, Heading, Text, Icon } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { HiPlusCircle } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
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
            <Box role="group">
              <Flex
                align={'center'}
                gap={1}
                _groupHover={{
                  transform: 'translateY(-1px)',
                  transition: 'all .25s linear',
                }}
              >
                <Icon
                  as={HiPlusCircle}
                  color={'gray.400'}
                  fontSize={'1.25rem'}
                  verticalAlign={'center'}
                  _groupHover={{
                    color: 'primary.900',
                    transition: 'all .6s linear',
                    transform: 'rotateX(180deg)',
                  }}
                />
                <Text
                  fontSize={'md'}
                  fontWeight={'semibold'}
                  color={'gray.400'}
                  textDecoration="underline 2px"
                  textUnderlineOffset="0.25rem"
                  _groupHover={{
                    color: 'primary.900',
                    transition: 'all .25s linear',
                  }}
                >
                  이벤트 생성
                </Text>
              </Flex>
            </Box>
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
