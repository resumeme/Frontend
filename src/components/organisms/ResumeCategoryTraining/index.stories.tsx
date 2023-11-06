import type { Meta } from '@storybook/react';
import TrainingForm from './TrainingForm';

const meta = {
  title: 'Resumeme/Components/TrainingForm',
  component: TrainingForm,
  tags: ['autodocs'],
} satisfies Meta<typeof TrainingForm>;

export default meta;

export const Default = () => {
  return <TrainingForm />;
};
