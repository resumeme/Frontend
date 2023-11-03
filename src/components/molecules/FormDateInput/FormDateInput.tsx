import { Input, InputProps, FormErrorMessage, Flex } from '@chakra-ui/react';
import { UseFormRegisterReturn, FieldErrors } from 'react-hook-form';

type FormDateInputProps = {
  name: string;
  type?: 'date' | 'datetime-local';
  register: UseFormRegisterReturn;
  isDisabled?: boolean;
  errors?: FieldErrors;
} & Omit<InputProps, 'type'>;

const FormDateInput = ({
  name,
  type = 'date',
  isDisabled = false,
  register,
  errors,
  ...props
}: FormDateInputProps) => {
  return (
    <Flex
      w={'100%'}
      direction={'column'}
    >
      <Input
        type={type}
        disabled={isDisabled}
        {...register}
        {...props}
      />
      {errors && (
        <FormErrorMessage>{errors[name] && errors[name]?.message?.toString()}</FormErrorMessage>
      )}
    </Flex>
  );
};

export default FormDateInput;
