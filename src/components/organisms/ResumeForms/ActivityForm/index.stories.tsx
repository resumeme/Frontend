import type { Meta } from '@storybook/react';
import { ActivityForm } from '.';

const meta = {
  title: 'Resumeme/Components/Organisms/ActivityForm',
  component: ActivityForm,
  tags: ['autodocs'],
} satisfies Meta<typeof ActivityForm>;

export default meta;

export const Default = () => {
  return <ActivityForm onCancel={() => {}} />;
};
