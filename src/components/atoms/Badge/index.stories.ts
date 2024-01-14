import type { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';

const meta = {
  title: 'Resumeme/Components/Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    bg: { control: 'color' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '기본',
    type: 'default',
  },
};

export const DefaultCustom: Story = {
  args: {
    children: '기본2',
    type: 'default',
    bg: '#191F28',
    color: '#FFFFFF',
  },
};

export const Mentee: Story = {
  args: {
    children: '멘티',
    type: 'mentee',
  },
};

export const Mentor: Story = {
  args: {
    children: '멘토',
    type: 'mentor',
  },
};
