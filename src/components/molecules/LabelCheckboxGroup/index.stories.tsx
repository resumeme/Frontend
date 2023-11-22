import type { Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import LabelCheckboxGroup from './LabelCheckboxGroup';

const meta: Meta = {
  title: 'Resumeme/Components/LabelCheckboxGroup',
  component: LabelCheckboxGroup,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'text' },
    name: { control: 'text' },
  },
};

export default meta;

export const Default = () => {
  const { control, handleSubmit } = useForm();

  const options = { option1: 'Option 1', option2: 'Option 2', option3: 'Option 3' };

  const onSubmit = (data: { [key: string]: string }) => {
    alert(`selected options: ${JSON.stringify(data.selectedOptions)}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LabelCheckboxGroup
        required={false}
        variant="default"
        options={options}
        control={control}
        name="selectedOptions"
      />
      <button type="submit">확인</button>
    </form>
  );
};

export const Role = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: { [key: string]: string }) => {
    alert(`selected options: ${JSON.stringify(data.selectedOptions)}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LabelCheckboxGroup
        variant="role"
        control={control}
        name="selectedOptions"
      />
      <button type="submit">확인</button>
    </form>
  );
};

export const Domain = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: { [key: string]: string }) => {
    alert(`selected options: ${JSON.stringify(data.selectedOptions)}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LabelCheckboxGroup
        variant="domain"
        control={control}
        name="selectedOptions"
      />
      <button type="submit">확인</button>
    </form>
  );
};
