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
} from '@chakra-ui/react';
import { MdOutlineArticle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { ManagementPanel } from '~/components/molecules/ManagementPanel';
import { appPaths } from '~/config/paths';
import { EventResume, EventTime } from '~/types/event/event';
import { formatDate } from '~/utils/formatDate';

type EventItemProps = {
  eventId: number;
  title: string;
  maximumCount: number;
  currentApplicantCount: number;
  timeInfo: Omit<EventTime, 'now'>;
  resumes: EventResume[];
};

const EventItem = ({
  eventId,
  currentApplicantCount,
  maximumCount,
  resumes,
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
        <Link to={appPaths.eventDetail(eventId)}>
          <Text
            fontSize={'1.5rem'}
            fontWeight={600}
            color={'gray.800'}
          >
            {title}
          </Text>
        </Link>
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
            <Text>{`신청 인원 ${currentApplicantCount} / ${maximumCount}`}</Text>
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
                        progressStatus === 'COMPLETE'
                          ? appPaths.feedbackComplete(resumeId, eventId)
                          : appPaths.feedbackResume({ resumeId, eventId })
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
