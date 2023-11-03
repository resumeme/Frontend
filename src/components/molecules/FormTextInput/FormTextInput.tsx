import { Input, InputProps, FormErrorMessage, Flex } from '@chakra-ui/react';
import { FieldError, FieldErrors, UseFormRegisterReturn } from 'react-hook-form';

type FormTextInputProps = {
  id: string;
  register: UseFormRegisterReturn;
  error?: FieldError | FieldErrors;
} & Omit<InputProps, 'type'>;

const FormTextInput = ({ id, register, error, ...props }: FormTextInputProps) => {
  const errorMessage = error && 'message' in error ? (error.message as string) : '';

  return (
    <Flex
      direction={'column'}
      flexGrow={1}
    >
      <Input
        id={id}
        {...props}
        {...register}
      />
      {error && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </Flex>
  );
};

export default FormTextInput;
