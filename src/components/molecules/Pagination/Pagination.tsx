import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Button as ChakraButton, Text } from '@chakra-ui/react';

/**
 * total: 전체 아이템 개수
 * size: 한 페이지 당 보여줄 아이템 개수
 * page: 현재 페이지 state
 * setPage: 현재 페이지 setState 함수
 */
type PaginationProps = {
  total: number;
  size: number;
  page: number;
  setPage: (page: number) => void;
};

const Pagination = ({ total, size, page, setPage }: PaginationProps) => {
  const totalPageCount = Math.ceil(total / size);
  return (
    <Flex
      w={'full'}
      justifyContent={'center'}
      align={'center'}
      mt={'10rem'}
    >
      <IconButton
        w={'auto'}
        bg={'none'}
        icon={<ChevronLeftIcon />}
        aria-label="이전 페이지로 이동"
        isDisabled={page === 1}
        onClick={() => setPage(page - 1)}
      />
      {Array(totalPageCount)
        .fill(null)
        .map((_, i) => {
          const isCurrentPage = page === i + 1;
          return (
            <ChakraButton
              key={i + 1}
              size={'xs'}
              onClick={() => setPage(i + 1)}
              bg={isCurrentPage ? 'primary.800' : 'none'}
              _hover={{
                bg: isCurrentPage ? 'primary.800' : 'primary.100',
              }}
              w={'auto'}
            >
              <Text
                fontSize={'1rem'}
                color={isCurrentPage ? 'gray.100' : 'gray. 700'}
              >
                {i + 1}
              </Text>
            </ChakraButton>
          );
        })}
      <IconButton
        w={'auto'}
        bg={'none'}
        icon={<ChevronRightIcon />}
        aria-label="다음 페이지로 이동"
        isDisabled={page === totalPageCount}
        onClick={() => setPage(page + 1)}
      />
    </Flex>
  );
};

export default Pagination;
