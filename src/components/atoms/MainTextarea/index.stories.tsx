import { FormControl, Flex } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import MainTextarea from './MainTextarea';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import FormLabel from '~/components/atoms/FormLabel/FormLabel';

const meta = {
  title: 'Resumeme/Components/MainTextarea',
  component: MainTextarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MainTextarea>;

export default meta;

export const DefaultMainTextarea = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values: { [key: string]: string }) => {
    return new Promise(() => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      }, 1000);
    });
  };

  const FORM = {
    LABEL: '자기소개',
    KEY: 'introduce',
    PLACEHOLDER: '내용을 10자 이하로 입력해주세요.',
    ERROR_MESSAGE: '10자 이하로 입력해주세요.',
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BorderBox>
        <FormControl
          isInvalid={!!errors[FORM.KEY]}
          key={FORM.KEY}
        >
          <Flex
            direction={'column'}
            gap={5}
            width={'500px'}
          >
            <FormLabel htmlFor={FORM.KEY}>{FORM.LABEL}</FormLabel>
            <MainTextarea
              id={FORM.KEY}
              register={{
                ...register(FORM.KEY, {
                  maxLength: { value: 10, message: FORM.ERROR_MESSAGE },
                }),
              }}
              errors={errors}
              placeholder={FORM.PLACEHOLDER}
            />
          </Flex>
        </FormControl>
      </BorderBox>
      <Button
        size="md"
        isLoading={isSubmitting}
        type="submit"
      >
        확인
      </Button>
    </form>
  );
};
