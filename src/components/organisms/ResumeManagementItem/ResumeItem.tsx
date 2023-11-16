import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Icon,
  IconButton,
  Input,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { MdOutlineArticle } from 'react-icons/md';
import { MdMoreVert } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import { ResumeWithEvents } from '~/types/event';
import { formatDate } from '~/utils/formatDate';
type ResumeItemProps = {
  resume: ResumeWithEvents;
};

const ResumeItem = ({
  resume: {
    events,
    resumeInfo: { modifiedAt, title },
  },
}: ResumeItemProps) => {
  return (
    <>
      <Flex>
        {modifiedAt && (
          <Text
            color={'gray.500'}
            as={'span'}
            fontSize={'0.75rem'}
          >{`${formatDate(modifiedAt)} 수정`}</Text>
        )}
        <Spacer />
        {/* //TODO: optionsbutton으로 변경 */}
        <IconButton
          size={''}
          aria-label="more"
          as={MdMoreVert}
          color={'gray.500'}
        />
      </Flex>
      <Text
        mt={'1.5rem'}
        fontSize={'1.5rem'}
        fontWeight={600}
        color={'gray.800'}
      >
        {title}
      </Text>
      <Flex
        mt={'1.75rem'}
        borderRadius={'0.3125rem'}
        p={'0.75rem 1rem'}
        bg={'gray.200'}
        alignItems={'center'}
        w={'full'}
        gap={'0.69rem'}
      >
        <Icon
          as={MdOutlineArticle}
          color={'gray.500'}
          w={'1.25rem'}
        />
        <Input
          h={'min-content'}
          p={0}
          m={0}
          border={0}
          placeholder="이력서에 대한 간단한 메모를 남겨보세요. ex) 12월 25일 제출 전까지 피드백 받기"
        />
      </Flex>
      <Accordion
        mt={'2.37rem'}
        w={'full'}
        allowToggle
      >
        <AccordionItem
          border={'none'}
          p={0}
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
                {`신청이력서 ${events.length}건`}
              </Box>
              <AccordionIcon
                marginLeft={'0.37rem'}
                fontSize={'0.875rem'}
              />
            </AccordionButton>
            <Spacer />
          </Flex>
          <AccordionPanel
            mt={'1rem'}
            p={0}
          >
            <Flex
              direction={'column'}
              gap={'1.37rem'}
            >
              {events.length ? (
                events.map((event) => (
                  <Text key={uuidv4()}>{event.eventInfo.endDate}</Text>
                  // <EventList
                  //   key={uuidv4()}
                  //   resume={resume}
                  // />
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
                  <Text>이력서에 대한 피드백이 없어요.</Text>
                </Flex>
              )}
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default ResumeItem;
