import type { Meta } from '@storybook/react';
import AwardsForm from './AwardsForm';

const meta = {
  title: 'Resumeme/Components/AwardsForm',
  component: AwardsForm,
  tags: ['autodocs'],
} satisfies Meta<typeof AwardsForm>;

export default meta;

export const Default = () => {
  return <AwardsForm />;
};
