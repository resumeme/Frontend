import type { Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import FormTextInput from './FormTextInput';
import FormControl from '../FormControl/FormControl';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import { FormLabel } from '~/components/atoms/FormLabel';

const meta = {
  title: 'Resumeme/Components/FormTextInput',
  component: FormTextInput,
  tags: ['autodocs'],
} satisfies Meta<typeof FormTextInput>;

export default meta;

export const DefaultFormTextInput = () => {
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
        <FormControl isInvalid={!!errors['title']}>
          <FormLabel
            htmlFor={'title'}
            isRequired={true}
          >
            이벤트 제목
          </FormLabel>

          <FormTextInput
            w={'100%'}
            id="title"
            register={{ ...register('title', { required: true }) }}
            errors={errors}
            placeholder="이벤트 제목을 입력해주세요."
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
