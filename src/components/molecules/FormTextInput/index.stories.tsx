import { Flex } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import FormTextInput from './FormTextInput';
import FormControl from '../FormControl/FormControl';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import FormLabel from '~/components/atoms/FormLabel/FormLabel';
import { FormInputSchema } from '~/types/formInput';

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

  const FORM_RESUME_TEXT_INPUT_SCHEMA: FormInputSchema = {
    title: {
      label: '제목',
      placeholder: '제목을 입력하세요',
      errorTypes: {
        required: { value: true, message: '필수 입력값 입니다.' },
      },
    },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BorderBox>
        <FormControl
          isInvalid={!!errors['title']}
          key={'title'}
        >
          <Flex>
            {FORM_RESUME_TEXT_INPUT_SCHEMA['title'].label && (
              <FormLabel
                htmlFor={'title'}
                isRequired={'required' in FORM_RESUME_TEXT_INPUT_SCHEMA['title'].errorTypes}
              >
                {FORM_RESUME_TEXT_INPUT_SCHEMA['title'].label}
              </FormLabel>
            )}
            <Flex direction={'column'}>
              <FormTextInput
                errors={errors}
                w={'25rem'}
                register={{
                  ...register('title', {
                    ...FORM_RESUME_TEXT_INPUT_SCHEMA['title'].errorTypes,
                  }),
                }}
                id={'title'}
                placeholder={FORM_RESUME_TEXT_INPUT_SCHEMA['title'].placeholder}
              />
            </Flex>
          </Flex>
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
