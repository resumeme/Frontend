import { FormErrorMessage, Flex, Textarea, TextareaProps } from '@chakra-ui/react';
import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';

type FormTextInputProps = {
  id: string;
  register: UseFormRegisterReturn;
  errors: FieldErrors;
} & TextareaProps;

const FormTextarea = ({ h = '26.75rem', id, register, errors, ...props }: FormTextInputProps) => {
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
      {errors[id]?.message && <FormErrorMessage>{errors[id]?.message as string}</FormErrorMessage>}
    </Flex>
  );
};

export default FormTextarea;
