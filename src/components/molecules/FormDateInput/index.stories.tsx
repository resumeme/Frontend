import type { Meta } from '@storybook/react';
import FormDateInput from './FormDateInput';

const meta = {
  title: 'Resumeme/Components/FormDateInput',
  component: FormDateInput,
  tags: ['autodocs'],
} satisfies Meta<typeof FormDateInput>;

export default meta;

export const DefaultFormDateInput = () => {
  // const {
  //   control,
  //   handleSubmit,
  //   register,
  //   formState: { errors, isSubmitting },
  // } = useForm();

  // const onSubmit = (values: { [key: string]: string }) => {
  //   return new Promise(() => {
  //     setTimeout(() => {
  //       alert(JSON.stringify(values, null, 2));
  //     }, 3000);
  //   });
  // };

  return <></>;
};
