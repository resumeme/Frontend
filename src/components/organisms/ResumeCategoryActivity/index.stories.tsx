import type { Meta } from '@storybook/react';
import ActivityForm from './ActivityForm';

const meta = {
  title: 'Resumeme/Components/ActivityForm',
  component: ActivityForm,
  tags: ['autodocs'],
} satisfies Meta<typeof ActivityForm>;

export default meta;

export const Default = () => {
  return <ActivityForm />;
};
