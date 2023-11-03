import type { Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import FormTextarea from './FormTextarea';
import FormControl from '../FormControl/FormControl';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import { FormLabel } from '~/components/atoms/FormLabel';

const meta = {
  title: 'Resumeme/Components/FormTextarea',
  component: FormTextarea,
  tags: ['autodocs'],
} satisfies Meta<typeof FormTextarea>;

export default meta;

export const DefaultFormTextarea = () => {
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
        <FormControl
          spacing="1.63rem"
          isInvalid={!!errors['content']}
        >
          <FormLabel
            htmlFor={'content'}
            isRequired={true}
          >
            내용
          </FormLabel>
          <FormTextarea
            errors={errors}
            id="content"
            register={{ ...register('content', { required: true }) }}
            placeholder="이벤트에 대한 상세 내용을 입력해주세요."
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
