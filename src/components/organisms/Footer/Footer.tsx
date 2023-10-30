import { Box, Divider, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      bg={'white'}
      w={'100%'}
      borderTop={'1px solid'}
      borderColor={'gray.300'}
    >
      <Flex
        mx={'auto'}
        maxW={'4xl'}
        direction={'column'}
        px={'0.75rem'}
      >
        <Flex
          w={'100%'}
          mt={'3.14rem'}
        >
          <Text
            mr={'auto'}
            fontWeight={900}
          >
            resumeme
          </Text>
          <HStack
            color={'gray.400'}
            fontSize={'1.125rem'}
            fontWeight={600}
            spacing={'3.75rem'}
          >
            <Link
              to={'https://www.notion.so/prgrms/11-0-2a36f4b93e324e3390ed43b831f9f557'}
              target="_blank"
            >
              <Text>아몬드빼빼로</Text>
            </Link>
            <Link //Todo: 이용약관 추가 시 연결
              to={''}
              target=""
            >
              <Text>이용 약관</Text>
            </Link>
            <Link //Todo: 블로그 생성 시 연결
              to={''}
              target=""
            >
              <Text>블로그</Text>
            </Link>
            <Link //Todo: 개인정보 처리방침 추가 후 연결
              to={''}
              target=""
            >
              <Text>개인정보 처리방침</Text>
            </Link>
          </HStack>
        </Flex>
        <Flex alignItems={'end'}>
          <Flex
            mt={'34px'}
            mr={'auto'}
            color={'gray.400'}
            fontSize={'0.75rem'}
            direction={'column'}
          >
            <HStack spacing={'0.75rem'}>
              <Text fontWeight={600}>팀 아몬드빼빼로</Text>
              <Divider
                h={'0.75rem'}
                orientation="vertical"
                border={'1px'}
                borderColor={'gray.300'}
              />
              <Text>멘토 (BE) 조규현, (FE) 윤지석</Text>
            </HStack>
            <HStack
              mt={'32px'}
              spacing={'0.75rem'}
            >
              <Text fontWeight={600}>백엔드</Text>
              <Text>김범우</Text>
              <Divider
                h={'0.75rem'}
                orientation="vertical"
                border={'1px'}
                borderColor={'gray.300'}
              />
              <Text>주홍석</Text>
              <Divider
                h={'0.75rem'}
                orientation="vertical"
                border={'1px'}
                borderColor={'gray.300'}
              />
              <Text>최지연</Text>
            </HStack>
            <HStack spacing={'0.75rem'}>
              <Text fontWeight={600}>프론트엔드</Text>
              <Text>신동호</Text>
              <Divider
                h={'0.75rem'}
                orientation="vertical"
                border={'1px'}
                borderColor={'gray.300'}
              />
              <Text>우지호</Text>
              <Divider
                h={'0.75rem'}
                orientation="vertical"
                border={'1px'}
                borderColor={'gray.300'}
              />
              <Text>이민희</Text>
            </HStack>

            <HStack
              mt={'32px'}
              spacing={'0.75rem'}
            >
              <Text fontWeight={600}>서울특별시 프롱구 백둥대로 4기</Text>
              <Divider
                h={'0.75rem'}
                orientation="vertical"
                border={'1px'}
                borderColor={'gray.300'}
              />
              <Text>전화번호: 000-0000-0000</Text>
            </HStack>
          </Flex>
          <HStack
            mt={'34px'}
            color={'gray.400'}
            spacing={'8rem'}
            alignItems={'start'}
          >
            <Flex direction={'column'}>
              <Text fontWeight={600}>이력서</Text>
              <Link //Todo: 이력서 관리 라우팅 후 연결
                to={'/'}
              >
                <Text mt={'1.13rem'}>이력서 관리</Text>
              </Link>
            </Flex>
            <Flex direction={'column'}>
              <Text fontWeight={600}>이벤트</Text>
              <Link to={'/event/view'}>
                <Text mt={'1.13rem'}>진행중인 이벤트</Text>
              </Link>
            </Flex>
            <Flex direction={'column'}>
              <Link to={'/event/view'}>
                <Text fontWeight={600}>커뮤니티</Text>
              </Link>

              <Link to={'/coffee-chat'}>
                <Text mt={'1.13rem'}>멘토 커피챗</Text>
              </Link>
              <Link to={'/general'}>
                <Text>자유게시판</Text>
              </Link>
              <Link to={'/resume/references'}>
                <Text>합격 이력서</Text>
              </Link>
            </Flex>
          </HStack>
        </Flex>
        <Divider
          mt={'5.38rem'}
          border={'1px'}
          borderColor={'gray.300'}
        />
        <Text
          my={'1.16rem'}
          color={'gray.400'}
          fontSize={'0.75rem'}
          fontWeight={700}
        >
          ⓒ 2023 이력, 써{' '}
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
