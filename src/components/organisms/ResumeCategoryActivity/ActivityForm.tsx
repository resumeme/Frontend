import { VStack, Checkbox, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { postResumeActivity } from '~/api/resume/create/postResumeActivity';
import { patchResumeActivity } from '~/api/resume/edit/patchResumeActivity';
import { BorderBox } from '~/components/atoms/BorderBox';
import FormLabel from '~/components/atoms/FormLabel/FormLabel';
import { CategoryAddHeader } from '~/components/molecules/CategoryAddHeader';
import { ConfirmModal } from '~/components/molecules/ConfirmModal';
import { FormControl } from '~/components/molecules/FormControl';
import { FormTextarea } from '~/components/molecules/FormTextarea';
import { FormTextInput } from '~/components/molecules/FormTextInput';
import { SubmitButtonGroup } from '~/components/molecules/SubmitButtonGroup';
import { TermInput } from '~/components/molecules/TermInput';
import CONSTANTS from '~/constants';
import { useHandleFormState } from '~/hooks/useHandleFormState';
import { categoryKeys } from '~/queries/resume/categoryKeys.const';
import { useOptimisticPatchCategory } from '~/queries/resume/useOptimisticPatchCategory';
import { useOptimisticPostCategory } from '~/queries/resume/useOptimsticPostCategory';
import { Activity } from '~/types/activity';
import { FormComponentProps } from '~/types/props/formComponentProps';

const ActivityForm = ({
  defaultValues,
  isEdit = false,
  blockId,
  quitEdit,
}: FormComponentProps<Activity>) => {
  const { resumeId = '' } = useParams();

  const {
    setValue,
    control,
    watch,
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<Activity>({ defaultValues });

  const { isOpen, onClose, showForm, setShowForm, handleCancel, handleDeleteForm } =
    useHandleFormState(isDirty, reset);

  const { mutate: postActivity } = useOptimisticPostCategory({
    mutationFn: postResumeActivity,
    TARGET_QUERY_KEY: categoryKeys.activity(resumeId),
    onMutateSuccess: handleDeleteForm,
  });
  const { mutate: patchActivity } = useOptimisticPatchCategory({
    mutationFn: patchResumeActivity,
    TARGET_QUERY_KEY: categoryKeys.activity(resumeId),
    onMutateSuccess: quitEdit,
  });

  const onSubmit: SubmitHandler<Activity> = (body) => {
    if (!resumeId) {
      return;
    }
    if (!isEdit) {
      postActivity({ resumeId, body });
    } else if (isEdit && blockId) {
      patchActivity({ resumeId, blockId, body });
    }
  };

  const inProgress = watch('inProgress');

  useEffect(() => {
    if (inProgress) {
      setValue('endDate', '');
    }
  }, [inProgress, setValue]);

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
          categoryTitle="활동"
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
              <FormControl isInvalid={Boolean(errors.activityName)}>
                <FormLabel isRequired>활동명</FormLabel>
                <FormTextInput
                  id="activityName"
                  placeholder="활동명"
                  register={{ ...register('activityName', { required: '활동명을 입력하세요' }) }}
                  error={errors.activityName}
                />
              </FormControl>
              <Flex
                alignSelf={'start'}
                width={'100%'}
                gap={'1.63rem'}
              >
                <FormLabel isRequired>활동 기간</FormLabel>
                <TermInput
                  startDateName="startDate"
                  endDateName="endDate"
                  isEndDateDisabled={inProgress}
                  register={register}
                  errors={errors}
                  control={control}
                  isRequired={true}
                />
                <Checkbox
                  id="inProgress"
                  ml={'1rem'}
                  {...register('inProgress', {
                    onChange: (event) => {
                      if (event.target.checked) {
                        setValue('endDate', '');
                      }
                    },
                  })}
                >
                  진행 중
                </Checkbox>
              </Flex>
              <FormControl isInvalid={Boolean(errors.link)}>
                <FormLabel>링크</FormLabel>
                <FormTextInput
                  id="link"
                  placeholder="URL 입력"
                  register={{
                    ...register('link', {
                      pattern: {
                        value: CONSTANTS.URL_PATTERN,
                        message: '올바른 URL 형식이 아닙니다',
                      },
                    }),
                  }}
                  error={errors.link}
                />
              </FormControl>
              <FormControl isInvalid={Boolean(errors.description)}>
                <FormLabel htmlFor="description">상세 내용</FormLabel>
                <FormTextarea
                  resize="none"
                  autoComplete="off"
                  spellCheck="false"
                  h={'10rem'}
                  placeholder="활동에 대한 상세 내용을 입력해주세요."
                  id="description"
                  register={{ ...register('description') }}
                  error={errors.description}
                />
              </FormControl>
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

export default ActivityForm;
