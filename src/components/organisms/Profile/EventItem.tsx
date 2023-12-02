import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Icon,
  Spacer,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { MdOutlineArticle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Label } from '~/components/atoms/Label';
import { ManagementPanel } from '~/components/molecules/ManagementPanel';
import { appPaths } from '~/config/paths';
import CONSTANTS from '~/constants';
import { EventResume, EventTime } from '~/types/event/event';
import { EventStatus } from '~/types/eventStatus';
import { formatDate } from '~/utils/formatDate';

type EventItemProps = {
  eventId: number;
  title: string;
  maximumCount: number;
  currentApplicantCount: number;
  status: EventStatus;
  timeInfo: Omit<EventTime, 'now'>;
  resumes: EventResume[];
};

const STATUS_SCHEME = {
  READY: { color: 'teal.600', text: '신청을 받기 전 준비중 상태에요. (1/4)' },
  OPEN: {
    color: 'primary.900',
    text: '피드백 신청을 받고 있어요. 피드백을 남길 수 있어요. (2/4)',
  },
  CLOSE: { color: 'primary.900', text: '신청이 마감되었어요. 피드백을 진행해주세요! (3/4)' },
  FINISH: { color: 'gray.700', text: '피드백 일정이 끝나 이벤트가 종료되었어요. (4/4)' },
  REOPEN: { color: 'teal.600', text: '다시 이벤트 신청을 열어둔 상태에요! (1/4)' },
};

const EventItem = ({
  eventId,
  currentApplicantCount,
  maximumCount,
  resumes,
  status,
  timeInfo,
  title,
}: EventItemProps) => {
  return (
    <>
      <Flex
        alignItems={'end'}
        fontSize={'0.875rem'}
        color={'gray.500'}
        justifyContent={'space-between'}
      >
        <Flex
          w={'70%'}
          align={'center'}
          gap={2}
        >
          <Tooltip
            label={STATUS_SCHEME[status].text}
            fontSize={'sm'}
            color="white"
            bg={STATUS_SCHEME[status].color}
            openDelay={500}
            placement="top-start"
            hasArrow
          >
            <Box>
              <Label
                fontSize={'0.75rem'}
                p={'0.2rem 0.37rem'}
                borderRadius={'0.3125rem'}
                textAlign={'center'}
                cursor={'pointer'}
                bg={STATUS_SCHEME[status].color}
              >
                {CONSTANTS.EVENT_STATUS[status]}
              </Label>
            </Box>
          </Tooltip>
          <Link to={appPaths.eventDetail(eventId)}>
            <Tooltip
              openDelay={500}
              label={title}
              placement="top-start"
              bg={'white'}
              color={'gray.600'}
              fontSize={'xs'}
            >
              <Text
                noOfLines={1}
                fontSize={'1.5rem'}
                fontWeight={600}
                color={'gray.800'}
                _hover={{
                  textDecoration: 'underline',
                  textUnderlineOffset: '0.2rem',
                }}
              >
                {title}
              </Text>
            </Tooltip>
          </Link>
        </Flex>
        <Flex direction={'column'}>
          <Flex gap={'1.5rem'}>
            <Text>첨삭 종료일</Text>
            <Text>{formatDate(timeInfo.endDate)}</Text>
          </Flex>
        </Flex>
      </Flex>
      <Accordion
        mt={'2.37rem'}
        w={'full'}
        allowToggle
      >
        <AccordionItem
          border={'none'}
          px={0}
          w={'full'}
        >
          <Flex>
            <AccordionButton
              w={'7rem'}
              _hover={{ bg: 'none' }}
              p={0}
            >
              <Box
                w={'full'}
                as="span"
                flex={1}
                textAlign={'left'}
                fontSize={'0.875rem'}
              >
                {`신청이력서 ${resumes.length}건`}
              </Box>
              <AccordionIcon
                marginLeft={'0.37rem'}
                fontSize={'0.875rem'}
              />
            </AccordionButton>
            <Spacer />
            <Text
              fontSize={'sm'}
              fontWeight={500}
            >{`신청 인원 ${currentApplicantCount} / ${maximumCount}`}</Text>
          </Flex>
          <AccordionPanel p={0}>
            <Flex
              mt={'1rem'}
              direction={'column'}
              gap={'1.37rem'}
            >
              {resumes.length ? (
                resumes.map(({ menteeName, progressStatus, resumeId, resumeTitle, modifiedAt }) => (
                  <>
                    <ManagementPanel
                      key={uuidv4()}
                      url={
                        progressStatus === 'APPLY'
                          ? appPaths.feedbackResume({ resumeId, eventId })
                          : appPaths.feedbackComplete(resumeId, eventId)
                      }
                      icon={
                        <Icon
                          as={MdOutlineArticle}
                          color={'primary.900'}
                          w={'1.25rem'}
                        />
                      }
                      date={modifiedAt}
                      name={menteeName}
                      status={progressStatus}
                      title={resumeTitle}
                    />
                  </>
                ))
              ) : (
                <Flex
                  borderRadius={'0.3125rem'}
                  bg={'gray.200'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  w={'full'}
                  h={'4.375rem'}
                >
                  <Text>아직 신청받은 이력서가 없어요.</Text>
                </Flex>
              )}
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default EventItem;
