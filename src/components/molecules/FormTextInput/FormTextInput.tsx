import { Input, InputProps, FormErrorMessage, Flex } from '@chakra-ui/react';
import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';

type FormTextInputProps = {
  id: string;
  register: UseFormRegisterReturn;
  errors?: FieldErrors;
} & Omit<InputProps, 'type'>;

const FormTextInput = ({ id, register, errors, ...props }: FormTextInputProps) => {
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
      {errors && <FormErrorMessage>{errors[id]?.message as string}</FormErrorMessage>}
    </Flex>
  );
};

export default FormTextInput;
