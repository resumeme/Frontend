import { Textarea, TextareaProps, FormErrorMessage, Flex } from '@chakra-ui/react';
import { UseFormRegisterReturn, FieldErrors } from 'react-hook-form';

type MainTextareaProps = {
  id: string;
  register: UseFormRegisterReturn;
  errors?: FieldErrors;
} & Omit<TextareaProps, 'type'>;

const MainTextarea = ({ id, register, errors, ...props }: MainTextareaProps) => {
  return (
    <>
      <Flex
        direction={'column'}
        flexGrow={1}
      >
        <Textarea
          id={id}
          {...props}
          {...register}
          borderColor="gray.300"
          focusBorderColor="primary.900"
        />
        {errors && <FormErrorMessage>{errors![id]?.message as string}</FormErrorMessage>}
      </Flex>
    </>
  );
};

export default MainTextarea;
