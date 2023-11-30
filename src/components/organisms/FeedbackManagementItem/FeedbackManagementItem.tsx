import { Box, Flex, Icon, Link, Spacer, Text, Tooltip, useToast } from '@chakra-ui/react';
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

const STATUS_SCHEME = {
  APPLY: { color: 'teal.600', text: '멘토의 피드백을 기다리는 중이에요. (1/3)' },
  FEEDBACK_COMPLETE: {
    color: 'primary.900',
    text: '멘토의 피드백이 완료되었어요. 확인 후 수정해보세요. (2/3)',
  },
  COMPLETE: { color: 'gray.500', text: '수정 사항이 반영되고 이벤트가 종료되었어요. (3/3)' },
  REJECT: { color: 'red.600', text: '신청이 반려되었어요. 반려 사유를 확인하세요.' },
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
        description: '피드백 반영은 피드백이 완료된 후에 가능해요.',
        status: 'info',
      });
    }
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
                {CONSTANTS.RESUME_STATUS[status]}
              </Label>
            </Box>
          </Tooltip>

          <Tooltip
            openDelay={500}
            label={title}
            fontSize={'sm'}
            placement="top-start"
            color={'gray.700'}
            bg={'white'}
          >
            <Link
              type="button"
              w={'fit-content'}
              noOfLines={1}
              fontSize={'1.3rem'}
              fontWeight={600}
              color={'gray.800'}
              as={ReactRouterLink}
              to={appPaths.eventDetail(eventId)}
            >
              {title}
            </Link>
          </Tooltip>
        </Flex>
        <Flex
          direction={'column'}
          align={'space-between'}
        >
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
        {status !== 'REJECT' && status !== 'APPLY' && (
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
            {status === 'COMPLETE' ? '피드백 내역 확인' : '피드백 반영하기'}
          </Button>
        )}
      </Flex>
    </>
  );
};

export default FeedbackManagementItem;
