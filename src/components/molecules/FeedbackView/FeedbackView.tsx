import { Box, Flex, Text, Icon, Image, Tooltip, useDisclosure, Divider } from '@chakra-ui/react';
import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';
import { HiPencilAlt, HiTrash } from 'react-icons/hi';
import { useParams } from 'react-router-dom';
import { ConfirmModal } from '../ConfirmModal';
import { FeedbackInput } from '../FeedbackInput';
import { Label } from '~/components/atoms/Label';
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
  BLOCK: '피드백',
};

const BGCOLOR = '#fbfffc';

const FeedbackView = ({
  content = ``,
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
            setValue(value);
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
        <>
          <Box
            role="group"
            borderTop={'1px solid'}
            borderBottom={'1px solid'}
            // borderRadius={'lg'}
            borderColor={'gray.300'}
            position={'relative'}
            bg={BGCOLOR}
            mt={8}
          >
            <Flex
              w={'full'}
              position="absolute"
              top={'-12px'}
              // left={'-5px'}
              justify={'space-between'}
              pr={2}
              pl={1}
            >
              <Flex
                gap={2}
                align={'center'}
                justify={'center'}
                bg={'white'}
                rounded={'full'}
                border={'1px solid'}
                borderColor={'gray.300'}
                borderRadius={'full'}
                pr={2}
                pl={1}
                py={1}
              >
                <Tooltip
                  label={'카키디'}
                  placement="top"
                  hasArrow
                >
                  <Image
                    borderRadius="full"
                    boxSize="24px"
                    /* FIXME 멘토 아이콘 */
                    src="https://bit.ly/dan-abramov"
                  />
                </Tooltip>
                <Text
                  fontSize={'xs'}
                  fontWeight={'bold'}
                  color={'gray.800'}
                >
                  {/* FIXME 멘토 닉네임 */}
                  카키디
                </Text>
              </Flex>
              {isAuthorizedMentor ? (
                <Flex
                  gap={3}
                  align={'center'}
                  justify={'center'}
                  rounded={'full'}
                  bg={'white'}
                  border={'1px'}
                  borderColor={'gray.300'}
                  borderRadius={'full'}
                  px={3}
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
                      <Flex>
                        <Icon as={HiPencilAlt} />
                      </Flex>
                    </Tooltip>
                  </Box>
                  <Divider
                    borderColor={'gray.400'}
                    orientation="vertical"
                    h={'60%'}
                  />
                  <Box
                    as="button"
                    onClick={handleModalOpen}
                  >
                    <Tooltip
                      label={LABELS.REMOVE}
                      placement="top"
                      hasArrow
                    >
                      <Flex>
                        <Icon as={HiTrash} />
                      </Flex>
                    </Tooltip>
                  </Box>
                </Flex>
              ) : (
                <Label
                  py={0}
                  bg={'white'}
                  border={'1px solid'}
                  borderColor={'gray.300'}
                  fontSize={'2xs'}
                  color={'primary.900'}
                >
                  {LABELS.BLOCK}
                </Label>
              )}
            </Flex>
            <Flex
              direction={'column'}
              px={2}
              pb={2}
              pt={4}
            >
              <Box
                height={'full'}
                width={'full'}
                data-color-mode="light"
                p={4}
                my={2}
              >
                <MDEditor.Markdown
                  source={content}
                  style={{ whiteSpace: 'pre-wrap', backgroundColor: BGCOLOR }}
                />
              </Box>
              <Flex
                justify={'flex-end'}
                mr={1}
              >
                <Text
                  fontSize={'2xs'}
                  fontWeight={'light'}
                  color={'gray.400'}
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
          </Box>
        </>
      )}
    </>
  );
};

export default FeedbackView;
