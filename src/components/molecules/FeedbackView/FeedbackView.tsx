import { Box, Flex, Text, Divider, Icon, Tooltip, useDisclosure } from '@chakra-ui/react';
import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';
import { HiPencilAlt, HiTrash } from 'react-icons/hi';
import { useParams } from 'react-router-dom';
import { ConfirmModal } from '../ConfirmModal';
import { FeedbackInput } from '../FeedbackInput';
import { BorderBox } from '~/components/atoms/BorderBox';
import useDeleteFeedbackComment from '~/queries/event/useDeleteFeedbackComment';
import usePatchFeedbackComment from '~/queries/event/usePatchFeedbackComment';
import { formatKoreanDateWithoutSeconds } from '~/utils/formatDate';
import '@uiw/react-markdown-preview/markdown.css';

type FeedbackViewProps = {
  content?: string;
  lastModifiedAt?: string;
  commentId?: number;
  isAuthorizedMentor?: boolean;
};

const LABELS = {
  EDIT: '수정하기',
  REMOVE: '삭제하기',
  HEADER: '첨삭',
};

const FeedbackView = ({
  content = `## 테스트
- **반갑습니다.**`,
  lastModifiedAt = '2023-11-15 17:17:09',
  commentId,
  isAuthorizedMentor = false,
}: FeedbackViewProps) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [value, setValue] = useState<string | undefined>(content);
  const { resumeId = '', eventId = '' } = useParams();
  const { mutate: patchCommentMutate } = usePatchFeedbackComment(resumeId, eventId);
  const { mutate: deleteCommentMutate } = useDeleteFeedbackComment(resumeId, eventId);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isEditToggle = () => {
    setIsEdit(!isEdit);
  };

  const handleValueChange = (newValue: string | undefined) => {
    if (newValue) {
      setValue(newValue);
    }
  };

  const handleModalOpen = () => {
    onOpen();
  };

  const handleEdit = () => {
    if (value && commentId) {
      const body = {
        content: value,
      };
      patchCommentMutate(
        { resumeId, eventId, commentId, body },
        {
          onSuccess: () => {
            setValue('');
            isEditToggle();
          },
        },
      );
    }
  };

  const handleRemove = () => {
    if (resumeId && eventId && commentId) {
      deleteCommentMutate({ resumeId, eventId, commentId });
    }
  };

  const fomattedDate = formatKoreanDateWithoutSeconds(lastModifiedAt);

  return (
    <>
      {isEdit ? (
        <FeedbackInput
          value={value}
          onChange={handleValueChange}
          onSaveClick={handleEdit}
          onCancelClick={isEditToggle}
        />
      ) : (
        <BorderBox p={0}>
          <Flex
            justify={'space-between'}
            borderWidth="1px"
            borderTopRadius="1.06rem"
            borderColor={'transparent'}
            bg={'gray.200'}
            px={5}
            py={2}
          >
            <Flex align={'flex-end'}>
              <Text
                fontSize={'sm'}
                fontWeight={'semibold'}
              >
                {fomattedDate}에 작성된 피드백
              </Text>
            </Flex>
            {isAuthorizedMentor && (
              <Flex
                gap={3}
                align={'end'}
              >
                <Box
                  as="button"
                  onClick={isEditToggle}
                >
                  <Tooltip
                    label={LABELS.EDIT}
                    placement="top"
                    hasArrow
                  >
                    <span>
                      <Icon
                        as={HiPencilAlt}
                        alignSelf={'flex-end'}
                      />
                    </span>
                  </Tooltip>
                </Box>
                <Box
                  as="button"
                  onClick={handleModalOpen}
                >
                  <Tooltip
                    label={LABELS.REMOVE}
                    placement="top"
                    hasArrow
                  >
                    <span>
                      <Icon as={HiTrash} />
                    </span>
                  </Tooltip>
                </Box>
              </Flex>
            )}
          </Flex>
          <Divider />
          <Flex
            px={5}
            py={3}
            direction={'column'}
          >
            <Box
              height={'full'}
              width={'full'}
              data-color-mode="light"
              px={1}
            >
              <MDEditor.Markdown
                source={content}
                style={{ whiteSpace: 'pre-wrap' }}
              />
            </Box>
            <Flex justify={'flex-end'}>
              <Text
                fontSize={'xs'}
                fontWeight={'light'}
                color={'gray.500'}
              >
                {fomattedDate}
              </Text>
            </Flex>
          </Flex>
          <ConfirmModal
            isOpen={isOpen}
            onClose={onClose}
            message="정말로 삭제하시겠습니까?"
            proceed={handleRemove}
          />
        </BorderBox>
      )}
    </>
  );
};

export default FeedbackView;
