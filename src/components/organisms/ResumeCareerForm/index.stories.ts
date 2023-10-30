import type { Meta, StoryObj } from '@storybook/react';
import ResumeCareerForm from './ResumeCareerForm';

const meta = {
  title: 'Resumeme/Components/ResumeCareerForm',
  component: ResumeCareerForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ResumeCareerForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
