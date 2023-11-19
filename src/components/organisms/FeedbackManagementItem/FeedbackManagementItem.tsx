import { Flex, Icon, Input, Spacer, Text } from '@chakra-ui/react';
import { BiCommentError } from 'react-icons/bi';
import { MdOutlineArticle } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Button } from '~/components/atoms/Button';
import { Label } from '~/components/atoms/Label';
import { appPaths } from '~/config/paths';
import { FeedbackResume } from '~/types/resume/resumeListItem';
import { formatDate } from '~/utils/formatDate';

type FeedbackManagementItemProps = {
  resume: FeedbackResume;
};

const FeedbackManagementItem = ({
  resume: { endDate, mentorName, resumeId, startDate, status, title, modifiedAt },
}: FeedbackManagementItemProps) => {
  const navigate = useNavigate();

  // TODO api 상태 정해지면 label 컬러 추가

  const handleClick = () => {
    if (status === 'CLOSE') {
      navigate(appPaths.resumeDetail(resumeId));
    } else {
      navigate(appPaths.resumeEdit(resumeId));
    }
  };

  return (
    <>
      {modifiedAt && (
        <Text
          color={'gray.500'}
          as={'span'}
          fontSize={'0.75rem'}
          mb={'1.75rem'}
        >{`${formatDate(modifiedAt)}`}</Text>
      )}
      <Flex
        align={'center'}
        gap={'1rem'}
      >
        <Text
          fontSize={'1.5rem'}
          fontWeight={600}
          color={'gray.800'}
        >
          {title}
        </Text>
        <Label
          fontSize={'0.75rem'}
          p={'0.25rem 0.37rem'}
          borderRadius={'0.3125rem'}
        >
          {status}
        </Label>
        <Spacer />
        <Text
          fontSize={'0.875rem'}
          color={'gray.500'}
        >
          {`${new Date(startDate).toLocaleDateString()} ~ ${new Date(
            endDate,
          ).toLocaleDateString()}`}
        </Text>
        <Flex
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
        <Input
          isTruncated
          flexShrink={1}
          h={'min-content'}
          p={0}
          m={0}
          border={0}
          placeholder="이력서에 대한 간단한 메모를 남겨보세요. ex) 12월 25일 제출 전까지 피드백 받기"
        />
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
            {status === 'CLOSE' ? '첨삭 내역 확인' : '수정하기'}
          </Button>
        )}
      </Flex>
    </>
  );
};

export default FeedbackManagementItem;
