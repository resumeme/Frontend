import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import LabelCheckboxGroup, { LabelCheckboxGroupProps } from './LabelCheckboxGroup';

const meta: Meta = {
  title: 'Resumeme/Components/LabelCheckboxGroup',
  component: LabelCheckboxGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: LabelCheckboxGroupProps) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(`selected options: ${JSON.stringify(data.selectedOptions)}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LabelCheckboxGroup
        options={args.options}
        variant={args.variant}
        control={control}
        name="selectedOptions"
      />
      <button type="submit">확인</button>
    </form>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
};

export const Role: Story = Template.bind({});
Role.args = {
  variant: 'role',
  name: 'selectedOptions',
};

export const Domain: Story = Template.bind({});
Domain.args = {
  variant: 'domain',
  name: 'selectedOptions',
};
