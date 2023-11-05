import { Input, InputProps, FormErrorMessage, Flex } from '@chakra-ui/react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type FormTextInputProps = {
  id: string;
  register: UseFormRegisterReturn;
  error?: Partial<FieldError>;
} & Omit<InputProps, 'type'>;

const FormTextInput = ({ id, register, error, ...props }: FormTextInputProps) => {
  return (
    <Flex
      direction={'column'}
      flexGrow={1}
    >
      <Input
        id={id}
        {...register}
        {...props}
      />
      {error && <FormErrorMessage>{error.message as string}</FormErrorMessage>}
    </Flex>
  );
};

export default FormTextInput;
