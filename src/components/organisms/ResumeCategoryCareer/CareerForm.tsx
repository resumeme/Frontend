import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { VStack, HStack, Text, Divider, Button as ChakraButton, Checkbox } from '@chakra-ui/react';
import React from 'react';
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFieldArrayRemove,
  UseFormRegister,
  useFieldArray,
  useForm,
  useWatch,
} from 'react-hook-form';
import { Button } from '~/components/atoms/Button';
import FormLabel from '~/components/atoms/FormLabel/FormLabel';
import { FormControl } from '~/components/molecules/FormControl';
import { FormTextInput } from '~/components/molecules/FormTextInput';

import { TermInput } from '~/components/molecules/TermInput';

const CareerForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /**TODO remove 기능 추가하기 */
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'duties',
  });

  const onSubmit = handleSubmit((values) => {
    /**TODO api 호출해 저장하기 */
    console.log('values', values);
  });

  const defaultDutyData = {
    title: '',
    description: '',
    startDate: '',
    endDate: '',
  };

  const isCurrentlyEmployed = useWatch({
    control,
    name: 'isCurrentlyEmployed',
  });

  return (
    <form onSubmit={onSubmit}>
      <VStack spacing={'1.25rem'}>
        <FormControl isInvalid={Boolean(errors.companyName)}>
          <FormLabel w={'9rem'}>회사명</FormLabel>
          <FormTextInput
            id="companyName"
            register={{ ...register('companyName', { required: '회사명을 입력하세요' }) }}
            errors={errors}
          />
        </FormControl>
        <HStack>
          <FormLabel w={'9rem'}>재직기간</FormLabel>
          <TermInput
            startDateName="careerStartDate"
            endDateName="endDate"
            isEndDateDisabled={isCurrentlyEmployed}
            register={register}
            errors={errors}
            control={control}
            includeTime
            isRequired={true}
          />
          <Checkbox
            id="isCurrentlyEmployed"
            {...register('isCurrentlyEmployed')}
          >
            재직 중
          </Checkbox>
        </HStack>
        <FormControl isInvalid={Boolean(errors.position)}>
          <FormLabel w={'9rem'}>직무</FormLabel>
          <FormTextInput
            id="position"
            register={{ ...register('position', { required: '직무를 입력하세요.' }) }}
            errors={errors}
          />
        </FormControl>
        <FormControl isInvalid={Boolean(errors.skills)}>
          <FormLabel w={'9rem'}>사용 스택</FormLabel>
          <FormTextInput
            id="skills"
            register={{ ...register('skills') }}
            errors={errors}
          />
        </FormControl>
        <FormControl isInvalid={Boolean(errors.others)}>
          <FormLabel w={'9rem'}>기타 설명</FormLabel>
          <FormTextInput
            flexGrow={1}
            id="others"
            register={{ ...register('others') }}
            errors={errors}
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
        <HStack>
          <Button
            size={'sm'}
            type="submit"
          >
            저장
          </Button>
          <Button
            size={'sm'}
            variant={'cancel'}
          >
            취소
          </Button>
        </HStack>
      </VStack>
    </form>
  );
};

const DutyForm = ({
  key,
  index,
  errors,
  register,
  control,
  remove,
}: {
  key: string;
  index: number;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
  remove: UseFieldArrayRemove;
  control: Control;
}) => {
  return (
    <React.Fragment key={key}>
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
      <FormControl>
        <FormLabel
          htmlFor="dutyTitle"
          w={'9rem'}
        >
          주요업무
        </FormLabel>
        <FormTextInput
          id="dutyTitle"
          register={{ ...register(`duties.${index}.title`) }}
          errors={errors}
        />
      </FormControl>
      <FormControl>
        <FormLabel
          htmlFor="dutyTerm"
          w={'9rem'}
        >
          업무기간
        </FormLabel>
        <TermInput
          startDateName="startDate"
          endDateName="endDate"
          register={register}
          errors={errors}
          control={control}
        />
      </FormControl>
      <FormControl>
        <FormLabel
          htmlFor="descriptions"
          w={'9rem'}
        >
          상세 내용
        </FormLabel>
        {/*TODO 에디터로 대체 */}
        <FormTextInput
          id="descriptions"
          register={{ ...register(`duties.${index}.description`) }}
          errors={errors}
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
