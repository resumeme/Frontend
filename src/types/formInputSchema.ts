import { FieldValues, RegisterOptions } from 'react-hook-form';

type formInputSchema = {
  [key: string]: {
    placeholder: string;
    label: string;
    errorTypes: RegisterOptions<FieldValues, string>;
  };
};

export type { formInputSchema };
