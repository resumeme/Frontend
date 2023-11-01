import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import {
  FormControl,
  FormLabel,
  VStack,
  Input,
  FormErrorMessage,
  HStack,
  Text,
  Divider,
  Button as ChakraButton,
  Checkbox,
} from '@chakra-ui/react';
import React from 'react';
import {
  FieldErrors,
  FieldValues,
  UseFieldArrayRemove,
  UseFormRegister,
  useFieldArray,
  useForm,
  useWatch,
} from 'react-hook-form';
import { Button } from '~/components/atoms/Button';

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
      {/*FIXME 커스텀 Input, Label 컴포넌트 대체하기 */}
      <VStack spacing={'1.25rem'}>
        <FormControl isInvalid={Boolean(errors.companyName)}>
          <HStack>
            <FormLabel w={'9rem'}>회사명</FormLabel>
            <VStack
              flexGrow={1}
              alignItems={'start'}
            >
              <Input
                id="companyName"
                {...register('companyName', { required: '회사명을 입력하세요' })}
              />
              <FormErrorMessage>
                {errors.companyName && errors.companyName.message?.toString()}
              </FormErrorMessage>
            </VStack>
          </HStack>
        </FormControl>
        <FormControl isInvalid={Boolean(errors.term)}>
          <HStack>
            <FormLabel w={'9rem'}>재직기간</FormLabel>
            <VStack
              flexGrow={1}
              alignItems={'start'}
            >
              <Input
                id="careerStartDate"
                type="date"
                {...register('careerStartDate', {
                  required: '재직 시작일을 입력하세요.',
                  valueAsDate: true,
                })}
              />
              <FormErrorMessage>
                {errors.careerStartDate && errors.careerStartDate.message?.toString()}
              </FormErrorMessage>
            </VStack>
            <Divider
              w={'1rem'}
              borderColor={'gray.400'}
            />
            <VStack
              flexGrow={1}
              alignItems={'start'}
            >
              <Input
                id="endDate"
                type="date"
                disabled={isCurrentlyEmployed}
                {...register('endDate', {
                  required: '재직 종료일을 입력하세요.',
                  valueAsDate: true,
                })}
              />
              <FormErrorMessage>
                {errors.endDate && errors.endDate.message?.toString()}
              </FormErrorMessage>
            </VStack>
            <Checkbox
              id="isCurrentlyEmployed"
              {...register('isCurrentlyEmployed')}
            >
              재직 중
            </Checkbox>
          </HStack>
        </FormControl>
        <FormControl isInvalid={Boolean(errors.position)}>
          <HStack>
            <FormLabel w={'9rem'}>직무</FormLabel>
            <VStack
              flexGrow={1}
              alignItems={'start'}
            >
              <Input
                id="position"
                {...register('position', { required: '직무를 입력하세요.' })}
              />
              <FormErrorMessage>
                {errors.position && errors.position.message?.toString()}
              </FormErrorMessage>
            </VStack>
          </HStack>
        </FormControl>
        <FormControl isInvalid={Boolean(errors.skills)}>
          <HStack>
            <FormLabel w={'9rem'}>사용 스택</FormLabel>
            <VStack flexGrow={1}>
              <Input
                id="skills"
                {...register('skills')}
              />
              <FormErrorMessage>
                {errors.skills && errors.skills.message?.toString()}
              </FormErrorMessage>
            </VStack>
          </HStack>
        </FormControl>
        <FormControl isInvalid={Boolean(errors.others)}>
          <HStack>
            <FormLabel w={'9rem'}>기타 설명</FormLabel>
            <VStack flexGrow={1}>
              <Input
                id="others"
                {...register('others')}
              />
              <FormErrorMessage>
                {errors.others && errors.others.message?.toString()}
              </FormErrorMessage>
            </VStack>
          </HStack>
        </FormControl>
        {fields?.map((field, index) => (
          <DutyForm
            key={field.id}
            index={index}
            register={register}
            errors={errors}
            remove={remove}
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
  remove,
}: {
  key: string;
  index: number;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
  remove: UseFieldArrayRemove;
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
        <HStack>
          <FormLabel
            htmlFor="dutyTitle"
            w={'9rem'}
          >
            주요업무
          </FormLabel>
          <VStack flexGrow={1}>
            <Input
              id="dutyTitle"
              {...register(`duties.${index}.title`)}
            />
            <FormErrorMessage>
              {errors.dutyTitle && errors.dutyTitle.message?.toString()}
            </FormErrorMessage>
          </VStack>
        </HStack>
      </FormControl>
      <FormControl>
        <HStack>
          <FormLabel
            htmlFor="dutyTerm"
            w={'9rem'}
          >
            업무기간
          </FormLabel>
          <VStack flexGrow={1}>
            <Input
              id="dutyTerm"
              {...register(`duties.${index}.term`)}
            />
            <FormErrorMessage>
              {errors.dutyTerm && errors.dutyTerm.message?.toString()}
            </FormErrorMessage>
          </VStack>
        </HStack>
      </FormControl>
      <FormControl>
        <HStack>
          <FormLabel
            htmlFor="descriptions"
            w={'9rem'}
          >
            상세 내용
          </FormLabel>
          <VStack flexGrow={1}>
            {/*TODO 에디터로 대체 */}
            <Input
              id="descriptions"
              {...register(`duties.${index}.description`)}
            />
            <FormErrorMessage>
              {errors.descriptions && errors.descriptions.message?.toString()}
            </FormErrorMessage>
          </VStack>
        </HStack>
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
