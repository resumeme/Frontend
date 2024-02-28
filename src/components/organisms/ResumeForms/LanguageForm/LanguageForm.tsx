import { Flex, useDisclosure } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { postResumeLanguage } from '~/api/resume/create/postResumeLanguage';
import { patchResumeLanguage } from '~/api/resume/edit/patchResumeLanguage';
import FormLabel from '~/components/atoms/FormLabel/FormLabel';
import { ConfirmModal } from '~/components/molecules/ConfirmModal';
import { FormControl } from '~/components/molecules/FormControl';
import { FormTextInput } from '~/components/molecules/FormTextInput';
import { SubmitButtonGroup } from '~/components/molecules/SubmitButtonGroup';
import { categoryKeys } from '~/queries/resume/categoryKeys.const';
import { useOptimisticPatchCategory } from '~/queries/resume/useOptimisticPatchCategory';
import { useOptimisticPostCategory } from '~/queries/resume/useOptimsticPostCategory';
import { Language } from '~/types/language';
import { FormComponentProps } from '~/types/props/formComponentProps';

const LanguageForm = ({
  defaultValues,
  isEdit = false,
  blockId,
  onCancel,
}: FormComponentProps<Language>) => {
  const { resumeId = '' } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<Language>({ defaultValues });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { mutate: postLanguage } = useOptimisticPostCategory({
    mutationFn: postResumeLanguage,
    TARGET_QUERY_KEY: categoryKeys.language(resumeId),
    onMutateSuccess: onCancel,
  });
  const { mutate: patchLanguage } = useOptimisticPatchCategory({
    mutationFn: patchResumeLanguage,
    TARGET_QUERY_KEY: categoryKeys.language(resumeId),
    onMutateSuccess: onCancel,
  });

  const onSubmit: SubmitHandler<Language> = (body) => {
    if (!resumeId) {
      return;
    }
    if (!isEdit) {
      postLanguage({ resumeId, body });
    } else if (isEdit && blockId) {
      patchLanguage({ resumeId, blockId, body });
    }
  };

  return (
    <Flex
      direction={'column'}
      gap={'1rem'}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          justify={'center'}
          direction={'column'}
          gap={'1.25rem'}
        >
          <FormControl isInvalid={Boolean(errors.language)}>
            <FormLabel isRequired>언어</FormLabel>
            <FormTextInput
              id="language"
              placeholder="언어"
              register={{ ...register('language', { required: '언어를 입력하세요' }) }}
              error={errors.language}
            />
          </FormControl>
          <Flex
            alignSelf={'stretch'}
            gap={'3rem'}
          >
            <FormControl isInvalid={Boolean(errors.examName)}>
              <FormLabel isRequired>시험명</FormLabel>
              <FormTextInput
                id="examName"
                placeholder="시험명"
                register={{ ...register('examName', { required: '시험명을 입력하세요.' }) }}
                error={errors.examName}
              />
            </FormControl>
            <FormControl isInvalid={Boolean(errors.scoreOrGrade)}>
              <FormLabel isRequired>점수 및 등급</FormLabel>
              <FormTextInput
                id="scoreOrGrade"
                placeholder="점수 및 등급"
                register={{
                  ...register('scoreOrGrade', { required: '점수 및 등급을 입력해주세요' }),
                }}
                error={errors.scoreOrGrade}
              />
            </FormControl>
          </Flex>
          <ConfirmModal
            isOpen={isOpen}
            onClose={onClose}
            message="작성하던 내용이 있습니다. 작성을 그만하시겠습니까?"
            proceed={() => {
              reset();
              onCancel();
            }}
          />
          <SubmitButtonGroup
            onCancel={() => {
              if (isDirty) {
                onOpen();
              } else {
                onCancel();
              }
            }}
          />
        </Flex>
      </form>
    </Flex>
  );
};

export default LanguageForm;
