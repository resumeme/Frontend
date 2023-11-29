import type { Meta } from '@storybook/react';
import { ResumeSelect } from '.';

const meta = {
  title: 'Resumeme/Components/ResumeSelect ',
  component: ResumeSelect,
  tags: ['autodocs'],
} satisfies Meta<typeof ResumeSelect>;

export default meta;

export const Default = () => {
  return (
    <ResumeSelect
      onCancel={() => {}}
      onSubmit={() => {}}
    />
  );
};
