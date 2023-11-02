import { Box, Divider, Flex, HStack, Text } from '@chakra-ui/react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const FOOTER_CONTENT = {
  main: {
    title: 'resume.me',
  },
  links: {
    almondPepero: {
      text: '아몬드빼빼로',
      url: 'https://www.notion.so/prgrms/11-0-2a36f4b93e324e3390ed43b831f9f557',
    },
    termsOfService: {
      text: '이용 약관',
      url: '', // 이용약관 페이지 링크 추가 필요
    },
    blog: {
      text: '블로그',
      url: '', // 블로그 페이지 링크 추가 필요
    },
    privacyPolicy: {
      text: '개인정보 처리방침',
      url: '', // 개인정보 처리방침 페이지 링크 추가 필요
    },
  },
  team: {
    name: '팀 아몬드빼빼로',
    mentors: '멘토 (BE) 조규현, (FE) 윤지석',
    backend: '백엔드',
    backendMembers: ['김범우', '주홍석', '최지연'],
    frontend: '프론트엔드',
    frontendMembers: ['신동호', '우지호', '이민희'],
    address: '서울특별시 프롱구 백둥대로 4기',
    phoneNumber: '전화번호: 000-0000-0000',
  },
  pages: {
    resume: {
      text: '이력서',
      link: {
        resumeManagement: {
          text: '이력서 관리',
          url: '/', // 이력서 관리 페이지 링크 추가 필요
        },
      },
    },
    event: {
      text: '이벤트',
      link: {
        ongoingEvent: {
          text: '진행중인 이벤트',
          url: '/event/view',
        },
      },
    },
    community: {
      text: '커뮤니티',
      link: {
        mentorCoffeeChat: {
          text: '멘토 커피챗',
          url: '/coffee-chat',
        },
        freeBoard: {
          text: '자유게시판',
          url: '/general',
        },
        successfulResumes: {
          text: '합격 이력서',
          url: '/resume/references',
        },
      },
    },
  },
  copyright: 'ⓒ 2023 이력, 써',
};

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
            {FOOTER_CONTENT.main.title}
          </Text>
          <HStack
            color={'gray.400'}
            fontSize={'1.125rem'}
            fontWeight={600}
            spacing={'3.75rem'}
          >
            {Object.values(FOOTER_CONTENT.links).map((link) => (
              <Link
                key={link.text}
                to={link.url}
                target="_blank"
              >
                <Text>{link.text}</Text>
              </Link>
            ))}
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
              <Text
                w={'3.25rem'}
                fontWeight={600}
              >
                {FOOTER_CONTENT.team.backend}
              </Text>
              {FOOTER_CONTENT.team.backendMembers.map((member, idx) => (
                <Fragment key={member}>
                  <Text>{member}</Text>
                  {idx !== FOOTER_CONTENT.team.backendMembers.length - 1 && (
                    <Divider
                      h={'0.75rem'}
                      orientation="vertical"
                      border={'1px'}
                      borderColor={'gray.300'}
                    />
                  )}
                </Fragment>
              ))}
            </HStack>
            <HStack spacing={'0.75rem'}>
              <Text
                w={'3.25rem'}
                fontWeight={600}
              >
                {FOOTER_CONTENT.team.frontend}
              </Text>
              {FOOTER_CONTENT.team.frontendMembers.map((member, idx) => (
                <Fragment key={member}>
                  <Text>{member}</Text>
                  {idx !== FOOTER_CONTENT.team.frontendMembers.length - 1 && (
                    <Divider
                      h={'0.75rem'}
                      orientation="vertical"
                      border={'1px'}
                      borderColor={'gray.300'}
                    />
                  )}
                </Fragment>
              ))}
            </HStack>
            <HStack
              mt={'32px'}
              spacing={'0.75rem'}
            >
              <Text fontWeight={600}>{FOOTER_CONTENT.team.address}</Text>
              <Divider
                h={'0.75rem'}
                orientation="vertical"
                border={'1px'}
                borderColor={'gray.300'}
              />
              <Text>{FOOTER_CONTENT.team.phoneNumber}</Text>
            </HStack>
          </Flex>
          <HStack
            mt={'34px'}
            color={'gray.400'}
            spacing={'5rem'}
            alignItems={'start'}
          >
            <Flex direction={'column'}>
              <Text fontWeight={600}>{FOOTER_CONTENT.pages.resume.text}</Text>
              <Link to={FOOTER_CONTENT.pages.resume.link.resumeManagement.url}>
                <Text mt={'1.13rem'}>{FOOTER_CONTENT.pages.resume.link.resumeManagement.text}</Text>
              </Link>
            </Flex>
            <Flex direction={'column'}>
              <Text fontWeight={600}>{FOOTER_CONTENT.pages.event.text}</Text>
              <Link to={FOOTER_CONTENT.pages.event.link.ongoingEvent.url}>
                <Text mt={'1.13rem'}>{FOOTER_CONTENT.pages.event.link.ongoingEvent.text}</Text>
              </Link>
            </Flex>
            <Flex direction={'column'}>
              <Link to={FOOTER_CONTENT.pages.community.link.mentorCoffeeChat.url}>
                <Text fontWeight={600}>{FOOTER_CONTENT.pages.community.text}</Text>
              </Link>
              <Link to={FOOTER_CONTENT.pages.community.link.mentorCoffeeChat.url}>
                <Text mt={'1.13rem'}>
                  {FOOTER_CONTENT.pages.community.link.mentorCoffeeChat.text}
                </Text>
              </Link>
              <Link to={FOOTER_CONTENT.pages.community.link.freeBoard.url}>
                <Text>{FOOTER_CONTENT.pages.community.link.freeBoard.text}</Text>
              </Link>
              <Link to={FOOTER_CONTENT.pages.community.link.successfulResumes.url}>
                <Text>{FOOTER_CONTENT.pages.community.link.successfulResumes.text}</Text>
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
          {FOOTER_CONTENT.copyright}
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
