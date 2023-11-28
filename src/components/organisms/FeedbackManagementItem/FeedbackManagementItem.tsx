import { Flex, Icon, Link, Spacer, Text, Tooltip, useToast } from '@chakra-ui/react';
import { BiCommentError } from 'react-icons/bi';
import { MdOutlineArticle } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Button } from '~/components/atoms/Button';
import { Label } from '~/components/atoms/Label';
import { appPaths } from '~/config/paths';
import CONSTANTS from '~/constants';
import { FeedbackResume } from '~/types/resume/resumeListItem';

type FeedbackManagementItemProps = {
  resume: FeedbackResume;
};

const FeedbackManagementItem = ({
  resume: { endDate, mentorName, resumeId, startDate, status, title, eventId },
}: FeedbackManagementItemProps) => {
  const navigate = useNavigate();

  const toast = useToast();
  // TODO api 상태 정해지면 label 컬러 추가

  const handleClick = () => {
    if (status === 'COMPLETE') {
      navigate(appPaths.feedbackComplete(resumeId, eventId));
    } else if (status === 'FEEDBACK_COMPLETE') {
      navigate(appPaths.feedbackReflect(resumeId, eventId));
    } else {
      toast({
        duration: 2000,
        position: 'top',
        description: '첨삭 반영은 첨삭이 완료된 후에 가능해요.',
        status: 'info',
      });
    }
  };

  return (
    <>
      <Flex
        align={'center'}
        gap={'1rem'}
        w={'full'}
      >
        <Link
          type="button"
          w={'fit-content'}
          noOfLines={1}
          fontSize={'1.5rem'}
          fontWeight={600}
          color={'gray.800'}
          as={ReactRouterLink}
          to={appPaths.eventDetail(eventId)}
        >
          {title}
        </Link>
        <Label
          fontSize={'0.75rem'}
          p={'0.25rem 0.37rem'}
          borderRadius={'0.3125rem'}
        >
          {CONSTANTS.RESUME_STATUS[status]}
        </Label>
        <Spacer />
        <Text
          flexShrink={0}
          as={'span'}
          fontSize={'0.875rem'}
          color={'gray.500'}
        >
          {`${new Date(startDate).toLocaleDateString()} ~ ${new Date(
            endDate,
          ).toLocaleDateString()}`}
        </Text>
        <Flex
          flexShrink={0}
          align={'center'}
          gap={'0.5rem'}
        >
          <Icon
            color={'highlight.900'}
            as={BiCommentError}
            w={'1.25rem'}
          />
          <Text
            fontSize={'0.875rem'}
            fontWeight={600}
          >
            {mentorName}
          </Text>
        </Flex>
      </Flex>
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
        {/*TODO 주석해제 {resumeTitle && <Text>{resumeTitle}</Text>} */}
        <Tooltip
          maxW={'xl'}
          noOfLines={2}
          placement="bottom-start"
          //TODO -  이력서 제목이 들어갈 부분
          label={'내 이력서'}
          aria-label="tooltip"
          borderRadius={'xl'}
          fontSize={'sm'}
          bg={'gray.300'}
          color={'gray.600'}
        >
          <Text
            as={'span'}
            noOfLines={1}
          >
            {/* //TODO -  이력서 제목이 들어갈 부분 */}내 이력서
          </Text>
        </Tooltip>
        <Spacer />
        {status && (
          <Button
            bg={'gray.500'}
            borderRadius={'0.3125rem'}
            fontSize={'0.75rem'}
            p={'0.25rem 1.25rem'}
            h={'fit-content'}
            w={'fit-content'}
            onClick={handleClick}
          >
            {status === 'COMPLETE' ? '첨삭 내역 확인' : '수정하기'}
          </Button>
        )}
      </Flex>
    </>
  );
};

export default FeedbackManagementItem;
