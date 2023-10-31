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
} from '@chakra-ui/react';
import { Button as ChakraButton } from '@chakra-ui/react';
import React from 'react';
import {
  FieldErrors,
  FieldValues,
  UseFieldArrayRemove,
  UseFormRegister,
  useFieldArray,
  useForm,
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

  return (
    <form onSubmit={onSubmit}>
      {/*FIXME 커스텀 Input, Label 컴포넌트 대체하기 */}
      <VStack spacing={'1.25rem'}>
        <FormControl isInvalid={Boolean(errors.companyName)}>
          <HStack>
            <FormLabel
              htmlFor="companyName"
              w={'9rem'}
            >
              회사명
            </FormLabel>
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
            <FormLabel
              htmlFor="term"
              w={'9rem'}
            >
              재직기간
            </FormLabel>
            <VStack
              flexGrow={1}
              alignItems={'start'}
            >
              <Input
                id="term"
                type="date"
                {...register('term', { required: '재직기간을 입력하세요.' })}
              />
              <FormErrorMessage>{errors.term && errors.term.message?.toString()}</FormErrorMessage>
            </VStack>
          </HStack>
        </FormControl>
        <FormControl isInvalid={Boolean(errors.position)}>
          <HStack>
            <FormLabel
              htmlFor="position"
              w={'9rem'}
            >
              직무
            </FormLabel>
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
            <FormLabel
              htmlFor="skills"
              w={'9rem'}
            >
              사용 스택
            </FormLabel>
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
            <FormLabel
              htmlFor="others"
              w={'9rem'}
            >
              기타 설명
            </FormLabel>
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
      <DeleteIcon
        alignSelf={'self-end'}
        onClick={() => remove(index)}
      />
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
