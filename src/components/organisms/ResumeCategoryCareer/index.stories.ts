import type { Meta, StoryObj } from '@storybook/react';
import ResumeCategoryCareer from './ResumeCategoryCareer';

const meta = {
  title: 'Resumeme/Components/ResumeCategoryCareer',
  component: ResumeCategoryCareer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ResumeCategoryCareer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
