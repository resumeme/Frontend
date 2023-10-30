import { Divider, Flex, HStack, Text, VStack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <>
      <Flex
        w={'100%'}
        direction={'column'}
        px={'0.75rem'}
      >
        <Flex w={'100%'}>
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
            <Text>아몬드빼빼로</Text>
            <Text>이용 약관</Text>
            <Text>블로그</Text>
            <Text>개인정보 처리방침</Text>
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
              <Text mt={'1.13rem'}>나의 이력서</Text>
              <Text>이력서 관리</Text>
            </Flex>
            <Flex direction={'column'}>
              <Text fontWeight={600}>피드백</Text>
              <Text mt={'1.13rem'}>멘토 피드백</Text>
              <Text>공개 피드백</Text>
            </Flex>
            <Flex direction={'column'}>
              <Text fontWeight={600}>커뮤니티</Text>
              <Text mt={'1.13rem'}>멘토 커피챗</Text>
              <Text>자유게시판</Text>
              <Text>공개 이력서</Text>
            </Flex>
          </HStack>
        </Flex>
        <Divider
          mt={'5.38rem'}
          border={'1px'}
          borderColor={'gray.300'}
        />
        <Text
          mt={'1rem'}
          color={'gray.400'}
          fontSize={'0.75rem'}
          fontWeight={700}
        >
          ⓒ 2023 이력, 써{' '}
        </Text>
      </Flex>
    </>
  );
};

export default Footer;
