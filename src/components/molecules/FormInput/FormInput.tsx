import { Input, FormControl, FormLabel, FormErrorMessage, InputProps } from '@chakra-ui/react';
import React from 'react';
import { UseFormRegisterReturn, FieldErrors } from 'react-hook-form';

type FormInputProps = {
  id: string;
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  errors: FieldErrors;
} & InputProps;

const FormInput: React.FC<FormInputProps> = ({ id, label, placeholder, register, errors }) => {
  return (
    <FormControl isInvalid={!!errors[id]}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input
        id={id}
        placeholder={placeholder}
        {...register}
      />
      <FormErrorMessage>{errors[id]?.message as string}</FormErrorMessage>
    </FormControl>
  );
};

export default FormInput;
