import { VStack, HStack, Flex, useToast } from '@chakra-ui/react';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { patchResumeLanguage } from '~/api/resume/edit/patchResumeLanguage';
import { BorderBox } from '~/components/atoms/BorderBox';
import FormLabel from '~/components/atoms/FormLabel/FormLabel';
import { CategoryAddHeader } from '~/components/molecules/CategoryAddHeader';
import { ConfirmModal } from '~/components/molecules/ConfirmModal';
import { FormControl } from '~/components/molecules/FormControl';
import { FormTextInput } from '~/components/molecules/FormTextInput';
import { SubmitButtonGroup } from '~/components/molecules/SubmitButtonGroup';
import { useHandleFormState } from '~/hooks/useHandleFormState';
import { categoryKeys } from '~/queries/resume/categoryKeys.const';
import { usePostResumeLanguage } from '~/queries/resume/create/usePostResumeLanguage';
import { usePatchCategoryBlock } from '~/queries/resume/usePatchCategoryBlock';
import { Language } from '~/types/language';
import { FormComponentProps } from '~/types/props/formComponentProps';

const LanguageForm = ({
  defaultValues,
  isEdit = false,
  blockId,
  quitEdit,
}: FormComponentProps<Language>) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<Language>({ defaultValues });

  const { id: resumeId } = useParams() as { id: string };
  const { mutate: postLanguageMutate, isSuccess } = usePostResumeLanguage(resumeId);
  const { mutate: patchResumeLanguageMutate, isSuccess: isPatchSuccess } = usePatchCategoryBlock(
    patchResumeLanguage,
    categoryKeys.award(resumeId),
  );
  const toast = useToast();
  const onSubmit: SubmitHandler<Language> = (body) => {
    if (!resumeId) {
      return;
    }
    if (!isEdit) {
      postLanguageMutate({ resumeId, resumeLanguage: body });
    } else if (isEdit && blockId) {
      patchResumeLanguageMutate({ resumeId, blockId, body });
    }
    if (isSuccess || isPatchSuccess) {
      handleDeleteForm();
      toast({
        description: '성공적으로 저장되었습니다.',
      });
    }
  };

  const { isOpen, onClose, showForm, setShowForm, handleCancel, handleDeleteForm } =
    useHandleFormState(isDirty, reset);

  useEffect(() => {
    if (isEdit) {
      setShowForm(true);
    }
  }, [isEdit, setShowForm]);

  return (
    <Flex
      direction={'column'}
      gap={'1rem'}
    >
      {!isEdit && (
        <CategoryAddHeader
          categoryTitle="외국어"
          onAddItem={() => setShowForm(true)}
        />
      )}
      {showForm && (
        <BorderBox
          border={isEdit ? 'none' : undefined}
          p={isEdit ? 0 : '2rem'}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={'1.25rem'}>
              <FormControl isInvalid={Boolean(errors.language)}>
                <FormLabel isRequired>언어</FormLabel>
                <FormTextInput
                  id="language"
                  register={{ ...register('language', { required: '언어를 입력하세요' }) }}
                  error={errors.language}
                />
              </FormControl>
              <HStack
                alignSelf={'stretch'}
                spacing={'3rem'}
              >
                <FormControl isInvalid={Boolean(errors.examName)}>
                  <FormLabel isRequired>시험명</FormLabel>
                  <FormTextInput
                    id="examName"
                    register={{ ...register('examName', { required: '시험명을 입력하세요.' }) }}
                    error={errors.examName}
                  />
                </FormControl>
                <FormControl isInvalid={Boolean(errors.scoreOrGrade)}>
                  <FormLabel isRequired>점수 및 등급</FormLabel>
                  <FormTextInput
                    id="scoreOrGrade"
                    register={{
                      ...register('scoreOrGrade', { required: '점수 및 등급을 입력해주세요' }),
                    }}
                    error={errors.scoreOrGrade}
                  />
                </FormControl>
              </HStack>
              <ConfirmModal
                isOpen={isOpen}
                onClose={onClose}
                message="작성하던 내용이 있습니다. 작성을 그만하시겠습니까?"
                proceed={() => {
                  handleDeleteForm();
                  if (isEdit && quitEdit) quitEdit();
                }}
              />
              <SubmitButtonGroup
                onCancel={() => {
                  handleCancel();
                  if (isEdit && quitEdit) quitEdit();
                }}
              />
            </VStack>
          </form>
        </BorderBox>
      )}
    </Flex>
  );
};

export default LanguageForm;
