import { FormErrorMessage, Flex, Textarea, TextareaProps } from '@chakra-ui/react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type FormTextInputProps = {
  id: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
} & TextareaProps;

const FormTextarea = ({ h = '26.75rem', id, register, error, ...props }: FormTextInputProps) => {
  return (
    <Flex
      direction={'column'}
      flexGrow={1}
    >
      <Textarea
        h={h}
        id={id}
        {...register}
        {...props}
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </Flex>
  );
};

export default FormTextarea;
