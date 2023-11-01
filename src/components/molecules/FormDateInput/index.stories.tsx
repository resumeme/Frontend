import type { Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import FormDateInput from './FormDateInput';
import { FormControl } from '../FormControl';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import { FormLabel } from '~/components/atoms/FormLabel';

const meta = {
  title: 'Resumeme/Components/FormDateInput',
  component: FormDateInput,
  tags: ['autodocs'],
} satisfies Meta<typeof FormDateInput>;

export default meta;

export const DefaultFormDateInput = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values: { [key: string]: string }) => {
    return new Promise(() => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      }, 3000);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BorderBox>
        <FormControl isInvalid={!!errors['endDate']}>
          <FormLabel isRequired={true}>첨삭 종료일</FormLabel>
          <FormDateInput
            name="endDate"
            w={'100%'}
            maxW={'386px'}
            register={{ ...register('endDate', { required: true }) }}
          />
        </FormControl>
      </BorderBox>
      <Button
        size={'md'}
        ml={'2.06rem'}
        mt={'2.62rem'}
        isLoading={isSubmitting}
        type="submit"
      >
        등록하기
      </Button>
    </form>
  );
};
