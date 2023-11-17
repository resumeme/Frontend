import { Input, InputProps, FormErrorMessage, Flex } from '@chakra-ui/react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';

type FormDateInputProps = {
  type?: 'date' | 'datetime-local';
  register: UseFormRegisterReturn;
  isDisabled?: boolean;
  error?: FieldError;
  future?: boolean;
} & Omit<InputProps, 'type'>;

const FormDateInput = ({
  type = 'date',
  isDisabled = false,
  register,
  error,
  future = false,
  ...props
}: FormDateInputProps) => {
  return (
    <Flex
      w={'100%'}
      direction={'column'}
    >
      <Input
        min={future ? new Date().toISOString().slice(0, 16) : ''}
        type={type}
        disabled={isDisabled}
        {...register}
        {...props}
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </Flex>
  );
};

export default FormDateInput;
