import { Flex, FormControl } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import TermInput from './TermInput';
import { Button } from '~/components/atoms/Button';

const meta = {
  title: 'Resumeme/components/Molecules/TermInput',
  component: TermInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TermInput>;

export default meta;

export const Default = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useForm();
  return (
    <TermInput
      startDateName="startDate"
      endDateName="endDate"
      register={register}
      errors={errors}
      control={control}
    />
  );
};

export const WithSubmit = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={Boolean(errors.endDate)}>
        <Flex
          align={'center'}
          gap={2}
        >
          <TermInput
            future
            startDateName="startDate"
            endDateName="endDate"
            isRequired={true}
            register={register}
            errors={errors}
            control={control}
          />
          <Button
            type="submit"
            size={'xs'}
          >
            저장
          </Button>
        </Flex>
      </FormControl>
    </form>
  );
};
