import { InputProps } from '@chakra-ui/react';
import { HTMLInputTypeAttribute } from 'react';
import { FieldErrors, FieldValues, RegisterOptions, UseFormRegisterReturn } from 'react-hook-form';

type FormInputSchema = {
  [key: string]: {
    placeholder: string;
    label: string;
    type?: HTMLInputTypeAttribute;
    errorTypes: RegisterOptions<FieldValues, string>;
  };
};

type FormInputProps = {
  isRequired?: boolean;
  id: string;
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  errors: FieldErrors;
  direction?: 'column' | 'row';
} & InputProps;

export type { FormInputSchema, FormInputProps };