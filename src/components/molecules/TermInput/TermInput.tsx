import { VStack, Input, Divider, FormErrorMessage, HStack } from '@chakra-ui/react';
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';

type TermInputProps = {
  startDateName: string;
  endDateName: string;
  isEndDateDisabled?: boolean;
  isRequired?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

const TermInput = ({
  startDateName,
  endDateName,
  isEndDateDisabled = false,
  isRequired = false,
  register,
  errors,
}: TermInputProps) => {
  return (
    <HStack flexGrow={1}>
      <VStack
        flexGrow={1}
        alignItems={'start'}
      >
        <Input
          id={startDateName}
          type="date"
          {...register(startDateName, {
            required: isRequired ? '시작일을 입력하세요.' : false,
            valueAsDate: true,
          })}
        />
        <FormErrorMessage>
          {errors.startDateName && errors.startDateName.message?.toString()}
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
          id={endDateName}
          type="date"
          disabled={isEndDateDisabled}
          {...register(endDateName, {
            required: isRequired ? '종료일을 입력하세요.' : false,
            valueAsDate: true,
          })}
        />
        <FormErrorMessage>
          {errors.endDateName && errors.endDateName.message?.toString()}
        </FormErrorMessage>
      </VStack>
    </HStack>
  );
};

export default TermInput;
