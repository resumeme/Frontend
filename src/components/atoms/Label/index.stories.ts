import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const meta = {
  title: 'Resumeme/Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    bg: { control: 'color' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '기본라벨',
    type: 'default',
  },
};

export const DefaultCustom: Story = {
  args: {
    children: '기본커스텀',
    type: 'default',
    bg: 'blue.200',
    color: 'blue.800',
  },
};

export const Frontend: Story = {
  args: {
    type: 'FRONT',
  },
};

export const Backend: Story = {
  args: {
    type: 'BACK',
  },
};

export const Devops: Story = {
  args: {
    type: 'DEVOPS',
  },
};

export const Mobile: Story = {
  args: {
    type: 'MOBILE',
  },
};

export const Ai: Story = {
  args: {
    type: 'ML_AI',
  },
};

export const Fullstack: Story = {
  args: {
    type: 'FULLSTACK',
  },
};
