import { Box, Flex, Icon, Spacer, Text, useDisclosure } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdOutlineArticle } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '~/components/atoms/Button';
import { FormLabel } from '~/components/atoms/FormLabel';
import { FormControl } from '~/components/molecules/FormControl';
import { FormTextInput } from '~/components/molecules/FormTextInput';
import { Modal } from '~/components/molecules/Modal';
import { EditDeleteOptionsButton } from '~/components/molecules/OptionsButton';
import { appPaths } from '~/config/paths';
import { usePatchResumeMemo } from '~/queries/resume/create/usePatchResumeMemo';
import { useDeleteResume } from '~/queries/resume/delete/useDeleteResume';
import { MyResume } from '~/types/resume/resumeListItem';
import { formatDate } from '~/utils/formatDate';

type ResumeItemProps = {
  resume: MyResume;
};

type MemoFormType = {
  memo: string;
};

const ResumeItem = ({ resume: { id, modifiedAt, title, memo } }: ResumeItemProps) => {
  const navigate = useNavigate();
  const { mutate: deleteResume } = useDeleteResume();
  const { mutate: patchMemo } = usePatchResumeMemo();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const HandleEdit = () => {
    navigate(appPaths.resumeEdit(id));
  };

  const HandleDelete = () => {
    deleteResume({ resumeId: String(id) });
  };

  const MemoModal = () => {
    const {
      register,
      handleSubmit,
      getValues,
      formState: { errors },
    } = useForm<MemoFormType>();

    const onSubmit: SubmitHandler<MemoFormType> = (body) => {
      patchMemo({ resumeId: String(id), resumeMemo: body });
      onClose();
    };

    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex
            direction={'column'}
            w="full"
            gap={3}
          >
            <Flex
              w={'full'}
              direction={'column'}
            >
              <FormLabel>메모하기</FormLabel>
              <FormControl isInvalid={Boolean(errors.memo)}>
                <FormTextInput
                  placeholder="40자 이내로 간략하게 작성해주세요."
                  id="memo"
                  fontSize={'sm'}
                  color={'gray.700'}
                  defaultValue={memo}
                  register={{
                    ...register('memo', {
                      maxLength: {
                        value: 41,
                        message: `40자 이내로 입력해주세요. (${getValues('memo')?.length}/40자)`,
                      },
                    }),
                  }}
                  error={errors.memo}
                />
              </FormControl>
            </Flex>
            <Flex justify={'end'}>
              <Button
                size={'xs'}
                type="submit"
              >
                저장
              </Button>
            </Flex>
          </Flex>
        </form>
      </Modal>
    );
  };

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
        <EditDeleteOptionsButton
          onDelete={HandleDelete}
          onEdit={HandleEdit}
        />
      </Flex>
      <Link to={appPaths.resumeDetail(id)}>
        <Text
          noOfLines={1}
          mt={'1.5rem'}
          fontSize={'1.5rem'}
          fontWeight={600}
          color={'gray.800'}
        >
          {title}
        </Text>
      </Link>
      <Box
        cursor={'pointer'}
        onClick={onOpen}
      >
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
            as={MdOutlineArticle}
            color={'gray.500'}
            w={'1.25rem'}
          />
          <Text
            isTruncated
            flexShrink={1}
            h={'min-content'}
            p={0}
            m={0}
            border={0}
            color={'gray.400'}
            fontSize={'sm'}
          >
            {memo
              ? memo
              : '이력서에 대한 간단한 메모를 남겨보세요. ex. 12월 25일 제출 전까지 피드백 받기'}
          </Text>
        </Flex>
      </Box>
      <MemoModal />
    </>
  );
};

export default ResumeItem;
