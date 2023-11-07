import { Box, Divider, Flex, HStack, Heading, Text, VStack } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Label } from '~/components/atoms/Label';
import { ReadEvent } from '~/types/event';
import { ReadMentor } from '~/types/mentor';

type EventDetailProps = {
  mentor: ReadMentor;
  event: ReadEvent;
};

const EventDetail = ({ mentor, event }: EventDetailProps) => {
  const replaceDate = (date: string) => {
    return date.slice(0, 10).replace(/-/g, '.');
  };

  const eventStatus =
    event.info.maximumCount === event.info.currentApplicantCount ||
    new Date().toISOString() > event.info.timeInfo.closeDateTime;

  return (
    <Box w={'full'}>
      <VStack
        gap={'1.56rem'}
        w={'full'}
      >
        <Flex
          p={'1rem'}
          w={'full'}
          justifyContent={'space-between'}
        >
          <Heading fontSize={'1.5rem'}>{event.info.title}</Heading>
          {eventStatus && (
            <Label
              fontSize={'0.875rem'}
              bg={'primary.900'}
              textAlign={'center'}
            >
              모집 중
            </Label>
          )}
        </Flex>
        <BorderBox
          borderRadius={'0.375rem'}
          w={'full'}
        >
          <HStack
            pl={'1.5rem'}
            w={'100%'}
          >
            <Text
              w={'18%'}
              as="span"
            >
              모집 기간
            </Text>
            <Text
              w={'42%'}
              as="span"
              color={'gray.900'}
            >{`${replaceDate(event.info.timeInfo.openDateTime)} ~ ${replaceDate(
              event.info.timeInfo.closeDateTime,
            )}`}</Text>
            <Divider
              orientation="vertical"
              w={'0.625rem'}
              h={'1.375rem'}
              borderColor={'gray.400'}
            />
            <Text
              textAlign={'center'}
              w={'20%'}
              as="span"
            >
              첨삭 종료일
            </Text>
            <Text
              textAlign={'center'}
              w={'20%'}
              as="span"
              color={'gray.900'}
            >
              {replaceDate(event.info.timeInfo.endDate)}
            </Text>
          </HStack>
        </BorderBox>
        <BorderBox
          borderRadius={'0.375rem'}
          w={'full'}
        >
          <HStack
            pl={'1.5rem'}
            w={'100%'}
          >
            <Text
              w={'18%'}
              as="span"
            >
              직무
            </Text>
            <Text
              flexGrow={0}
              w={'42%'}
              as="span"
              color={'gray.900'}
            >
              <HStack>
                {mentor.experiencedPositions.map((position) => (
                  <Text
                    key={uuidv4()}
                    as={'span'}
                  >
                    {position}
                  </Text>
                ))}
                <Text
                  key={uuidv4()}
                  as={'span'}
                >
                  FRONT
                </Text>
                <Text
                  key={uuidv4()}
                  as={'span'}
                >
                  DEVOPS
                </Text>
                <Text
                  key={uuidv4()}
                  as={'span'}
                >
                  AI
                </Text>
              </HStack>
            </Text>
            <Divider
              orientation="vertical"
              w={'0.625rem'}
              h={'1.375rem'}
              borderColor={'gray.400'}
            />
            <Text
              textAlign={'center'}
              w={'20%'}
              as="span"
            >
              경력
            </Text>
            <Text
              textAlign={'center'}
              w={'20%'}
              as="span"
              color={'gray.900'}
            >{`${mentor.careerYear}년`}</Text>
          </HStack>
        </BorderBox>
        <BorderBox
          borderRadius={'0.375rem'}
          w={'full'}
        >
          <Flex
            pl={'1.5rem'}
            w={'100%'}
            direction={'column'}
            gap={'1.25rem'}
          >
            <Text as="span">이벤트 내용</Text>
            <Text
              color={'gray.900'}
              whiteSpace={'pre-line'}
              as="p"
            >
              {event.info.content}
            </Text>
          </Flex>
        </BorderBox>
        <BorderBox
          borderRadius={'0.375rem'}
          w={'full'}
        >
          <Flex
            pl={'1.5rem'}
            w={'100%'}
            direction={'column'}
            gap={'1.25rem'}
          >
            <Text
              as="span"
              color={'gray.700'}
            >
              수상 경력
            </Text>
            <Text
              color={'gray.900'}
              whiteSpace={'pre-line'}
              as="p"
            >
              {mentor.careerContent}
            </Text>
          </Flex>
        </BorderBox>
      </VStack>
    </Box>
  );
};

export default EventDetail;
