import { FormControl, HStack } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import TermInput from './TermInput';
import { Button } from '~/components/atoms/Button';

const meta = {
  title: 'Resumeme/components/TermInput',
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
    register,
    formState: { errors },
  } = useForm();
  return (
    <TermInput
      startDateName="startDate"
      endDateName="endDate"
      register={register}
      errors={errors}
    />
  );
};

export const WithSubmit = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <FormControl isInvalid={Boolean(errors.endDate)}>
      <HStack>
        <TermInput
          startDateName="startDate"
          endDateName="endDate"
          isRequired={true}
          register={register}
          errors={errors}
        />
        <Button
          type="submit"
          size={'xs'}
        >
          저장
        </Button>
      </HStack>
    </FormControl>
  );
};
