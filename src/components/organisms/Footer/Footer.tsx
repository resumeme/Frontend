import { Box, Divider, Flex, HStack, Text } from '@chakra-ui/react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_CONTENT } from './Footer.const';

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
