import { Flex, Icon, Link, Spacer, Text, Tooltip, useToast } from '@chakra-ui/react';
import { FiFileText } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Badge } from '~/components/atoms/Badge';
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
        description: '첨삭 반영은 첨삭이 완료된 후에 가능해요.',
        status: 'info',
      });
    }
  };

  const StatusStepper = () => {
    return (
      <Label
        fontSize={'0.75rem'}
        h={'max-content'}
        p={'0.2rem 0.37rem'}
        borderRadius={'0.3125rem'}
        bg={'gray.500'}
      >
        {CONSTANTS.RESUME_STATUS[status]}
      </Label>
    );
  };

  return (
    <>
      <Flex
        gap={'0.5rem'}
        justify={'center'}
        w={'full'}
      >
        <Flex
          w={'70%'}
          align={'center'}
          gap={2}
        >
          <Flex
            direction={'column'}
            justify={'space-between'}
          >
            <StatusStepper />
          </Flex>

          <Tooltip
            openDelay={500}
            label={title}
            fontSize={'sm'}
            color={'gray.700'}
            bg={'white'}
          >
            <Link
              type="button"
              w={'fit-content'}
              noOfLines={1}
              fontSize={'1.35rem'}
              fontWeight={600}
              color={'gray.800'}
              as={ReactRouterLink}
              to={appPaths.eventDetail(eventId)}
            >
              {title}
            </Link>
          </Tooltip>
        </Flex>
        <Flex>
          <Flex
            direction={'column'}
            justify={'center'}
          >
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
              justify={'flex-end'}
              gap={'0.5rem'}
            >
              <Badge
                type="mentee"
                py={0}
              >
                멘토
              </Badge>
              <Text
                fontSize={'0.875rem'}
                fontWeight={600}
              >
                {mentorName}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        mt={'1rem'}
        borderRadius={'0.3125rem'}
        p={'0.5rem 0.75rem'}
        bg={'gray.200'}
        alignItems={'center'}
        w={'full'}
        gap={'0.69rem'}
      >
        <Icon
          as={FiFileText}
          color={'gray.600'}
          boxSize={'1rem'}
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
            bg={status === 'COMPLETE' ? 'gray.600' : 'primary.800'}
            borderRadius={'0.3125rem'}
            fontSize={'0.75rem'}
            p={'0.25rem 0.5rem'}
            h={'fit-content'}
            w={'fit-content'}
            onClick={handleClick}
            _hover={{
              opacity: '0.65',
            }}
          >
            {status === 'COMPLETE' ? '확인' : '피드백 반영하기'}
          </Button>
        )}
      </Flex>
    </>
  );
};

export default FeedbackManagementItem;
