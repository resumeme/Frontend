import { VStack, Checkbox, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { BorderBox } from '~/components/atoms/BorderBox';
import FormLabel from '~/components/atoms/FormLabel/FormLabel';
import { CategoryAddHeader } from '~/components/molecules/CategoryAddHeader';
import { ConfirmModal } from '~/components/molecules/ConfirmModal';
import { FormControl } from '~/components/molecules/FormControl';
import { FormTextarea } from '~/components/molecules/FormTextarea';
import { FormTextInput } from '~/components/molecules/FormTextInput';
import { SubmitButtonGroup } from '~/components/molecules/SubmitButtonGroup';

import { TermInput } from '~/components/molecules/TermInput';
import { useHandleFormState } from '~/hooks/useHandleFormState';
import { usePostResumeActivity } from '~/queries/resume/create/usePostResumeActivity';
import { Activity } from '~/types/activity';

const ActivityForm = () => {
  const URL_PATTERN = /^(https?:\/\/)?([\w.-]+\.\w{2,})([\w\W]*)$/;

  const {
    setValue,
    control,
    watch,
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<Activity>({
    //Todo: useQuery 관련 작업 예상
    // defaultValues: {
    //   activityName: '활동1',
    //   startDate: '2023-11-05',
    //   endDate: '2023-11-10',
    //   inProgress: false,
    //   link: 'https://resumeme.kro.kr',
    //   description: '활동 설명',
    // },
  });

  const { id: resumeId } = useParams();
  const { mutate: postActivityMutate } = usePostResumeActivity();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Activity> = (resumeActivity: Activity) => {
    if (!resumeId) {
      /**TODO - 토스트 대체! */
      alert('존재하지 않는 이력서입니다.');
      navigate(-1);
      return;
    }
    postActivityMutate({ resumeId, resumeActivity });
    handleDeleteForm();
  };

  const inProgress = watch('inProgress');

  useEffect(() => {
    if (inProgress) {
      setValue('endDate', '');
    }
  }, [inProgress, setValue]);

  const { isOpen, onClose, showForm, setShowForm, handleCancel, handleDeleteForm } =
    useHandleFormState(isDirty, reset);
  return (
    <Flex
      direction={'column'}
      gap={'1rem'}
    >
      <CategoryAddHeader
        categoryTitle="활동"
        onAddItem={() => setShowForm(true)}
      />
      {showForm && (
        <BorderBox variant={'wide'}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={'1.25rem'}>
              <FormControl isInvalid={Boolean(errors.activityName)}>
                <FormLabel isRequired>활동명</FormLabel>
                <FormTextInput
                  id="activityName"
                  placeholder="활동명을 입력하세요"
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
                  placeholder="https://"
                  register={{
                    ...register('link', {
                      pattern: {
                        value: URL_PATTERN,
                        message: '올바른 URL 형식이 아닙니다',
                      },
                    }),
                  }}
                  error={errors.link}
                />
              </FormControl>
              <FormControl isInvalid={Boolean(errors.description)}>
                <FormLabel htmlFor="description">설명</FormLabel>
                <FormTextarea
                  resize="none"
                  autoComplete="off"
                  spellCheck="false"
                  h={'16.625rem'}
                  placeholder="내용을 입력해주세요."
                  id="description"
                  register={{ ...register('description') }}
                  error={errors.description}
                />
              </FormControl>
              <ConfirmModal
                isOpen={isOpen}
                onClose={onClose}
                message="작성하던 내용이 있습니다. 작성을 그만하시겠습니까?"
                proceed={handleDeleteForm}
              />
              <SubmitButtonGroup onCancel={handleCancel} />
            </VStack>
          </form>
        </BorderBox>
      )}
    </Flex>
  );
};

export default ActivityForm;
