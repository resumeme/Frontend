import { Flex, VStack, useToast } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { patchResumeTraining } from '~/api/resume/edit/patchResumeTraining';
import { BorderBox } from '~/components/atoms/BorderBox';
import { FormLabel } from '~/components/atoms/FormLabel';
import { CategoryAddHeader } from '~/components/molecules/CategoryAddHeader';
import { ConfirmModal } from '~/components/molecules/ConfirmModal';
import { FormControl } from '~/components/molecules/FormControl';
import { FormDateInput } from '~/components/molecules/FormDateInput';
import { FormTextarea } from '~/components/molecules/FormTextarea';
import { FormTextInput } from '~/components/molecules/FormTextInput';
import { SubmitButtonGroup } from '~/components/molecules/SubmitButtonGroup';
import { useHandleFormState } from '~/hooks/useHandleFormState';
import { categoryKeys } from '~/queries/resume/categoryKeys.const';
import { usePostResumeTraining } from '~/queries/resume/create/usePostResumeTraining';
import { usePatchCategoryBlock } from '~/queries/resume/usePatchCategoryBlock';
import { FormComponentProps } from '~/types/props/formComponentProps';
import { Training } from '~/types/training';

const TrainingForm = ({
  defaultValues,
  isEdit = false,
  blockId,
  quitEdit,
}: FormComponentProps<Training>) => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<Training>({ defaultValues });

  const { id: resumeId } = useParams() as { id: string };
  const { mutate: postTrainingMutate, isSuccess: isPostSuccess } = usePostResumeTraining(resumeId);
  const { mutate: patchTrainingMutate, isSuccess: isPatchSuccess } = usePatchCategoryBlock(
    patchResumeTraining,
    categoryKeys.award(resumeId),
  );

  const toast = useToast();
  const onSubmit: SubmitHandler<Training> = (body) => {
    if (!resumeId) {
      return;
    }
    if (!isEdit) {
      postTrainingMutate({ resumeId, resumeTraining: body });
    } else if (isEdit && blockId) {
      patchTrainingMutate({ resumeId, blockId, body });
    }
    if (isPostSuccess || isPatchSuccess) {
      handleDeleteForm();
      toast({
        description: '성공적으로 저장되었습니다.',
      });
    }
    if (isPatchSuccess) {
      if (quitEdit) {
        quitEdit();
      }
    }
  };

  const { isOpen, onClose, showForm, setShowForm, handleCancel, handleDeleteForm } =
    useHandleFormState(isDirty, reset);
  return (
    <Flex
      direction={'column'}
      gap={'1rem'}
    >
      {!isEdit && (
        <CategoryAddHeader
          categoryTitle="교육"
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
              <Flex
                gap={'2rem'}
                alignSelf={'start'}
              >
                <FormControl isInvalid={Boolean(errors.organization)}>
                  <FormLabel
                    htmlFor="organization"
                    isRequired
                  >
                    학교/기관
                  </FormLabel>
                  <FormTextInput
                    w={'12rem'}
                    placeholder="OO학교"
                    id="organization"
                    register={{
                      ...register('organization', { required: '필수 입력값입니다.' }),
                    }}
                    error={errors.organization}
                  />
                </FormControl>
                <FormControl isInvalid={Boolean(errors.major)}>
                  <FormLabel
                    w={'fit-content'}
                    htmlFor="major"
                    isRequired
                  >
                    전공
                  </FormLabel>
                  <FormTextInput
                    w={'12rem'}
                    placeholder="컴퓨터공학"
                    id="major"
                    register={{
                      ...register('major', { required: '필수 입력값입니다.' }),
                    }}
                    error={errors.major}
                  />
                </FormControl>
                <FormControl isInvalid={Boolean(errors.degree)}>
                  <FormLabel
                    w={'fit-content'}
                    htmlFor="degree"
                    isRequired
                  >
                    학위
                  </FormLabel>
                  <FormTextInput
                    placeholder="학사"
                    id="degree"
                    register={{
                      ...register('degree', { required: '필수 입력값입니다.' }),
                    }}
                    error={errors.degree}
                  />
                </FormControl>
              </Flex>
              <Flex
                gap={'2rem'}
                alignSelf={'start'}
              >
                <FormControl
                  w={'fit-content'}
                  isInvalid={Boolean(errors.admissionDate)}
                >
                  <FormLabel
                    isRequired
                    htmlFor="admissionDate"
                  >
                    입학
                  </FormLabel>
                  <FormDateInput
                    w={'12rem'}
                    register={{
                      ...register('admissionDate', {
                        required: '필수 입력값입니다.',
                        max: {
                          value: new Date().toISOString().slice(0, 16),
                          message: '유효한 입학 날짜를 입력해주세요.',
                        },
                      }),
                    }}
                    error={errors.admissionDate}
                  />
                </FormControl>
                <FormControl isInvalid={Boolean(errors.graduationDate)}>
                  <FormLabel w={'fit-content'}>졸업(예정)</FormLabel>
                  <FormDateInput
                    maxW={'12rem'}
                    register={{
                      ...register('graduationDate', {
                        min: {
                          value: watch('admissionDate'),
                          message: '유효한 날짜를 입력해 주세요.',
                        },
                      }),
                    }}
                    error={errors.graduationDate}
                  />
                </FormControl>
              </Flex>
              <Flex
                gap={'3rem'}
                alignSelf={'start'}
              >
                <FormControl
                  w={'fit-content'}
                  isInvalid={Boolean(errors.gpa)}
                >
                  <FormLabel htmlFor="gpa">학점</FormLabel>
                  <FormTextInput
                    w={'6rem'}
                    type={'number'}
                    step={0.01}
                    placeholder="4.5"
                    id="gpa"
                    register={{
                      ...register('gpa', {
                        valueAsNumber: true,
                        max: { value: 4.5, message: '최대 학점은 4.5입니다.' },
                        min: { value: 0, message: '올바른 학점을 입력해주세요.' },
                      }),
                    }}
                    error={errors.gpa}
                  />
                </FormControl>
                <FormControl isInvalid={Boolean(errors.maxGpa)}>
                  <FormLabel htmlFor="maxGpa">최대 학점</FormLabel>
                  <FormTextInput
                    w={'6rem'}
                    type="number"
                    step={0.01}
                    placeholder="4.5"
                    id="maxGpa"
                    register={{
                      ...register('maxGpa', {
                        valueAsNumber: true,
                        max: { value: 4.5, message: '최대 학점은 4.5입니다.' },
                        min: { value: 0, message: '올바른 학점을 입력해주세요.' },
                      }),
                    }}
                    error={errors.maxGpa}
                  />
                </FormControl>
              </Flex>
              <FormControl isInvalid={Boolean(errors.explanation)}>
                <FormLabel htmlFor="explanation">기타</FormLabel>
                <FormTextarea
                  resize="none"
                  autoComplete="off"
                  spellCheck="false"
                  h={'16.625rem'}
                  placeholder="내용을 입력해주세요."
                  id="projectContent"
                  register={{ ...register('explanation') }}
                  error={errors.explanation}
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

export default TrainingForm;
