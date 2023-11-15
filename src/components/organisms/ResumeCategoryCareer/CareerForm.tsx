import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import {
  VStack,
  Text,
  Divider,
  Button as ChakraButton,
  Checkbox,
  Flex,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import {
  Control,
  FieldErrors,
  UseFieldArrayRemove,
  UseFormRegister,
  useFieldArray,
  useForm,
  useWatch,
} from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { patchResumeCareer } from '~/api/resume/edit/patchResumeCareer';
import { BorderBox } from '~/components/atoms/BorderBox';
import FormLabel from '~/components/atoms/FormLabel/FormLabel';
import { CategoryAddHeader } from '~/components/molecules/CategoryAddHeader';
import { ConfirmModal } from '~/components/molecules/ConfirmModal';
import { DynamicTags } from '~/components/molecules/DynamicTags';
import { FormControl } from '~/components/molecules/FormControl';
import { FormTextInput } from '~/components/molecules/FormTextInput';
import { SubmitButtonGroup } from '~/components/molecules/SubmitButtonGroup';
import { TermInput } from '~/components/molecules/TermInput';
import { useHandleFormState } from '~/hooks/useHandleFormState';
import { useStringToArray } from '~/hooks/useStringToArray';
import { categoryKeys } from '~/queries/resume/categoryKeys.const';
import { usePostResumeCareer } from '~/queries/resume/create/usePostResumeCareer';
import { usePatchCategoryBlock } from '~/queries/resume/usePatchCategoryBlock';
import Career from '~/types/career';
import { FormComponentProps } from '~/types/props/formComponentProps';

const CareerForm = ({
  defaultValues,
  isEdit = false,
  blockId,
  quitEdit,
}: FormComponentProps<Career>) => {
  const {
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<Career>({ defaultValues });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'duties',
  });

  const { id: resumeId } = useParams() as { id: string };
  const { mutate: postCareerMutate, isSuccess: isPostSuccess } = usePostResumeCareer(resumeId);
  const { mutate: patchCareerMutate, isSuccess: isPatchSuccess } = usePatchCategoryBlock(
    patchResumeCareer,
    categoryKeys.career(resumeId),
  );
  const toast = useToast();
  const [skills, handleArrayChange, handleItemDelete] = useStringToArray();
  const onSubmit = handleSubmit((body) => {
    if (!resumeId) {
      return;
    }
    body.skills = skills;
    if (!isEdit) {
      postCareerMutate({ resumeId, resumeCareer: body });
    } else if (isEdit && blockId) {
      patchCareerMutate({ resumeId, blockId, body });
    }
    if (isPostSuccess || isPatchSuccess) {
      handleDeleteForm();
      toast({
        description: '성공적으로 저장되었습니다.',
      });
    }
    if (isPatchSuccess && quitEdit) {
      quitEdit();
    }
  });

  const defaultDutyData = {
    title: '',
    description: '',
    startDate: '',
    endDate: '',
  };

  const currentlyEmployed = useWatch({
    control,
    name: 'currentlyEmployed',
  });

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
          categoryTitle="업무경험"
          onAddItem={() => setShowForm(true)}
        />
      )}
      {showForm && (
        <BorderBox
          border={isEdit ? 'none' : undefined}
          p={isEdit ? 0 : '2rem'}
        >
          <form onSubmit={onSubmit}>
            <VStack spacing={'1.25rem'}>
              <FormControl isInvalid={Boolean(errors.companyName)}>
                <FormLabel isRequired>회사명</FormLabel>
                <FormTextInput
                  id="companyName"
                  register={{ ...register('companyName', { required: '회사명을 입력하세요' }) }}
                  error={errors.companyName}
                />
              </FormControl>
              <Flex
                alignSelf={'start'}
                width={'100%'}
                gap={'1.63rem'}
              >
                <FormLabel isRequired>재직기간</FormLabel>
                <TermInput
                  startDateName="careerStartDate"
                  endDateName="endDate"
                  isEndDateDisabled={currentlyEmployed}
                  register={register}
                  errors={errors}
                  control={control}
                  isRequired={true}
                />
                <Checkbox
                  id="currentlyEmployed"
                  ml={'1rem'}
                  {...register('currentlyEmployed', {
                    onChange: (event) => {
                      if (event.target.checked) {
                        setValue('endDate', '');
                      }
                    },
                  })}
                >
                  재직 중
                </Checkbox>
              </Flex>
              <FormControl isInvalid={Boolean(errors.position)}>
                <FormLabel isRequired>직무</FormLabel>
                <FormTextInput
                  id="position"
                  register={{ ...register('position', { required: '직무를 입력하세요.' }) }}
                  error={errors.position}
                />
              </FormControl>
              <FormControl>
                <FormLabel>사용 스택</FormLabel>
                <Flex
                  gap={2}
                  direction={'column'}
                  w={'full'}
                >
                  <FormTextInput
                    id="skills"
                    register={{ ...register('skills') }}
                    onKeyDown={handleArrayChange}
                  />
                  {skills.length > 0 && (
                    <DynamicTags
                      tagsArray={skills}
                      handleItemDelete={handleItemDelete}
                    />
                  )}
                </Flex>
              </FormControl>
              <FormControl>
                <FormLabel>기타 설명</FormLabel>
                <FormTextInput
                  id="careerContent"
                  register={{ ...register('careerContent') }}
                />
              </FormControl>
              {fields?.map((field, index) => (
                <DutyForm
                  key={field.id}
                  index={index}
                  register={register}
                  errors={errors}
                  remove={remove}
                  control={control}
                />
              ))}
              <AddDutyButton
                onClick={() => {
                  append(defaultDutyData);
                }}
              />
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

const DutyForm = ({
  index,
  errors,
  register,
  control,
  remove,
}: {
  index: number;
  errors: FieldErrors<Career>;
  register: UseFormRegister<Career>;
  remove: UseFieldArrayRemove;
  control: Control<Career>;
}) => {
  return (
    <React.Fragment>
      <Divider
        m={'1.5rem'}
        borderColor={'gray.300'}
      />
      <ChakraButton
        w={0}
        h={0}
        alignSelf={'self-end'}
        onClick={() => remove(index)}
      >
        <DeleteIcon />
      </ChakraButton>
      <FormControl isInvalid={Boolean(errors.duties && errors.duties[index]?.title)}>
        <FormLabel
          htmlFor="dutyTitle"
          isRequired
        >
          주요업무
        </FormLabel>
        <FormTextInput
          id="dutyTitle"
          register={{
            ...register(`duties.${index}.title`, { required: '주요 업무를 입력해주세요.' }),
          }}
          error={errors.duties && errors.duties[index]?.title}
        />
      </FormControl>
      <Flex
        alignSelf={'start'}
        width={'100%'}
        gap={'1.63rem'}
      >
        <FormLabel
          htmlFor="dutyTerm"
          isRequired
        >
          업무기간
        </FormLabel>
        <TermInput
          startDateName={`duties.${index}.startDate`}
          endDateName={`duties.${index}.endDate`}
          register={register}
          errors={errors}
          control={control}
          isRequired
        />
      </Flex>
      <FormControl>
        <FormLabel htmlFor="descriptions">상세 내용</FormLabel>
        {/*TODO 에디터로 대체 */}
        <FormTextInput
          id="descriptions"
          register={{ ...register(`duties.${index}.description`) }}
        />
      </FormControl>
    </React.Fragment>
  );
};

const AddDutyButton = ({ onClick }: { onClick: React.MouseEventHandler<HTMLButtonElement> }) => {
  const BG_COLOR = 'primary.100';
  const MAIN_COLOR = 'primary.900';
  return (
    <ChakraButton
      w={'100%'}
      bg={BG_COLOR}
      onClick={onClick}
      my={'2rem'}
    >
      <AddIcon
        fontSize={'xs'}
        marginRight={'1rem'}
        color={MAIN_COLOR}
      />
      <Text color={MAIN_COLOR}>주요 업무 추가</Text>
    </ChakraButton>
  );
};

export default CareerForm;
