import { Flex, HStack } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import FormControl from './FormControl';
import { FormDateInput } from '../FormDateInpur';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import FormLabel from '~/components/atoms/FormLabel/FormLabel';
import { FormInputSchema } from '~/types/formInput';

const meta = {
  title: 'Resumeme/Components/FormControl',
  component: FormControl,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'cancel'],
      control: { type: 'radio' },
    },
    size: {
      options: ['lg', 'md', 'sm', 'xs', 'full'],
      control: { type: 'radio' },
    },
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof FormControl>;

export default meta;

export const DefaultFormControl = () => {
  const {
    control,
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

  const FORM_RESUME_DATE_INPUT_SCHEMA: FormInputSchema = {
    endEventDate: {
      type: 'date',
      label: '첨삭 종료일',
      placeholder: '',
      errorTypes: {
        required: true,
      },
    },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BorderBox>
        <FormControl
          isInvalid={!!errors['endEventDate']}
          key={'endEventDate'}
        >
          {FORM_RESUME_DATE_INPUT_SCHEMA['endEventDate'].label && (
            <FormLabel
              htmlFor={'endEventDate'}
              isRequired={'required' in FORM_RESUME_DATE_INPUT_SCHEMA['endEventDate'].errorTypes}
            >
              {FORM_RESUME_DATE_INPUT_SCHEMA['endEventDate'].label}
            </FormLabel>
          )}
          <Flex direction={'column'}>
            <FormDateInput
              w={'16rem'}
              control={control}
              dateRegister={{
                ...register('endEventDate', {
                  ...FORM_RESUME_DATE_INPUT_SCHEMA['endEventDate'].errorTypes,
                }),
              }}
              id={'endEventDate'}
            />
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

export const ColumnFormControl = () => {
  const {
    control,
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

  const FORM_RESUME_DATE_INPUT_SCHEMA: FormInputSchema = {
    endEventDate: {
      type: 'date',
      label: '첨삭 종료일',
      placeholder: '',
      errorTypes: {
        required: true,
      },
    },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BorderBox>
        <FormControl
          direction="column"
          isInvalid={!!errors['endEventDate']}
          key={'endEventDate'}
        >
          {FORM_RESUME_DATE_INPUT_SCHEMA['endEventDate'].label && (
            <FormLabel
              htmlFor={'endEventDate'}
              isRequired={'required' in FORM_RESUME_DATE_INPUT_SCHEMA['endEventDate'].errorTypes}
            >
              {FORM_RESUME_DATE_INPUT_SCHEMA['endEventDate'].label}
            </FormLabel>
          )}
          <Flex direction={'column'}>
            <FormDateInput
              w={'16rem'}
              control={control}
              dateRegister={{
                ...register('endEventDate', {
                  ...FORM_RESUME_DATE_INPUT_SCHEMA['endEventDate'].errorTypes,
                }),
              }}
              id={'endEventDate'}
            />
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
