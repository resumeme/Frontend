import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Icon,
  Input,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { BiCommentError } from 'react-icons/bi';
import { MdOutlineArticle } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { ManagementPanel } from '~/components/molecules/ManagementPanel';
import { OptionsButton } from '~/components/molecules/OptionsButton';
import { Option } from '~/components/molecules/OptionsButton/OptionsButton';
import { useDeleteResume } from '~/queries/resume/delete/useDeleteResume';
import { ResumeWithEvents } from '~/types/event';
import { formatDate } from '~/utils/formatDate';

type ResumeItemProps = {
  resume: ResumeWithEvents;
};

const ResumeItem = ({
  resume: {
    events,
    resumeInfo: { modifiedAt, id, title },
  },
}: ResumeItemProps) => {
  const navigate = useNavigate();

  const { mutate: deleteResume } = useDeleteResume();

  const HandleEdit = () => {
    navigate(`/resume/${id}/edit`);
  };

  const HandleDelete = () => {
    // deleteResume({ resumeId: String(id) });
    deleteResume({ resumeId: '752' });
  };

  const options: Option[] = [
    { text: '수정하기', onClick: HandleEdit },
    //공개하기?추가예정
    { text: '삭제하기', onClick: HandleDelete },
  ];

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
        <OptionsButton options={options} />
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
                  <ManagementPanel
                    key={uuidv4()}
                    url={`/resume/${id}/comment`}
                    icon={
                      <Icon
                        color={'highlight.900'}
                        as={BiCommentError}
                        w={'1.25rem'}
                      />
                    }
                    name={event.mentorInfo.nickname}
                    status={event.eventInfo.status}
                    title={event.eventInfo.title}
                    date={modifiedAt}
                  />
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
