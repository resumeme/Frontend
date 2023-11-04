import { Input, InputProps, FormErrorMessage, Flex } from '@chakra-ui/react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';

type FormDateInputProps = {
  type?: 'date' | 'datetime-local';
  register: UseFormRegisterReturn;
  isDisabled?: boolean;
  errors?: FieldError;
} & Omit<InputProps, 'type'>;

const FormDateInput = ({
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
      {errors && <FormErrorMessage>{errors && (errors.message as string)}</FormErrorMessage>}
    </Flex>
  );
};

export default FormDateInput;
