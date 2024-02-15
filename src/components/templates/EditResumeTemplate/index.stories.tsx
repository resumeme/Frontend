import type { Meta } from '@storybook/react';
import { EditResumeTemplate } from '.';

const meta = {
  title: 'Resumeme/Components/Templates/EditResumeTemplate',
  component: EditResumeTemplate,
  tags: ['autodocs'],
} satisfies Meta<typeof EditResumeTemplate>;

export default meta;

export const Default = () => {
  return <EditResumeTemplate />;
};
